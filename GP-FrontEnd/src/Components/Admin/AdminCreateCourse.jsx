import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import AdminSidebar from "../ReusedCompenents/AdminSidebar";
import './Admincreate.css';

const AdminCreatecourse = () => {
  const [showModal, setShowModal] = useState(false); // State to show/hide modal
  const [courseId, setCourseId] = useState(null); // State to hold created course ID

  const formik = useFormik({
    initialValues: {
      "courseName" :'' ,
      "courseDesc" :'',
      "instructorId" :'' ,
      "creditHours" :'',
      "courseCode" :'',
      "passKey" :'' 
    },
    onSubmit: async (values, { resetForm }) => {      try {
        const token = sessionStorage.getItem('token');

        const response = await axios.post('http://127.0.0.1:4000/admin/create', values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Course created successfully', response.data);
        setCourseId(response.data.result.courseId); // Assuming response contains courseId
        toast.success('Course created successfully');
        setShowModal(true); // Show the modal to upload course photo
        resetForm(); // Clear the form
      } catch (error) {
        console.error('Error adding Course', error);
        toast.error('Error adding course');
      }
    },
  });

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const token = sessionStorage.getItem('token');
      const formData = new FormData();
      formData.append('photo', file);
      formData.append('courseId', courseId); // Include the course ID

      const response = await axios.post('http://127.0.0.1:4000/upload-course-photo', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Course image uploaded successfully', response.data);
      toast.success('Course image uploaded successfully');
      setShowModal(false); // Close the modal
      
    } catch (error) {
      console.error('Error uploading course image', error);
      toast.error('Error uploading course image');
    }
  };

  return (
    <div className="flex bg-gray-800 text-gray-100 min-h-screen">
      <AdminSidebar />
      <main className="flex flex-col flex-grow items-center min-h-screen justify-center ml-[300px] p-6 lg:ml-[350px] kk">
        <div className="bg-neutral-900 p-4 rounded-xl shadow-md meon lll">
          <h1 className="text-3xl font-semibold text-center mb-16 text-white">Hello Admin!</h1>
          <form onSubmit={formik.handleSubmit} className="space-y-4 mm">
            <div>
              <label htmlFor="courseName" className="block text-sm font-medium">
                Course Name
              </label>
              <input 
                id="courseName"
                name="courseName"
                type="text"
                className="w-full px-3 py-2 rounded-md taskcoloring"
                onChange={formik.handleChange}
                value={formik.values.courseName}
              />
            </div>
            <br />
            <div>
              <label htmlFor="courseDesc" className="block text-sm font-medium">
                Course Description
              </label>
              <textarea
                id="courseDesc"
                name="courseDesc"
                type="text"
                className="w-full px-3 py-2 taskcoloring rounded-md"
                onChange={formik.handleChange}
                value={formik.values.courseDesc}
              />
            </div>
            <br />
            <div>
              <label htmlFor="instructorId" className="block text-sm font-medium">
                Instructor Id
              </label>
              <input
                id="instructorId"
                name="instructorId"
                type="text"
                className="w-full px-3 py-2 taskcoloring rounded-md"
                onChange={formik.handleChange}
                value={formik.values.instructorId}
              />
            </div>
            <br />
            <div>
              <label htmlFor="creditHours" className="block text-sm font-medium">
                Credit Hours
              </label>
              <input
                id="creditHours"
                name="creditHours"
                type="text"
                className="w-full px-3 py-2 taskcoloring rounded-md"
                onChange={formik.handleChange}
                value={formik.values.creditHours}
              />
            </div>
            <br />
            <div>
              <label htmlFor="courseCode" className="block text-sm font-medium">
                Course Code
              </label>
              <input
                id="courseCode"
                name="courseCode"
                type="text"
                className="w-full px-3 py-2 taskcoloring rounded-md"
                onChange={formik.handleChange}
                value={formik.values.courseCode}
              />
            </div>
            <br />
            <div>
              <label htmlFor="passKey" className="block text-sm font-medium">
                Pass Key
              </label>
              <input
                id="passKey"
                name="passKey"
                type="text"
                className="w-full px-3 py-2 taskcoloring rounded-md"
                onChange={formik.handleChange}
                value={formik.values.passKey}
              />
            </div>
            <br />
            <div>
              <button
                type="submit"
                className="w-full px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-200"
              >
                Create Course
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Modal for uploading course image */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl mb-4">Upload Course Image</h2>
            <input type="file" onChange={handleFileUpload} />
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCreatecourse;
