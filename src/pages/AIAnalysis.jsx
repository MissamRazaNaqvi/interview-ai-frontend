import {
  CheckCircle2,
  Brain,
  FileSearch,
  Target,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

const features = [
  "ATS Score Evaluation",
  "Job Match Score",
  "Technical Skill Analysis",
  "Soft Skill Analysis",
  "Skill Gap Detection",
  "Keyword Optimization",
  "Resume Strengths",
  "Resume Weaknesses",
  "Career Recommendations",
  "Learning Roadmap",
  "Interview Preparation",
  "Project Suggestions",
];

export default function AIAnalysis() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-border bg-card px-5 py-2 text-primary">
            Gemini AI Powered
          </span>

          <h1 className="mt-6 text-5xl font-bold text-heading">
            AI Resume Analysis
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-text">
            Our AI analyzes your Resume, Job Description and Self
            Introduction to generate a comprehensive report with
            ATS score, keyword analysis, career insights and much more.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="grid gap-5">

            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary transition"
              >
                <CheckCircle2 className="text-primary" />

                <span className="text-text">
                  {feature}
                </span>
              </div>
            ))}

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-border bg-card p-10">

            <div className="flex justify-center">
              <Brain
                size={90}
                className="text-primary"
              />
            </div>

            <h2 className="mt-8 text-center text-3xl font-bold text-heading">
              Analyze in Seconds
            </h2>

            <p className="mt-5 text-center text-text leading-8">
              Upload your resume and let Gemini AI compare it with your
              Job Description to generate ATS score, strengths,
              weaknesses, skill gaps, career roadmap and interview tips.
            </p>

            <button className="mt-10 w-full rounded-xl bg-primary py-4 text-lg font-semibold text-white hover:bg-primary-hover">
              Analyze Resume
            </button>

            <div className="mt-10 grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-background p-5 text-center">
                <Target className="mx-auto text-primary" />
                <p className="mt-3 text-sm text-text">
                  ATS Score
                </p>
              </div>

              <div className="rounded-xl bg-background p-5 text-center">
                <FileSearch className="mx-auto text-primary" />
                <p className="mt-3 text-sm text-text">
                  Keyword Match
                </p>
              </div>

              <div className="rounded-xl bg-background p-5 text-center">
                <BadgeCheck className="mx-auto text-primary" />
                <p className="mt-3 text-sm text-text">
                  Skill Gap
                </p>
              </div>

              <div className="rounded-xl bg-background p-5 text-center">
                <Sparkles className="mx-auto text-primary" />
                <p className="mt-3 text-sm text-text">
                  AI Suggestions
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}