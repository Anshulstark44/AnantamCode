import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div>
      We are passionate about revolutionzing the way we learn. Our innovative platform
      <HighlightText text={"combine technology"}/>
      <span className=' text-brown-400'>
        {" "}
        expertise
      </span>
      , and community to create an
      <span className=' text-brown-400'>
        {" "}
        unparalleled educational experience
      </span>
    </div>
  )
}

export default Quote
