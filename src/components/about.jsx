import React from "react";
import { assets, profileData } from "../assets/assets";
import { FaCode } from "react-icons/fa6";

const Aboutme = () => {
  return (
    <section id="About" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-purple-600">About </span>
            <span className="text-slate-900">Me</span>
          </h2>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-900">
              Passionate Web Developer & Tech Enthusiast
            </h3>

            <p className="text-base md:text-lg mb-3 leading-8 text-slate-600">
              Enthusiastic fresher with solid frontend foundations, focused on
              building responsive and accessible web interfaces that feel modern
              and intuitive.
            </p>

            <p className="text-base md:text-lg mb-6 leading-8 text-slate-600">
              Frontend: HTML, CSS, JavaScript, React, Tailwind CSS. Comfortable
              with component-based architectures, reusable UI patterns, and
              clean code practices.
            </p>

            {/* Skill cards */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              {profileData.map((data, index) => (
                <div
                  key={index}
                  className="flex-1 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg cursor-pointer transition duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 mb-4">
                    <FaCode className="text-xl" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-slate-900">
                    {data.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {data.technologies.join(", ")}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-purple-600 text-white text-sm md:text-base font-semibold shadow-md hover:bg-purple-700 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Right image side */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* soft purple glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 via-purple-100 to-transparent blur-2xl opacity-70 -z-10" />

              {/* main image card */}
              <div className="relative bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
                <img
                  src={assets.profileImg}
                  alt="Profile"
                  className="w-full h-80 object-cover"
                />

                <div className="px-5 py-4 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-900">
                    Priyanka Suryakant
                  </h4>
                  <p className="text-sm text-slate-500">
                    Frontend Developer • React • Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
