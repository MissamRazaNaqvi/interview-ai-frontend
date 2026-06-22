import {
  FileText,
  Brain,
  TrendingUp,
  Search,
} from "lucide-react";

const features = [
  {
    icon: <FileText size={34} />,
    title: "ATS Score",
    description: "Get an ATS compatibility score to increase recruiter visibility."
  },
  {
    icon: <Brain size={34} />,
    title: "AI Suggestions",
    description: "Improve wording, formatting, grammar and professionalism."
  },
  {
    icon: <Search size={34} />,
    title: "Keyword Analysis",
    description: "Compare your resume with the job description."
  },
  {
    icon: <TrendingUp size={34} />,
    title: "Career Insights",
    description: "Identify missing skills and get a personalized roadmap."
  }
];

const Features = () => {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          AI Powered Features
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-text">
          Everything you need to build a resume that stands out.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-8 transition duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
            >
              <div className="text-primary">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-text">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;