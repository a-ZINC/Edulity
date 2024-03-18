import React, { useEffect } from 'react';
import RenderSteps from '../Addcourse/RenderSteps';
import {useDispatch,useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {setCourse,setEditcourse} from '../../../../Slicer/courseSlicer';


const Editcourse = () => {
    const location=useLocation();
    const editcoursehandler=async()=>{
        const course=await 
    }
    useEffect(()=>{
        editcoursehandler()
    },[])
  return (
    <>
      <div className="flex w-full items-start gap-x-6 lg:mx-20 sm:mx-10 max-sm:mx-3 max-[410px]:mx-2  ">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Edit Course
          </h1>
          <div className="flex-1">
          <RenderSteps />
          </div>
        </div>
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Course Upload Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>
              Add Topics in the Course Builder section to create lessons,
              quizzes, and assignments.
            </li>
            <li>
              Information from the Additional Data section shows up on the
              course single page.
            </li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Editcourse