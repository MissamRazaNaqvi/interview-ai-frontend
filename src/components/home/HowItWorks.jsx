import {
  Upload,
  BrainCircuit,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    icon: <Upload size={42} />,
    title: "Upload Resume",
    desc: "Upload your PDF resume securely."
  },
  {
    icon: <BrainCircuit size={42} />,
    title: "AI Analysis",
    desc: "Gemini AI analyzes ATS score, skills, keywords and more."
  },
  {
    icon: <BadgeCheck size={42} />,
    title: "Improve & Apply",
    desc: "Follow personalized recommendations and apply confidently."
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
          How It Works
        </h2>

        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-6 sm:p-7 lg:p-8 text-center transition hover:shadow-lg"
            >
              {/* Step number */}
              <div className="absolute -top-4 sm:-top-5 left-1/2 flex h-9 w-9 sm:h-10 sm:w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary font-bold text-white text-sm sm:text-base">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mt-6 sm:mt-8 flex justify-center text-primary">
                <div className="scale-90 sm:scale-100">
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-text">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;