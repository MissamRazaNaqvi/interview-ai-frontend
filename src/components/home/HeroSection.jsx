const HeroSection = () => {
    return (
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-6xl font-bold">
            Get Your Resume Reviewed by AI
          </h1>
  
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Upload your resume and receive ATS scoring,
            skill analysis, keyword recommendations,
            and actionable improvements in seconds.
          </p>
  
          <button className="rounded-xl bg-indigo-600 px-8 py-4 text-lg text-white">
            Upload Resume
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;