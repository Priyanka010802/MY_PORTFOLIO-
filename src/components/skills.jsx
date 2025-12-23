// Skill.jsx
import React, { useState } from 'react';
import { FaMicrochip, FaReact, FaDesktop, FaCode, FaMobile } from 'react-icons/fa';

import { skillsData } from '../assets/assets';  // icons come from here

const tabs = ['All', 'Frontend', 'Backend', 'Tools'];

const Skill = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills =
    activeTab === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.type === activeTab);

  return (
    <section id="Skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900">
            My <span className="text-purple-500">Skills</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Mastring tools that power web experiences.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-3 bg-white rounded-full shadow-sm px-3 py-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? 'bg-purple-500 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm px-6 py-5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {skill.title}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-purple-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-xs text-slate-600">
                  {skill.technologies.join(', ')}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
