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
    <section className="py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          How It Works
        </h2>

        <div className="mt-20 grid gap-10 md:grid-cols-3">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-8 text-center"
            >
              <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary font-bold text-white">
                {index + 1}
              </div>

              <div className="mt-6 flex justify-center text-primary">
                {step.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-text">
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