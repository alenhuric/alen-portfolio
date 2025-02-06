import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/f68856d2-c730-4ad1-aabe-6489ae3807e2"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md transition-all duration-200 
                                border-gray-300 dark:border-gray-600 hover:border-violet-400 dark:hover:border-violet-500
                                hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-4 p-2 bg-transparent border-2 rounded-md transition-all duration-200 
                                border-gray-300 dark:border-gray-600 hover:border-violet-400 dark:hover:border-violet-500
                                hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md transition-all duration-200 
                                border-gray-300 dark:border-gray-600 hover:border-violet-400 dark:hover:border-violet-500
                                hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
