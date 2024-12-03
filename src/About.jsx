import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/ui/button'; // Assuming you have a Button component
import { Link } from 'react-router-dom';

// Sample images for the collage section
const images = [
  "src/assets/Search_finall.jpg", // Replace with actual image paths
  "src/assets/summarize_final.jpg",
  "src/assets/Doc_finall.jpg",
  "src/assets/Confused_final.jpg",
  "src/assets/Translate_final.jpg",
  "src/assets/Article.jpg",
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
      {/* Header Section with title and description */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold text-[#c21e56] pb-5">About us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Empowering women with clear, accurate, and accessible reproductive health information, breaking down societal barriers, and providing personalized solutions for a healthier, informed future.
        </p>
      </motion.div>

      {/* Image Collage Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 1 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={img}
              alt={`Feature Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform transform hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      {/* Features Section */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-[#c21e56] mb-6">What are we trying to solve</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
        Breaking Barriers to Reproductive Health for Every Woman in India and Globally.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
          >
            <img src="src/assets/running-man-silhouette-svgrepo-com.svg" alt="Seamless" className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">The Challenge</h3>
            <p className="text-gray-600 text-center">
            Women in India face barriers to reproductive health information due to myths, stigma, and limited resources.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
          >
            <img src="src/assets/people-svgrepo-com.svg" alt="Engaging" className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2"> The Reality</h3>
            <p className="text-gray-600 text-center">
            70% lack access to proper healthcare.
            Topics like menstruation and contraception remain taboo.
            Language and medical jargon create further gaps.

            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
          >
            <img src="src/assets/commission-svgrepo-com.svg" alt="Customizable" className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-center">
            Empowering women with clear, accurate, and personalized reproductive health information in their language—breaking barriers for a healthier future.
            </p>
          </motion.div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <Link to={'/'}>
          <Button className="bg-[#c21e56] text-white hover:bg-black">
            Get Started
          </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
