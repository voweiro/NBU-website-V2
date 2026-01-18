"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Import your actual images here
import lawImage from "@/asserts/law.jpg";
import agricultureImage from "@/asserts/it-computing.jpg";
import engineeringImage from "@/asserts/engineering.jpg";
import healthImage from "@/asserts/medical.jpg";

import artsImage from "@/asserts/management.jpg";

type College = {
  title: string;
  image: StaticImageData;
  courses: string[];
};

const colleges: College[] = [
  {
    title: "FACULTY OF LAW",
    image: lawImage,
    courses: ["LL.B Law"],
  },
  {
    title: "FACULTY OF COMPUTING AND INFORMATION TECHNOLOGY",
    image: agricultureImage,
    courses: [
      "B.Sc. Data Science",
      "B.Sc. Cyber Security",
      "B.Sc. Software Engineering",
      "B.Sc. Information Technology",
    ],
  },
  {
    title: "FACULTY OF ENGINEERING",
    image: engineeringImage,
    courses: [
      "B.Eng. Computer Engineering",
      "B.Eng. Mechatronics Engineering",
      "B.Eng. Electrical and Electronics Engineering",
      "B.Eng. Information and Communication Engineering",
    ],
  },
  {
    title: "FACULTY OF BASIC MEDICAL AND ALLIED HEALTH SCIENCES",
    image: healthImage,
    courses: [
      "MBBS. Medicine & Surgery",
      "B.N.Sc. Nursing Sciences",
      "BMLS. Medical Laboratory Science",
    ],
  },
  //   {
  //     title: "College of Education & Human Development",
  //     image: educationImage,
  //     courses: [
  //       "B.Ed. Educational Psychology",
  //       "B.Ed. Curriculum Studies",
  //       "B.Ed. Guidance & Counseling",
  //       "B.Ed. Early Childhood Education",
  //     ],
  //   },
  {
    title: "FACULTY OF MANAGEMENT AND SOCIAL SCIENCES",
    image: artsImage,
    courses: [
      "B.SC. Marketing",
      "B.Sc. Accounting",
      "B.Sc. Economics",
      "B.Sc. Mass Communication",
      "B.Sc. Banking & Finance",
      "B.Sc. Business Administration",
      "B.Sc. Public Administration",
      "B.Sc. Political Science",
      "B.Sc. International Relations and Diplomacy",
      "B.Sc. Entrepreneurship Studies",
    ],
  },
];

const DegreePrograms = () => {
  return (
    <div className="max-w-[1280px] mx-auto py-16 px-4 mt-2 sm:px-8 lg:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-700">
        Available Degree Courses
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
        We offer a diverse range of degree programmes tailored to empower
        students with the knowledge, skills, and practical experience needed to
        excel in their chosen fields.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {colleges.map((college, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            initial={{ y: 0 }}
            animate={{
              y: [0, -5, 0], // floating effect
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <div className="relative w-full h-56">
              <Image
                src={college.image}
                alt={college.title}
                fill
                className="object-cover h-full w-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-4">
                {college.title}
              </h3>
              <ul className="list-decimal list-inside space-y-1 text-gray-700">
                {college.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DegreePrograms;
