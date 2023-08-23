import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Navbar } from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const form = useRef();
  const [formError, setFormError] = useState(null);
 

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setFormError('Please fill out all fields.');
      return;
    }

  
    setFormError(null);

    emailjs
      .sendForm('service_x9dbzvf', 'template_8kyixyn', form.current, 'lGz8VtRZsK6ItmVF2')
      .then(
        (result) => {
          console.log(result.text);
          
          toast.success('Message sent successfully!', {
            position: toast.POSITION.TOP_CENTER
          });
          setTimeout(() => {
           
            form.current.reset();
          }, 1000); 
        },
        (error) => {
          console.log(error.text);
         
          toast.error('Oops, something went wrong. Please try again.', {
            position: toast.POSITION.TOP_CENTER
          });
        }
      );
  };

  return (
    <div className='overflow-hidden min-h-screen bg-gradient-to-b from-sky-600 via-cyan-400 to-orange-300 ...'>
      <Navbar />
       <main className='overflow-hidden'>
        <div className='text-center'>
          <h1 className='text-white md:text-6xl text-4xl font-bold md:ml-0 ' style={{ textShadow: '0 0 10px darkblue' }}>Contact Me</h1>
          <p className='text-white my-3 md:w-1/2 w-full md:ml-96 md:px-44'>Thank you for visiting my portfolio website. I'm excited to share my journey, skills, and projects with you. Please explore my work and feel free to connect with me!</p>
        </div>
      </main>
      <form ref={form} onSubmit={sendEmail} className='mt-6 md:ml-96 ml-10 mb-6 md:px-44'>
        <div className='mb-4'>
          <label className='text-white block'>Name</label>
          <input type='text' name='user_name' className='bg-white text-black rounded-md py-2 px-3 md:w-1/2 w-72' required />
        </div>
        <div className='mb-4'>
          <label className='text-white block'>Email</label>
          <input type='email' name='user_email' className='bg-white text-black rounded-md py-2 px-3 md:w-1/2 w-72' required />
        </div>
        <div className='mb-4'>
          <label className='text-white block'>Message</label>
          <textarea name='message' className='bg-white text-black rounded-md py-2 px-3 md:w-1/2 w-72 h-32' required />
        </div>
        {formError && <div className='text-red-500'>{formError}</div>}
        <input type='submit' value='Send' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer md:w-1/2 w-72' />
        <ToastContainer />
      </form>
    </div>
  )
}






