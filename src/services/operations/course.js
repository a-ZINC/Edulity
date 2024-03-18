import {courseEndpoints} from '../Apiendpoints';
import { apiconnector } from '../Apiconnector';
import {toast} from 'react-hot-toast';

const {
    COURSE_CATEGORIES_API,
    CREATE_COURSE_API,
    EDIT_COURSE_API,
    CREATE_SECTION_API,
    UPDATE_SECTION_API,
    DELETE_SECTION_API,
    DELETE_SUBSECTION_API,
    UPDATE_SUBSECTION_API,
    CREATE_SUBSECTION_API,

}=courseEndpoints;

export const fetchcategories=async()=>{
    let result=[];
    try{
        const response=await apiconnector('GET',COURSE_CATEGORIES_API);
        console.log(response.data.data)
        result=response?.data?.data
    }catch(error){
        console.log("COURSE_CATEGORY_API API ERROR............", error)
        toast.error(error.message)
    }
    return result;
}
export const createCourse=async(formdata,token)=>{
    const toastid=toast.loading("Loading...");
    let response
    try{
        console.log(formdata,token);
        for (const value of formdata.values()) {
            console.log(value);
          }
         response=await apiconnector('POST',CREATE_COURSE_API,formdata,{
            "Content-Type":"multipart/form-data",
            Authorization:`Bearer ${token}`,
        });
        console.log(response)
        toast.success('Course Detail Submitted')
    }catch(error){
        console.log("CREATE_COURSE_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastid)
    return response?.data?.data;
}

export const editCoursedetails=async(formdata,token)=>{
    const toastid=toast.loading("Loading...");
    let response='';
    try{
        console.log(formdata,token);
        for (const value of formdata.values()) {
            console.log(value);
          }
        response=await apiconnector('POST',EDIT_COURSE_API,formdata,{
            "Content-Type":"multipart/form-data",
            Authorization:`Bearer ${token}`,
        });
        console.log(response);
        toast.success('Course Detail Updated')
    }catch(error){
        console.log("EDIT_COURSE_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastid)
    return response?.data?.updatedcourse;
}

export const addSection=async(formdata,token)=>{
    const toastid=toast.loading("Loading...")
    let response='';
    try{
        console.log(formdata,token);
         response=await apiconnector('POST',CREATE_SECTION_API,formdata,{
            "Content-Type":"multipart/form-data",
            Authorization:`Bearer ${token}`,
        });
        console.log(response);
        toast.success('Section Created')
    }catch(error){
        console.log("CREATE_SECTION_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastid)
    return response?.data?.updatedCourse;
}

export const editSection=async(formdata,token)=>{
    const toastid=toast.loading("Loading...")
    let response='';
    try{
        console.log(formdata,token);
         response=await apiconnector('POST',UPDATE_SECTION_API,formdata,{
            "Content-Type":"multipart/form-data",
            Authorization:`Bearer ${token}`,
        });
        console.log(response);
        toast.success('Section Updated')
    }catch(error){
        console.log("UPDATE_SECTION_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastid)
    return response?.data?.data;
}

export const deleteSection=async(formdata,token)=>{
    const toastid=toast.loading("Loading...")
    let response='';
    try{
        console.log(formdata,token);
         response=await apiconnector('POST',DELETE_SECTION_API,formdata,{
            "Content-Type":"multipart/form-data",
            Authorization:`Bearer ${token}`,
        });
        console.log(response);
        toast.success('Section Deleted')
    }catch(error){
        console.log("DELETE_SECTION_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastid)
    return response?.data?.data
}

export const deleteSubSection=async(formdata,token)=>{
    const toastid=toast.loading("Loading...")
    let response='';
    try{
        console.log(formdata,token);
         response=await apiconnector('POST',DELETE_SUBSECTION_API,formdata,{
            "Content-Type":"multipart/form-data",
            Authorization:`Bearer ${token}`,
        });
        console.log(response);
        toast.success('SubSection Deleted')
    }catch(error){
        console.log("DELETE_SUBSECTION_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastid)
    return response?.data?.data;
}

export const editSubSection=async(formdata,token)=>{
    const toastid=toast.loading("Loading...")
    let response='';
    try{
        console.log(formdata,token);
         response=await apiconnector('POST',UPDATE_SUBSECTION_API,formdata,{
            "Content-Type":"multipart/form-data",
            Authorization:`Bearer ${token}`,
        });
        console.log(response);
        toast.success('Section Updated')
    }catch(error){
        console.log("UPDATE_SUBSECTION_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastid)
    return response.data.data;
}

export const addSubSection=async(formdata,token)=>{
    const toastid=toast.loading("Loading...");
    let response
    try{
        console.log(formdata,token,'huehue');
        
         response=await apiconnector('POST',CREATE_SUBSECTION_API,formdata,{
            "Content-Type":"multipart/form-data",
            Authorization:`Bearer ${token}`,
        });
        console.log(response.data.data)
        toast.success('Course Detail Submitted')
    }catch(error){
        console.log("CREATE_SUBSECTION_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastid)
    return response.data.data;
}