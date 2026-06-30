import { CheckCircle2, Brain, FileSearch, Target, BadgeCheck, Sparkles} from "lucide-react";

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
    <section className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">

          <span className="inline-block rounded-full border border-border bg-card px-4 sm:px-5 py-2 text-xs sm:text-sm text-primary">
            Gemini AI Powered
          </span>

          <h1 className="mt-5 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-heading leading-tight">
            AI Resume Analysis
          </h1>

          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl lg:max-w-3xl text-sm sm:text-base lg:text-lg text-text">
            Our AI analyzes your Resume, Job Description and Self
            Introduction to generate a comprehensive report with
            ATS score, keyword analysis, career insights and much more.
          </p>

        </div>

        {/* Content */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* LEFT SIDE */}
          <div className="grid gap-4 sm:gap-5">

            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start sm:items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-5 hover:border-primary transition"
              >
                <CheckCircle2 className="text-primary shrink-0 h-5 w-5 sm:h-6 sm:w-6" />

                <span className="text-sm sm:text-base text-text">
                  {feature}
                </span>
              </div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-2xl sm:rounded-3xl border border-border bg-card p-6 sm:p-8 lg:p-10">

            <div className="flex justify-center">
              <Brain
                className="text-primary"
                size={60}
              // fallback responsive scaling
              />
            </div>

            <h2 className="mt-6 sm:mt-8 text-center text-2xl sm:text-3xl font-bold text-heading">
              Analyze in Seconds
            </h2>

            <p className="mt-4 sm:mt-5 text-center text-sm sm:text-base text-text leading-relaxed sm:leading-7">
              Upload your resume and let Gemini AI compare it with your
              Job Description to generate ATS score, strengths,
              weaknesses, skill gaps, career roadmap and interview tips.
            </p>

            <button className="mt-8 sm:mt-10 w-full rounded-xl bg-primary py-3 sm:py-4 text-base sm:text-lg font-semibold text-white hover:bg-primary-hover transition">
              Analyze Resume
            </button>

            {/* Bottom stats */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4">

              <div className="rounded-xl bg-background p-4 sm:p-5 text-center">
                <Target className="mx-auto text-primary h-5 w-5 sm:h-6 sm:w-6" />
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-text">
                  ATS Score
                </p>
              </div>

              <div className="rounded-xl bg-background p-4 sm:p-5 text-center">
                <FileSearch className="mx-auto text-primary h-5 w-5 sm:h-6 sm:w-6" />
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-text">
                  Keyword Match
                </p>
              </div>

              <div className="rounded-xl bg-background p-4 sm:p-5 text-center">
                <BadgeCheck className="mx-auto text-primary h-5 w-5 sm:h-6 sm:w-6" />
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-text">
                  Skill Gap
                </p>
              </div>

              <div className="rounded-xl bg-background p-4 sm:p-5 text-center">
                <Sparkles className="mx-auto text-primary h-5 w-5 sm:h-6 sm:w-6" />
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-text">
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