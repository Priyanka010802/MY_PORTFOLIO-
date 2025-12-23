// src/components/Work.jsx
import React from 'react';
import { projectData } from '../assets/assets';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Work = () => {
  return (
    <section id="Work" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Featured <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projectData.map((project, index) => (
            <div
              key={index} // Use index since projects don't have explicit id
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-6 py-6">
                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 mb-5">
                  {project.description}
                </p>

                {/* Icon links */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <FaGithub className="text-lg" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-purple-500 hover:text-purple-600 transition-colors"
                  >
                    <FiExternalLink className="text-lg" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Check my GitHub button */}
        <div className="text-center">
          <a
            href="https://github.com/Priyanka010802"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-purple-500 text-white text-sm font-semibold shadow-sm hover:bg-purple-600 transition-all duration-300"
          >
            Check My Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
