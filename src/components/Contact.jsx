import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

function ContactForm() {
  const [state, handleSubmit] = useForm("mqkrqknd");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-2xl text-green-600 font-semibold mt-8"
      >
        <p>Thank you for getting in touch! We will get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto p-10 bg-white shadow-2xl rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-8">Contact Us</h2>

      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          placeholder="Your full name"
          required
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          placeholder="Your email address"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          placeholder="Your phone number"
          required
        />
        <ValidationError 
          prefix="Phone" 
          field="phone"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          placeholder="Write your message here..."
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <button 
        type="submit" 
        disabled={state.submitting}
        className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300 text-lg"
      >
        {state.submitting ? 'Sending...' : 'Submit'}
      </button>
    </motion.form>
  );
}

function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 min-h-screen flex items-center justify-center p-8">
      <ContactForm />
    </div>
  );
}

export default ContactPage;
