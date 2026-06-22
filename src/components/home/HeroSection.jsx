import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="rounded-full border border-primary/40 bg-card px-5 py-2 text-primary">
          🚀 AI Powered Resume Analysis
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight text-heading">
          Land More Interviews
          <br />
          with AI Resume Analysis
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-text">
          Upload your resume and instantly receive ATS scoring,
          keyword optimization, skill gap analysis, career insights,
          interview preparation, and personalized improvement suggestions.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <button
            onClick={() => navigate("/upload-resume")}
            className="rounded-xl bg-primary px-8 py-4 font-semibold text-white hover:bg-primary-hover transition"
          >
            Analyze Resume
          </button>

          <button
            onClick={() => navigate("/templates")}
            className="rounded-xl border border-border bg-card px-8 py-4 text-heading hover:border-primary"
          >
            Browse Templates
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-4xl font-bold text-primary">95%</h2>
            <p className="mt-2 text-text">ATS Match Accuracy</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-4xl font-bold text-primary">15+</h2>
            <p className="mt-2 text-text">AI Resume Insights</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-4xl font-bold text-primary">Instant</h2>
            <p className="mt-2 text-text">Analysis Report</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;