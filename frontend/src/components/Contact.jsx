// src/components/ContactForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
// import heroImage from '../assets/hero.png';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      'service_06s9u5t', 
      'template_3ya16ek', 
      data, 
      'rlwzAehhe0cqH3mIp'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      reset();
    }, (err) => {
      console.log('FAILED...', err);
    });
  };

  return (
    <section id="contact" className="py-20  px-6">
      {/* <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full h-full opacity-30"
      /> */}
      <div className="container mx-auto max-w-lg">
        <h3 className="text-3xl font-bold text-center mb-12">Contact Me</h3>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              {...register('name', { required: true })}
              className="w-full p-3 border rounded"
              placeholder="Your Name"
            />
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full p-3 border rounded"
              placeholder="Your Email"
            />
            {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea
              {...register('message', { required: true })}
              className="w-full p-3 border rounded h-32"
              placeholder="Your Message"
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <button type="submit" className="w-full bg-pink-500 text-white p-3 rounded hover:bg-pink-600 transition">
            Send Message
          </button>
          {isSubmitSuccessful && <p className="text-green-500 text-center">Thank you for your message!</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
