
import React, { useEffect, useState } from 'react';
import './Materials.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileWord, faFilePowerpoint, faFileVideo, faFileImage, faFile } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../../Components/Tailwind/tailwind.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Rating from 'react-rating-stars-component';  // Import the rating component

import img1 from '../../../Assets/images/vecteezy_user-icon-on-transparent-background_19879186.png';
import { format } from 'date-fns';
import StudentMaterialSidebar from './StudentMaterialSidebar';


const Materials = () => {
    const { courseId} = useParams();
    const [materials, setMaterials] = useState([]);

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        bDate: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const [course, setCourse] = useState(null);

    const [rating, setRating] = useState(0);
    
    useEffect(() => {
        fetchUserProfile();

    }, []);

    useEffect(() => {
        fetchCourseRating(); // Fetch course rating on initial render and whenever courseId changes
    }, [courseId]);
    

    const fetchUserProfile = async () => {
        try {
            const token = sessionStorage.getItem('token');
            const response = await axios.get('http://127.0.0.1:4000/getUserData', {
                headers: { Authorization: `Bearer ${token}` }
            });
    
            if (response.data) {
                const userData = response.data.data[0];
                // Format the birth date to YYYY-MM-DD using date-fns
                userData.bDate = format(new Date(userData.bDate), 'yyyy-MM-dd');
                setUserData(userData);
            } else {
                setError('User profile not found');
            }
        } catch (error) {
            setError('Failed to fetch user profile');
        }
    };

    const fetchCourseRating = async () => {
        try {
            const token = sessionStorage.getItem('token');
            const response = await axios.get(`http://localhost:4000/course/${courseId}/rating`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response.data.rating !== undefined) {
                setRating(response.data.rating);
            } else {
                setRating(0); // Default to 0 if rating is undefined or null
            }
        } catch (error) {
            console.error('Failed to fetch course rating:', error);
            setRating(0); // Handle error case by setting rating to 0
        }
    };
    
    
    

    const handleRatingChange = async (newRating) => {
        try {
          const token = sessionStorage.getItem('token');
          await axios.post(`http://127.0.0.1:4000/course/${courseId}/rate`, { rating: newRating }, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setRating(newRating);  // Update state with new rating
          toast.success('Rating submitted successfully');
        } catch (error) {
          console.error('Failed to submit rating:', error);
          toast.error('Failed to submit rating');
        }
      };
      
    
    
    

    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const response = await axios.get(`http://localhost:4000/material/course/${courseId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log("ccc",response.data);
                setMaterials(response.data);
            } catch (error) {
                console.error('Failed to fetch materials:', error);
            }
        };
    
        const fetchCourseDetails = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const response = await axios.get(`http://localhost:4000/courses/${courseId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setCourse(response.data);
            } catch (error) {
                console.error('Error fetching course details:', error);
            }
        };
    
      
    
        fetchMaterials();
        fetchCourseDetails();
    }, [courseId]);
    
   
   

   // Function to get file extension from URL
   const getFileExtension = (url) => {
    try {
        const urlObject = new URL(url);
        const pathname = urlObject.pathname;
        const extension = pathname.split('.').pop().toLowerCase();
        return extension;
    } catch (error) {
        console.error('Invalid URL:', url);
        return '';
    }
};

// Function to determine icon based on file extension
const getIconForFileType = (url) => {
    const extension = getFileExtension(url);

    switch (extension) {
        case 'pdf':
            return faFilePdf;
        case 'doc':
        case 'docx':
            return faFileWord;
        case 'ppt':
        case 'pptx':
            return faFilePowerpoint;
        case 'mp4':
        case 'avi':
        case 'mov':
            return faFileVideo;
        case 'jpg':
        case 'jpeg':
        case 'png':
            return faFileImage;
        default:
            return faFile; // Default icon for other file types
    }
};

const handleDownload = async (url) => {
    // try {
    //     const response = await axios.get(`http://localhost:4000/proxy-file?url=${encodeURIComponent(url)}`, {
    //         responseType: 'blob', // Important: responseType as blob
    //     });

    //     const blob = new Blob([response.data]);
    //     const href = URL.createObjectURL(blob);

    //     const link = document.createElement('a');
    //     link.href = href;
    //     link.download = ''; // You can specify the file name here if needed
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // } catch (error) {
    //     console.error('Failed to download file:', error);
    // }
};






    return (
        <div>
            <StudentMaterialSidebar />
            <div className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200 rightContentMaterials" id="panel">
                <div className="flex flex-wrap -mx-3 removable">
                    <div className="w-full max-w-full px-3 mb-4 sm:w-full sm:flex-none">
                        <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4 mb-4">
                            <div className="relative h-full overflow-hidden bg-cover py-6 rounded-xl" style={{backgroundImage: "url('https://images.unsplash.com/photo-1655635643532-fa9ba2648cbe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2232&amp;q=80')"}}>
                                <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
                                <div className="relative z-10 flex flex-col flex-auto h-full p-4">
                                    <h1 className="pt-2 mb-6 font-bold text-white text-3xl ">{course && course.course.courseName} </h1>
                                        <h2 className="mt-auto mb-0 font-semibold leading-normal text-white group text-2xl">
                                            Let's Discover More
                                            <i className="fas fa-arrow-down ease-bounce text-size-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200" aria-hidden="true" data-selected="selected-icon-hover"></i>
                                        </h2>
                                        <h2 className='flex items-center text-white text-lg mt-4'>Course Rating:
                                        {console.log("asd",rating)}

                                        <Rating
                                            key={rating} // Add key to force re-render when rating changes
                                            count={5}
                                            onChange={handleRatingChange}
                                            value={rating}
                                            size={24}
                                            activeColor="#ffd700"
                                            style={{ justifyContent: 'center' }}
                                        />


                                        </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-6 py-6 mx-auto loopple-min-height-78vh text-slate-500">
                    <div className="flex flex-wrap -mx-3 removable">
                        {materials.map((material) => (
                            <div key={material.materialId} className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none">
                                <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl px-3 py-3 rounded-2xl bg-clip-border">
                                    <div className="relative text-center">
                                        <a href={material.link} className="block shadow-xl rounded-2xl refmaterialimage" target='_blank'>
                                            <FontAwesomeIcon icon={getIconForFileType(material.link)} className="materialicon  materialimage" size="6x" />
                                        </a>
                                    </div>
                                    <div className="flex-auto px-1 pt-6">
                                        <p className="relative z-10 mb-2 leading-normal text-transparent bg-slate-700 text-xl bg-clip-text ">{material.materialName}</p>
                                        <a href={material.link}>
                                            <h5 className='text-xl'>{material.materialDesc}</h5>
                                        </a>
                                        <div className="flex items-center justify-between mt-4">
                                        <a href={material.link} className="" target='_blank'>
                                            <button
                                                type="button"
                                                className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                                            >
                                                Open
                                            </button>
                                            </a>
                                            <span>{format(new Date(material.uploadDate), 'yyyy-MM-dd HH:mm')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Materials;
