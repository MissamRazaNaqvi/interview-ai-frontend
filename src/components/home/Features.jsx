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
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
          AI Powered Features
        </h2>

        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-center text-sm sm:text-base text-text">
          Everything you need to build a resume that stands out.
        </p>

        {/* FLEX CONTAINER */}
        <div className="mt-10 sm:mt-14 lg:mt-16 flex flex-wrap justify-center gap-5 sm:gap-6 lg:gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="w-full sm:w-[48%] lg:w-[23%] rounded-2xl border border-border bg-card p-6 sm:p-7 lg:p-8 transition duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
            >
              <div className="text-primary">
                {feature.icon}
              </div>

              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-text">
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