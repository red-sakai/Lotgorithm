import React from "react";

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="group w-full md:w-72 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 text-center border border-blue-100">
      {icon && <div className="mb-3 flex justify-center">{icon}</div>}
      <h3 className="text-xl font-bold mb-2 text-blue-800 group-hover:text-blue-600 transition">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
