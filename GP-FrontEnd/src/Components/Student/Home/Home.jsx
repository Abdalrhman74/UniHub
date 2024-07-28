import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../Tailwind/tailwind.css';
import './Home.css';
import { format } from 'date-fns';
import Sidebar from '../../ReusedCompenents/Sidebar';
import Footer from '../../ReusedCompenents/Footer';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot ,faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import StudentChatbot from '../Chatbot/Chatbot';
const Home = () => {
    const [courses, setCourses] = useState([]);
    const [userData, setUserData] = useState(null); // State to hold user data
    const [isChatbotVisible, setIsChatbotVisible] = useState(false);

    const toggleChatbot = () => {
      setIsChatbotVisible(!isChatbotVisible);
    };
    const [tasks, setTasks] = useState([]);

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const [showDescription, setShowDescription] = useState(null); // State to manage description visibility
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 5;

    const [courseStatistics, setCourseStatistics] = useState(null); // New state for course statistics

    const [registrationStatus, setRegistrationStatus] = useState(false);


    const [registrationStatuses, setRegistrationStatuses] = useState({});

    const [notifications, setNotifications] = useState([]); // State to hold all notifications
    const [displayedNotifications, setDisplayedNotifications] = useState([]); // State to hold displayed notifications
    const [notificationsCount, setNotificationsCount] = useState(5); // Initial count of notifications to display
    const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false); // State to manage notifications dropdown visibility
    const [coursePhotos, setCoursePhotos] = useState({});
    const [profilePhotoUrl, setProfilePhotoUrl] = useState(null); // State to hold profile photo URL


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const response = await axios.get('http://127.0.0.1:4000/getUserData', {
                    headers: { Authorization: `Bearer ${token}` }
                });
    
                console.log('mas',response.data);
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
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        const fetchTasks = async () => {
            try {
                const token = sessionStorage.getItem('token'); 
                const response = await axios.get('http://127.0.0.1:4000/listTasks', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (response.data) {
                    const formattedTasks = response.data.map(task => ({
                        ...task,
                        dueDate: format(new Date(task.dueDate), 'yyyy-MM-dd HH:mm') // Format dueDate
                    }));
                    setTasks(formattedTasks);
                } else {
                    setError('No tasks found');
                }
            } catch (error) {
                console.error('Error fetching tasks:', error);
                setError('Failed to fetch tasks');
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


        const fetchRegistrationStatuses = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const statuses = {};
                for (const course of courses) {
                    const response = await axios.get(`http://127.0.0.1:4000/course/${course.courseID}/registered`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    statuses[course.courseID] = response.data.isRegistered ? 'Registered' : 'Not Registered';
                }
                setRegistrationStatuses(statuses);
            } catch (error) {
                console.error('Error checking registration statuses:', error);
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
        const fetchProfilePhoto = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const response = await axios.get('http://127.0.0.1:4000/get-photo', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (response.data && response.data.profilePhotoUrl) {
                    
                    setProfilePhotoUrl(response.data.profilePhotoUrl);
                } else {
                    setError('Profile photo not found');
                }
            } catch (error) {
                setError('Failed to fetch profile photo');
            }
        };

        fetchCourses().then(() => {
            const courseIds = courses.map(course => course.courseID);
            fetchCoursePhotos(courseIds);
        });
        fetchProfilePhoto();
        fetchUserData();
        fetchCourses();
        fetchTasks();
        fetchCourseStatistics();

        if (courses.length > 0) {
            fetchRegistrationStatuses();
        }

    }, [courses.length]); 

    useEffect(() => {
        if (query) {
            const fetchSuggestions = async () => {
                try {
                    const response = await axios.get('http://127.0.0.1:4000/courses/search', {
                        params: { course: query }
                    }); 

                    setSuggestions(response.data.courses.slice(0, 5)); // Limit to 5 suggestions
                                        
                } catch (error) {
                    console.error('Error fetching suggestions:', error);
                }
            };

            fetchSuggestions();
        } else {
            setSuggestions([]);
        }
    }, [query]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const clearInput = () => {
        setQuery('');
        setSuggestions([]);
    };

    
    

    const handleCheckTask = async (taskId) => {
        try {
            const response = await axios.put('http://127.0.0.1:4000/markTaskAsCompleted', { taskId });
            // Update the task status in the state
            setTasks(tasks.map(task => task.taskId === taskId ? { ...task, status: 1 } : task));
            toast.success('Task marked as completed');

        } catch (error) {
            console.error('Failed to mark task as completed', error);
        }
    };

    const handleDeleteTask = async (taskName) => {
        try {
            const token = sessionStorage.getItem('token');
            await axios.delete('http://127.0.0.1:4000/deleteTasks', {
                headers: { Authorization: `Bearer ${token}` },
                data: { taskName } // Send taskName in the data field
            });
            setTasks(tasks.filter(task => task.taskName !== taskName));
            toast.success('Task deleted successfully');

        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleShowDescription = (taskId) => {
        setShowDescription(prevTaskId => (prevTaskId === taskId ? null : taskId));
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = Array.isArray(courses) ? courses.slice(indexOfFirstCourse, indexOfLastCourse) : [];
    
    
    
    const checkRegistrationStatus = async (courseId) => {
        try {
            const token = sessionStorage.getItem('token');
            const response = await axios.get(`http://127.0.0.1:4000/course/${courseId}/registered`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if( response.data.isRegistered){
                setRegistrationStatus(true);
            }
            else{

                setRegistrationStatus(false);
            }
        } catch (error) {
            console.error('Error checking registration status:', error);
            return false;
        }
    };

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const response = await axios.get('http://127.0.0.1:4000/announcements/recent', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (response.data) {
                    // Sort notifications by postDate in descending order
                    const sortedNotifications = response.data.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));
                    setNotifications(sortedNotifications);
                    setDisplayedNotifications(sortedNotifications.slice(0, notificationsCount));
                } else {
                    setError('Notifications not found');
                }
            } catch (error) {
                setError('Failed to fetch notifications');
            }
        };

        fetchNotifications();
    }, [notificationsCount]);

    const loadMoreNotifications = () => {
        setNotificationsCount(notificationsCount + 5);
        setDisplayedNotifications(notifications.slice(0, notificationsCount + 5));
    };
    
    return (

        
        
        <div>
            
            <Sidebar/>
       
    <div class="lg:ml-[300px] relative h-full max-h-screen rounded-xl transition-all duration-200 bg-white" id="panel">
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
           {checkRegistrationStatus(course.courseID) && registrationStatus ? (
                                <Link to={`/Materials/${course.courseID}`}>
                                    {course.courseName} ({course.courseCode})
                                </Link>
                            ) : (
                                <Link to={`/CourseInfo/${course.courseID}`}>
                                    {course.courseName} ({course.courseCode})
                                </Link>
                            )}


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
                    <div class="relative flex items-center ml-2 lg:ml-4">
                        <Link to={'/Settings'} class="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </Link>
                    </div>
                    {/* Notification button */}
            <div className="relative flex items-center ml-2 lg:ml-4">
                <button
                    onClick={() => setShowNotificationsDropdown(!showNotificationsDropdown)}
                    className="relative flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"></path>
                    </svg>
                    <div className="absolute flex justify-center items-center w-6 h-6 font-semibold leading-normal text-center text-white transition-colors duration-150 ease-in-out shadow-none cursor-pointer rounded-full bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark top-0 right-0 -me-1 -mt-1">
                        <span>{notifications.length}</span>
                    </div>
                </button>
                {showNotificationsDropdown && (
                <div className="absolute right-0 top-full mt-2 w-96 bg-white border border-stone-200 rounded-lg shadow-lg z-10 max-h-96 overflow-auto notificationShow">
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">Notifications</h2>
                        {displayedNotifications.map(notification => (
                            <div key={notification.id} className="mb-2 p-2 border-b border-neutral-200">
                                <h3 className="font-semibold">{notification.title}</h3>
                                <p className="text-gray-600">{notification.message}</p>
                                <p className="text-gray-400">{new Date(notification.postDate).toLocaleString()}</p>
                            </div>
                        ))}
                        {notifications.length > notificationsCount && (
                            <button
                                onClick={loadMoreNotifications}
                                className="w-full py-2 mt-2 font-semibold text-center bg-purple-600 rounded-md hover:bg-purple-800"
                            >
                                View More
                            </button>
                        )}
                                  </div>
                                </div>
                            )}
                    </div>
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
                                <Link to={'/Home'}>

                                    <a href="javascript:void(0)" class="shrink-0 inline-block text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-[.95rem] transition-colors duration-150 ease-in-out text-dark bg-white border-white shadow-none [border:_0]  px-5 py-3.5 hover:bg-white/90 active:bg-white focus:bg-white
                ">All Courses</a></Link>
                <Link to={'/MyCourses'}>
                                    <a href="javascript:void(0)" class="inline-block shrink-0 text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-[.95rem] transition-colors duration-150 ease-in-out text-white bg-white/[.15] shadow-none [border:_0]  px-5 py-3.5 hover:bg-white/25 active:bg-white/25 focus:bg-white/25
                ">My Courses</a>
                </Link>
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
                                <span class="mt-1 font-medium text-secondary-dark text-lg/normal" >Check some of available courses</span>
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
                            <th className="pb-3 pr-12 text-end min-w-[175px]">STATUS</th>
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
                                        />                                        </div>
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
                                
                                <td className="p-3  text-end">
                                 <span className={`text-center align-baseline inline-flex px-4 py-3 mr-auto  items-center font-semibold text-[.95rem] leading-none rounded-lg ${registrationStatuses[course.courseID] === "Registered" ? 'text-success bg-success-light' : 'text-warning bg-warning-light'}`}>
                                {registrationStatuses[course.courseID]}
                            </span>
                                </td>
                                <td className="pr-0  text-center">
                                    <span className="font-semibold text-light-inverse text-md/normal">{course.courseCode}</span>
                                </td>
                                <td className="p-3 pr-0 text-end">
                                {checkRegistrationStatus(course.courseID) && registrationStatus ? (
                                <Link to={`/Materials/${course.courseID}`}>
                                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                                </svg>
                                            </span>
                                        </button>
                                </Link>
                            ) : (
                                <Link to={`/CourseInfo/${course.courseID}`}>
                                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                                </svg>
                                            </span>
                                        </button>
                                </Link>
                            )}
                                
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(courses.length / coursesPerPage) }, (_, i) => (
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
                <div class="w-full max-w-full px-3 mb-6 lg:w-4/12 sm:flex-none xl:mb-0">
                    <div class="relative flex flex-col min-w-0 break-words bg-gray-100 border-0 bg-clip-border rounded-2xl mb-5">
                        {/* <!-- card header --> */}
                        <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                            <div class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/normal text-dark">
                                {/* <!--begin::Amount--> */}
                                <span class="text-dark text-5xl/none font-semibold mr-2 tracking-[-0.115rem]">{courseStatistics && courseStatistics.status1Count}</span>
                                {/* <!--end::Amount--> */}

                                {/* <!--begin::Subtitle--> */}
                                <span class="pt-1 font-medium text-dark text-lg/normal">Courses Archived</span>
                                {/* <!--end::Subtitle--> */}
                            </div>
                        </div>
                        {/* <!-- card body  --> */}
                        <div class="flex items-end flex-auto py-8 pt-0 px-9 ">
                            {/* <!--begin::Progress--> */}
                            <div class="flex flex-col items-center w-full mt-3">
                            <div class="flex justify-between w-full mt-auto mb-2 font-semibold text-dark text-lg/normal">
                                <span class="mr-4 text-dark">{courseStatistics && courseStatistics.status0Count} Active</span>
                                <span>{(courseStatistics && courseStatistics.status0Percentage.toFixed(2)) || '0.00'}%</span>
                            </div>

                                <div class="mx-3 rounded-2xl h-[8px] w-full bg-white">
                                    <div class="rounded-2xl bg-dark w-[85%] h-[8px]" style={{ width: `${courseStatistics && courseStatistics.status0Percentage}%`}}></div>
                                </div>
                            </div>
                            {/* <!--end::Progress--> */}
                        </div>
                        {/* <!-- end card body  --> */}
                    </div>
                    {/* <!-- end card body  --> */}
                    <div>
    <h3 className="font-bold mb-5 text-2xl">ToDo List</h3>
    <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 mb-5">
        <div className="flex-auto block py-8 pt-6 px-9 text-black">
            {tasks.map((task) => (
                <div key={task.taskId} className="relative flex flex-col mb-7">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center flex-1">
                            <div className="block relative shrink-0 w-[50px] text-secondary-inverse font-semibold text-md/normal before:absolute before:content-[''] before:left-[51px] before:w-[3px] before:inset-y-0 before:bg-light-dark">
                            {task.dueDate.slice(11,16)}
                            </div>
                            <div className={`shrink-0 bg-white large-circle rounded-full flex items-center justify-center relative z-10 mt-px -ml-2 border-solid border-white`}>
                            <i className={`fa fa-circle text-${task.status === 1 ? 'success' : 'danger'} text-md/normal markCircle w-50`}></i>
                            </div>
                            <div className=" pl-3 text-2xl">{task.taskName}</div>
                        </div>
                        <div className="flex items-center">
                            <button 
                                className="fas fa-eye showDescBtn ml-3"
                                onClick={() => handleShowDescription(task.taskId)}
                            ></button>
                            <button 
                                className="fa-solid fa-square-check check-icon ml-3"
                                onClick={() => handleCheckTask(task.taskId)}
                            ></button>
                            <button 
                                className="fas fa-trash trash-icon ml-3"
                                onClick={() => handleDeleteTask(task.taskName)}
                            ></button>
                        </div>
                    </div>
                    {showDescription === task.taskId && (
                        <div className="mt-3 p-4 bg-gray-100 border rounded text-2xl">
                            <p>Description: {task.taskDesc}</p>
                            <br />
                            <p>Due Date: {task.dueDate.slice(0,10)}</p>
                        </div>
                    )}
                </div>
            ))}    
        </div>
    </div>
</div>

                    
<div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
  <div className="flex flex-col justify-between flex-auto py-8 px-9">
    <button
      onClick={toggleChatbot}
      className="chatbot-button"
    >
      <FontAwesomeIcon icon={faRobot} className="mr-2 text-2xl chatbot-icon" />
      AI Assistant ?
    </button>
    
    {isChatbotVisible  && (
      <div className='chatbot-container'>
        <header>
          <FontAwesomeIcon icon={faRobot} className="mr-2" />
          Chat with AI Assistant
        </header>
        <div className="chat-window">
          <StudentChatbot profilePhotoUrl={profilePhotoUrl}/>
        </div>
       
      </div>
    )}
      </div>
                        {/* <!-- end card body  --> */}
                    </div>
                </div>
            </div>
        </div>
        

            <Footer />

    </div>


           









    </div>






    );
}

export default Home;
