import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from "../HomePage/Button"
import Know_your_progress from "../../../assets/images/Know_your_progress.png";
import Compare_with_others from "../../../assets/images/Compare_with_others.png"
import Plan_your_lessons from "../../../assets/images/Plan_your_lessons.png"

const LearningLanguageSection = () => {
  return (
    <div className=' mt-[130px] mb-32'>
        <div className=' flex flex-col gap-5 items-center'>
                <div className="text-4xl font-semibold text-center my-10">
                    Your swiss knife for
                    <HighlightText text={"learning any language"} />
                </div>
                <div className="text-center text-richblack-700 font-medium w-[75%] mx-auto text-base mt-3">
                    Using spin making learning multiple languages easy. with 20+
                    languages realistic voice-over, progress tracking, custom schedule
                    and more.
                </div>

                <div className=' flex flex-row items-center justify-center mt-5'>

                    <img src={Know_your_progress}
                     alt='knowyourprogressImage'
                     className=' object-contain -mr-32'
                    ></img>
                    <img src={Compare_with_others}
                     alt='comparewithothersImage'
                     className=' object-contain'
                    ></img>
                    <img src={Plan_your_lessons}
                     alt='planyourlessonsImage'
                     className=' object-contain -ml-36'
                    ></img>
                </div>

                <div className='  w-fit'>
                    <CTAButton active={true} linkto={"/Signup"}>
                        <div>
                            Learn More
                        </div>
                    </CTAButton>
                </div>
        </div>


    </div>
  )
}

export default LearningLanguageSection