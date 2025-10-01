import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
const Contact = () => {
      useEffect(() => {
        window.scrollTo(0, 0); // scroll to top whenever this component loads
      }, []);
  return (
    <div className="container mx-auto py-10">
              <div className="py-2">
          <div className="flex">
            <Link to="/">
              {" "}
              <p className=" font-semibold hover:underline hover:text-[#80bf1e]">Home</p>
            </Link>
            <FaAngleRight className=" mt-1" />
            <Link to="/contact">
              <p className="text-[#0c0f3b] font-semibold  hover:underline">
            Contact
              </p>
            </Link>
          </div>
        </div>
            <div className="pb-10">
        <h1 className='text-center text-3xl lg:text-6xl font-bold'>Contact  <span className="text-[#80bf1e] ">Us</span></h1>
    </div>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Google Map */}
        <div className="order-2 lg:order-1 w-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116840.85510689842!2d90.21432789726559!3d23.773158399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf6de2c3b19b%3A0xeeef7eec6d1d012a!2sEasy%20Tech%20Solutions!5e0!3m2!1sen!2sbd!4v1758954788071!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "450px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          ></iframe>
        </div>

                {/* Contact Form */}
        <div className="order-1 lg:order-2 w-full lg:w-1/2 bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#0c0f3b] mb-6">Get in Touch</h2>
          <form action="" className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80bf1e]"
              />

                  <label className="pt-5 block text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80bf1e]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80bf1e]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80bf1e]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#80bf1e] text-white font-semibold py-3 rounded-lg hover:bg-[#6aac1b] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
