import React, { useEffect, useState } from 'react'
import {useForm} from "react-hook-form"
import { apiConnector } from '../../../services/apiconnector';
import { contactusEndpoint } from '../../../services/apis';
import countrycode from "../../../data/countrycode.json"


const ContactUsForm = () => {

    const [loading,setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors,isSubmitSuccessful}
    }= useForm();

    const subbmitContactForm = async (data)=>{
        console.log("Logging data",data);
        try{
            setLoading(true);
            const response = await apiConnector("POST",contactusEndpoint.CONTACT_US_API,data);
            
            console.log("Logging response",response);
            setLoading(false);
        }catch(error){
            console.log("Error",error.message);
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                email:"",
                firstName:"",
                lastName:"",
                message:"",
                phoneNo:"",
            })
        }
    },[reset,isSubmitSuccessful])
  return (
    
      <form onSubmit={handleSubmit(subbmitContactForm)} className=' rounded border-richblack-50 border p-5'>

        <div className=' flex flex-col gap-2 rounded border-richblack-100'>
            <div className=' flex gap-2 '>
                {/* firstName */}
                <div className=' flex flex-col gap-2'>
                    <label htmlFor='firstName' className=' lable-style'>First Name</label>
                        <input
                        type='text'
                        name='firstName'
                        id='firstName'
                        className=' text-black  bg-richblack-400 rounded'
                        placeholder='Enter first name'
                        {...register("firstName",{required:true})}
                        >
                        </input>
                        {
                            errors.firstName && (
                                <span className="-mt-1 text-[12px] text-yellow-100">
                                    Please Enter Your Name
                                </span>
                            )
                        }
                    
                </div>
                {/* lastName */}
                <div className= "flex flex-col gap-2">
                    <label htmlFor='lastName'>Last Name</label>
                        <input
                        type='text'
                        name='lastName'
                        id='lastName'
                        className=' text-black bg-richblack-400 rounded'
                        placeholder='Enter last name'
                        {...register("lastName")}
                        >
                        </input>
                    
                </div>

                

            </div>

                        {/* email */}
                <div className=' flex flex-col gap-2'>
                    <label htmlFor='email'>Email Address</label>
                        <input
                        type='email'
                        name='email'
                        id='email'
                        className=' text-black bg-richblack-400 rounded'
                        placeholder='Enter email address'
                        {...register("email",{required:true})}
                        >
                        </input>
                        {
                            errors.firstName && (
                                <span className=' -mt-1 text-xs text-yellow-100'>
                                    Please Enter Your Email Address
                                </span>
                            )
                        }
                    
                </div>
                    {/* Phone number */}
                <div className=' flex flex-col gap-2'>

                        <label htmlFor='phonenumber'>Phone Number</label>
                        <div className=' flex flex-row gap-5'>
                            {/* drop down */}
                            <div className=' flex flex-col gap-2 w-[80px]'>
                                <select
                                    name="dropdown"
                                    className=' text-black bg-richblack-400 rounded'
                                    id='dropdown'
                                    {...register("countrycode",{required:true})}                                
                                >
                                    {
                                        countrycode.map((element,index)=>{
                                            return (
                                                <option key={index} value={element.code}>
                                                    {element.code}-{element.country}
                                                </option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            
                            

                            <div className=' flex w-[calc(100%-90px)] flex-col gap-2'>
                                <input
                                    type='number'
                                    name='phonenumber'
                                    placeholder='12345 67890'
                                    className=' text-black bg-richblack-400 rounded'
                                    {...register("phoneNo",{
                                        required:{value:true,message:"Please Enter Phone number"},
                                        maxLength:{value:10,message:"Invalid Phone Number"},
                                        minLength:{value:8,message:"Invalid Phone Number"}
                                    })}
                                ></input>
                            </div>
                        </div>
                        {
                            errors.phoneNo && (
                                <span className='-mt-1 text-xs text-yellow-100'>
                                    {errors.phoneNo.message}
                                </span>
                            )
                        }

                </div>  

                {/* message */}
                <div className=' flex flex-col gap-2'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        name='message'
                        id='message'
                        cols="30"
                        className=' text-black bg-richblack-400 rounded'
                        rows="7"
                        placeholder='Enter Your Message Here'
                        {...register("message",{required:true})}
                    >
                    </textarea>
                    {
                            errors.message && (
                                <span className='-mt-1 text-xs text-yellow-100'>
                                    Please Enter Your Message
                                </span>
                            )
                        }
                </div>
                {/* button */}
                <button type='submit' className={` rounded-md text-[16px] text-black font-semibold px-6 bg bg-yellow-50 text-center'
                    
                    ${
                        !loading &&
                        "transition-all duration-200 hover:scale-95 hover:shadow-none"
                      
                    }  disabled:bg-richblack-500 sm:text-[16px] `}
             
                >
                    Send Message
                </button>

        </div>
      </form>
    
  )
}

export default ContactUsForm
