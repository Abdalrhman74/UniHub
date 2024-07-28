import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Posts/Posts.css';
import StudentMaterialSidebar from '../Materials/StudentMaterialSidebar';

const BankQuestion = () => {
  const { courseId } = useParams();

  const [questions, setQuestions] = useState([]);
  const [comments, setComments] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, [courseId]);

  const fetchQuestions = async () => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        setError('Authentication token is missing');
        return;
      }

      const response = await axios.get(`http://127.0.0.1:4000/post/course/${courseId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (Array.isArray(response.data.posts)) {
        const questionPosts = response.data.posts.filter(post => post.tag === 'Question');
        const questionsWithUserDetails = await Promise.all(
          questionPosts.map(async (post) => {
            const userDetails = await fetchUserDetails(post.userId);
            return {
              ...post,
              userDetails: userDetails // Add user details to each post
            };
          })
        );
        setQuestions(questionsWithUserDetails);
        questionPosts.forEach(post => fetchComments(post.postId));
      } else {
        setError('Unexpected response format');
      }
    } catch (error) {
      setError('Failed to fetch questions');
    }
  };

  const fetchUserDetails = async (userId) => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.get(`http://127.0.0.1:4000/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data; // Assuming backend returns { firstName, lastName, ... }
    } catch (error) {
      console.error('Failed to fetch user details:', error);
      return null;
    }
  };

  const fetchComments = async (postId) => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.get(`http://127.0.0.1:4000/post/${postId}/comments`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const commentsWithUserDetails = await Promise.all(
        response.data.map(async (comment) => {
          const userDetails = await fetchUserDetails(comment.userId);
          return {
            ...comment,
            userDetails: userDetails // Add user details to each comment
          };
        })
      );

      setComments(prevComments => ({
        ...prevComments,
        [postId]: commentsWithUserDetails
      }));
    } catch (error) {
      console.error('Failed to fetch comments:', error);
      setError('Failed to fetch comments');
    }
  };

  return (
    <div className="bg-gray-50 font-sans sss">
      <StudentMaterialSidebar />
      <div className="xl:container mx-auto">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12">
            <main className="p-4 md:p-5">
              <div className="bg-white rounded shadow p-6 md:p-7 lg:p-9">
                {questions.length > 0 ? (
                  questions.map((post) => (
                    <div key={post.postId} className="bg-white rounded shadow mt-5 relative ddjj">
                      <h1 className="font-bold text-gray-600 text-center pt-4">
                        {post.userDetails?.firstName} {post.userDetails?.lastName}
                      </h1>
                      <h1 className="font-bold text-black-500 text-center pt-2 text-xl">{post.tag}</h1>
                      <div className="p-6 md:p-7 lg:p-9">
                        <h1 className="font-bold text-red-500 text-3xl">{post.postName}</h1>
                        <h3 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">
                          {post.content}
                        </h3>
                        <div className="mt-3 mb-3 text-sm text-gray-700 flex items-center">
                          <span className="ml-1">
                            <div>
                              <i className="fa fa-clock-o"></i>
                              {post.postDate.slice(0, 10)}
                              <br />
                              <i className="fa fa-clock-o"></i>
                              {post.postDate.slice(11, 16)}
                            </div>
                          </span>
                        </div>
                        <div className="text-base md:text-lg text-gray-500">
                          <p className="leading-7 lg:leading-8">{post.excerpt}</p>
                        </div>
                        <div className="mt-4">
                          {comments[post.postId] && comments[post.postId].length > 0 ? (
                            <div className="bg-gray-100 p-2 rounded-md  ">
                              {comments[post.postId].map((comment) => (
                                <div key={comment.commentId} className="mb-2 text-sm">
                                  <div className="flex items-start">
                                    <div className="mr-2">
                                      <i className="fa fa-user-circle text-xl text-gray-500"></i>
                                    </div>
                                    <div>
                                      <div className="font-bold text-gray-600">
                                        {comment.userDetails?.firstName} {comment.userDetails?.lastName}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        <i className="fa fa-clock-o"></i> {comment.commentDate.slice(0, 10)}
                                        <br />
                                        <i className="fa fa-clock-o"></i> {comment.commentDate.slice(11, 16)}
                                      </div>
                                      <div className="text-gray-700 mt-1">
                                        {comment.commentBody}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-gray-500">No comments yet.</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-black">No questions available.</div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankQuestion;
