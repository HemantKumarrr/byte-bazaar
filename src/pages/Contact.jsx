import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen">
      <div className="container px-4 mx-auto pt-[8rem] flex flex-col md:flex-row items-center justify-center">
        <div className="flex items-center justify-center w-full">
          <img
            src="https://img.freepik.com/free-vector/navigation-concept-illustration_114360-1045.jpg?t=st=1734936566~exp=1734940166~hmac=9f7905a64aa3ae8009f9ba2697c9b7475964ec1bd7d1aaa9ed12e4ad7d494ad5&w=740"
            alt="map-image"
            className="w-[25rem] h-[25rem] object-cover"
          />
        </div>
        <div className="mx-auto w-full">
          <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  rows="4"
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
