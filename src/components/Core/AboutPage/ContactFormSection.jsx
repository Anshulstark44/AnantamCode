import React from 'react'
import ContactUsForm from "../ContactPage/ContactUsForm"

const ContactFormSection = () => {
  return (
    <div className=' mx-auto  flex flex-col items-center justify-center'>
      <h1 className=' font-semibold'>
        Get In Touch
      </h1>
      <p className=' font-semibold'>
        We'd love to here for you , please fill out this form.
      </p>
      <div>
        <ContactUsForm/>
      </div>
    </div>
  )
}

export default ContactFormSection
