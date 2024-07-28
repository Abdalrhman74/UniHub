import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../Components/Tailwind/tailwind.css';
import '../../Components/Student/Home/Home.css';
import { format } from 'date-fns';
import Footer from '../ReusedCompenents/Footer';
import { toast } from 'react-toastify';
import AdminSidebar from '../ReusedCompenents/AdminSidebar';
import "./AdminHome.css"

const AdminHome = () => {
    const [courses, setCourses] = useState([]);
    const [userData, setUserData] = useState(null); // State to hold user data


    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 5;
    const [courseStatistics, setCourseStatistics] = useState(null); // New state for course statistics
    const [coursePhotos, setCoursePhotos] = useState({});
    const [filteredCourses, setFilteredCourses] = useState([]);


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const response = await axios.get('http://127.0.0.1:4000/getUserData', {
                    headers: { Authorization: `Bearer ${token}` }
                });
    
                if (response.data) {
                    setUserData(response.data.data);
                } else {
                    setError('User profile not found');
                }
            } catch (error) {
                setError('Failed to fetch user profile');
            }
        };
            
        

        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:4000/courses');
                setCourses(response.data);
                setFilteredCourses(response.data); // Initialize filtered courses
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        const fetchCourseStatistics = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const response = await axios.get('http://127.0.0.1:4000/course/userstatistics', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (response.data) {
                    setCourseStatistics(response.data);
                } else {
                    setError('Failed to fetch course statistics');
                }
            } catch (error) {
                console.error('Error fetching course statistics:', error);
                setError('Failed to fetch course statistics');
            }
        };
     
        const fetchCoursePhotos = async (courseIds) => {
            const token = sessionStorage.getItem('token');
            const photoPromises = courseIds.map(courseId =>
                axios.get(`http://127.0.0.1:4000/course-photo/${courseId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                }).then(response => ({ courseId, photo: response.data.coursePhoto }))
                .catch(() => ({ courseId, photo: '' }))
            );

            try {
                const photoResponses = await Promise.all(photoPromises);
                const photos = photoResponses.reduce((acc, { courseId, photo }) => {
                    acc[courseId] = photo || '';
                    return acc;
                }, {});
                setCoursePhotos(photos);
            } catch (error) {
                console.error('Error fetching course photos:', error);
            }
        };

        fetchCourses().then(() => {
            const courseIds = courses.map(course => course.courseID);
            fetchCoursePhotos(courseIds);
        });
        

        fetchUserData();
        fetchCourses();
        fetchCourseStatistics();

    }, [courses.length]);

    useEffect(() => {
        if (query) {
            const filtered = courses.filter(course =>
                course.courseName.toLowerCase().includes(query.toLowerCase()) ||
                course.courseCode.toLowerCase().includes(query.toLowerCase())
                
            );
            setFilteredCourses(filtered);
        } else {
            setFilteredCourses(courses);
        }
    }, [query, courses]);


    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const clearInput = () => {
        setQuery('');
        setSuggestions([]);
    };

    

   

   

   

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = Array.isArray(filteredCourses) ? filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse) : [];
    
    

    
    return (

        
        
        <div >
            
            <AdminSidebar />
       
    <div class="lg:ml-[300px] relative h-full max-h-screen rounded-xl transition-all duration-200 bg-white AdminHomePage" id="panel">
        <nav class="flex h-28 mb-5 lg:h-[96px]" id="navbarTop" navbar-scroll="true">
            <div class="sm:flex items-stretch justify-between grow lg:mb-0 mb-5 py-5 px-10">
                <div class="flex flex-col flex-wrap justify-center mb-5 mr-3 lg:mb-0">
                    <span class="my-0 flex text-dark font-semibold text-[1.35rem]/[1.2] flex-col justify-center">Courses</span>
                    {/* <span class="pt-1 text-secondary-dark text-[0.95rem] font-medium">Check all available courses</span> */}
                </div>
                <div class="flex items-center lg:shrink-0 lg:flex-nowrap">
  <div class="relative flex flex-col items-center lg:ml-4 sm:mr-0 mr-2 w-full">
    <div class="relative w-full">
      <span class="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
        </svg>
      </span>
      <input
        class="block w-full py-3 pl-12 pr-4 text-base font-medium leading-normal bg-white border border-solid outline-none appearance-none placeholder:text-secondary-dark peer text-stone-500 border-stone-200 bg-clip-padding rounded-2xl"
        placeholder="Search..."
        type="text"
        value={query}
        onChange={handleInputChange}
      />
      <span onClick={clearInput} class="absolute right-0 left-auto mr-4 leading-none -translate-y-1/2 peer-placeholder-shown:hidden top-1/2 hover:text-primary text-muted">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </span>
    </div>
    {suggestions.length > 0 && (
      <ul class="absolute w-full bg-white border border-stone-200 rounded-lg shadow-lg mt-12 z-10">
        {suggestions.map((course) => (
          <li key={course.id} class="py-2 px-4 hover:bg-gray-100 cursor-pointer">
          {course.courseName} ({course.courseCode})
          


        </li>
        ))}
      </ul>
    )}
  

            
                    </div>
                    {/* <div class="relative lg:hidden flex items-center sm:ml-2 ml-auto">
                        <a href="javascript:void(0)" class="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary" onclick="(function(){document.querySelector('.group\\/sidebar').classList.toggle('-translate-x-full');})();">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                            </svg>
                        </a>
                    </div> */}
                    
                    
                </div>
            </div>
        </nav>
        <div class="w-full px-10 py-6 mx-auto loopple-min-height-78vh text-slate-500">
            <div class="flex flex-wrap -mx-3 mb-5 removable">
                <div class="w-full max-w-full px-3 mb-6 lg:w-8/12 sm:flex-none xl:mb-0">
                    <div class="relative flex flex-col break-words min-w-0 bg-clip-border rounded-xl bg-neutral-900 mb-5">
                        {/* <!-- card body  --> */}
                        <div class="flex-auto block py-8 px-9">
                            <div class="m-0 z-20 relative">
                                <div class="relative z-20 text-3xl font-semibold text-white w-3/4">

                                        Hello {userData && userData[0].firstName} !

                                       

                                </div>
                                <p class="mb-7 text-white">We are happy to see you again.</p>
                                <div class="flex flex-col gap-2 xl:gap-4 sm:flex-row">
                                <Link to={'/AdminHome'}>

                                    <a href="javascript:void(0)" class="shrink-0 inline-block text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-[.95rem] transition-colors duration-150 ease-in-out text-dark bg-white border-white shadow-none [border:_0]  px-5 py-3.5 hover:bg-white/90 active:bg-white focus:bg-white
                ">All Courses</a></Link>
                
                                </div>
                            </div>
                            <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/bonus.png" class="bottom-0 absolute mr-3 end-0 h-[200px] opacity-40 z-10" alt="" />
                        </div>
                    </div>
                    <h3 class="font-bold mb-4 text-2xl">Courses</h3>
                    <div class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 mb-5">
                        {/* <!-- card header --> */}
                        <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                            <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                <span class="mr-3 font-semibold text-dark">All Courses</span>
                                <span class="mt-1 font-medium text-secondary-dark text-lg/normal" >Check all available courses</span>
                            </h3>
                            
                        </div>
                        {/* <!-- end card header --> */}
                        {/* <!-- card body  --> */}
                        <div className="flex-auto block py-8 pt-6 px-9 text-black">
            <div className="overflow-x-auto">
                <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                            <th className="pb-3 text-start min-w-[175px]">COURSE</th>
                            <th className="pb-3 text-end min-w-[100px]">INSTRUCTOR</th>
                            <th className="pb-3 text-end min-w-[100px]">CREDIT</th>
                            <th className="pb-3 pr-12 text-end min-w-[100px]">Course Code</th>
                            <th className="pb-3 text-end min-w-[50px]">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentCourses.map((course) => (
                            <tr key={course.courseID} className="border-b border-dashed last:border-b-0">
                                <td className="p-3 pl-0">
                                    <div className="flex items-center">
                                        <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                        <img
                                            src={coursePhotos[course.courseID] || 'placeholder.jpg'}
                                            className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                            alt=""
                                        />                                           </div>
                                        <div className="flex flex-col justify-start">
                                            <a href="javascript:void(0)" className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary">
                                                {course.courseName}
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3 pr-0 text-end">
                                    <span className="font-semibold text-light-inverse text-md/normal">{course.fullName}</span>
                                    
                                </td>
                                <td className="p-3 pr-0 text-end">
                                    <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>{course.credtHours + " Hours"}
                                    </span>
                                </td>
                                <td className="p-3 pr-12 text-end">
                                <span className="font-semibold text-light-inverse text-md/normal">{course.courseCode}</span>

                                </td>
                                
                                <td className="p-3 pr-0 text-end">
                                <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                                </svg>
                                            </span>
                                        </button>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(filteredCourses.length / coursesPerPage) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`px-3 py-1 mx-1 rounded ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-200 text-black'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
                    </div>
                </div>
               
            </div>
        </div>
        

            <Footer />

    </div>


           









    </div>






    );
}

export default AdminHome;
