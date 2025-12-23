import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="Contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-purple-500">Touch</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I&apos;m always open to discussing new opportunities.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact info */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <p className="text-slate-800 text-sm">priyankasangamkar@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Phone</p>
                  <p className="text-slate-800 text-sm">+91-8766732897</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Location</p>
                  <p className="text-slate-800 text-sm">Pune , Maharastra </p>
                </div>
              </div>
            </div>

            
          </div>

          {/* Right: Form card */}
          <div className="bg-white rounded-2xl shadow-md px-8 py-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="write your name..."
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="write your email"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 bg-slate-50 resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition"
                >
                  Send Message
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
