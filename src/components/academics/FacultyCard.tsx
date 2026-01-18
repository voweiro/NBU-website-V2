// components/FacultyCard.tsx
import { useState } from "react";
import DeanModal from "./DeanModal";
import Image from "next/image";


interface FacultyCardProps {
  faculty: {
    name: string;
    description: string;
    image: string;
    dean: {
      name: string;
      title: string;
      bio: string;
      image: string;
    };
  };
}

const FacultyCard = ({ faculty }: { faculty: FacultyCardProps["faculty"] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="layout bg-white shadow-md rounded-lg p-4 md:p-6 w-full max-w-[1280px] mx-auto">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={faculty.image}
          alt={faculty.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold">{faculty.name}</h3>
      <p className="text-sm text-gray-600 mt-2">{faculty.description}</p>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300"
      >
        View Dean
      </button>

      <DeanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        dean={faculty.dean}
      />
    </div>
  );
};

export default FacultyCard;
