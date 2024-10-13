import React from 'react'
import CTAButton from "../HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/images/Instructor.jpg";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div className='mt-16'>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-[50%]">
            <img
              src={Instructor}
              alt=""
              className="shadow-white shadow-[-20px_-20px_0_0]"
            />
          </div>
          <div className="lg:w-[50%] flex gap-10 flex-col">
            <div className=" text-4xl w-[50%] font-semibold ">
              Become an
              <HighlightText text={"Instructor"} />
            </div>

            <p className="font-medium text-[16px] text-justify w-[80%] text-richblack-300">
              Instructors from around the world teach millions of students on
              CodePlay. We provide the tools and skills to teach what you
              love.
            </p>

            <div className="w-fit">
              <CTAButton active={true} linkto={"/Signup"}>
                <div className="flex flex-row items-center gap-3">
                  Start Teaching Today
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InstructorSection