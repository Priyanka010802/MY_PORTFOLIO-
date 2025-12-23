import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-purple-500 tracking-[0.2em] uppercase mb-8">
            Priyanka Portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900">
            Hi, I&apos;m <span className="text-purple-500">Priyanka</span> Sangamkar 
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            I craft clean, performant web interfaces with modern technologies.
            Specializing in full‑stack development, I build products that feel
            as good to use as they look.
          </p>

          <div className="flex justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-purple-500 text-white text-sm font-semibold shadow-md hover:bg-purple-600 transition"
            >
              View My Work
              <span className="text-lg leading-none">↗</span>
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 text-xs text-slate-400 flex flex-col items-center gap-2">
            <span>Scroll</span>
            <span className="animate-bounce text-base">↓</span>
          </div>
        </div>
      </section>

      {/* Experience / Stats Box */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 px-10 py-8 flex flex-wrap justify-between gap-6 text-center md:text-left">
            <div className="flex-1 min-w-[120px]">
              <p className="text-3xl font-bold text-purple-500 mb-1">8+</p>
              <p className="text-sm font-semibold text-slate-800">
                Production‑ready mini projects
              </p>
              <p className="text-xs text-slate-500 mt-1">
                From landing pages to dashboards.
              </p>
            </div>
            <div className="flex-1 min-w-[120px]">
              <p className="text-3xl font-bold text-blue-500 mb-1">6+ Months</p>
              <p className="text-sm font-semibold text-slate-800">
                Year of focused learning
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Daily practice with React, Node, and Tailwind.
              </p>
            </div>
            <div className="flex-1 min-w-[120px]">
              <p className="text-3xl font-bold text-emerald-500 mb-1">100%</p>
              <p className="text-sm font-semibold text-slate-800">
                Responsive by default
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Designed to look sharp on every device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
