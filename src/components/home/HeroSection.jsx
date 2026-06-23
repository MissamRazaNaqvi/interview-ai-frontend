import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-28">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-52 w-52 md:h-72 md:w-72 rounded-full bg-primary/20 blur-[100px] md:blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-52 w-52 md:h-72 md:w-72 rounded-full bg-blue-500/20 blur-[100px] md:blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <span className="inline-block rounded-full border border-primary/40 bg-card px-4 py-2 text-sm md:text-base text-primary">
          🚀 AI Powered Resume Analysis
        </span>

        <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight md:leading-tight text-heading">
          Land More Interviews
          <br />
          with AI Resume Analysis
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-text px-2">
          Upload your resume and instantly receive ATS scoring,
          keyword optimization, skill gap analysis, career insights,
          interview preparation, and personalized improvement suggestions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
          <button
            onClick={() => navigate("/upload-resume")}
            className="w-full sm:w-auto rounded-xl bg-primary px-8 py-3 md:py-4 font-semibold text-white hover:bg-primary-hover transition"
          >
            Analyze Resume
          </button>

          <button
            onClick={() => navigate("/templates")}
            className="w-full sm:w-auto rounded-xl border border-border bg-card px-8 py-3 md:py-4 text-heading hover:border-primary transition"
          >
            Browse Templates
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              95%
            </h2>
            <p className="mt-2 text-sm md:text-base text-text">
              ATS Match Accuracy
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              15+
            </h2>
            <p className="mt-2 text-sm md:text-base text-text">
              AI Resume Insights
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 md:p-6 sm:col-span-2 md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Instant
            </h2>
            <p className="mt-2 text-sm md:text-base text-text">
              Analysis Report
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;