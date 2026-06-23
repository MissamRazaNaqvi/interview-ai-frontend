import { Eye, Download } from "lucide-react";

const templates = [
  {
    title: "Modern Professional",
    description:
      "Perfect for Software Engineers and IT Professionals.",
    tag: "ATS Optimized",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Executive Resume",
    description:
      "Designed for Managers and Senior Professionals.",
    tag: "Executive",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Creative Portfolio",
    description:
      "Ideal for Designers and Creative Professionals.",
    tag: "Creative",
    color: "from-emerald-500 to-cyan-500",
  },
];

export default function Templates() {
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-card border border-border px-4 sm:px-5 py-2 text-xs sm:text-sm text-primary">
            Resume Templates
          </span>

          <h1 className="mt-5 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold text-heading leading-tight">
            ATS-Friendly Resume Templates
          </h1>

          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl lg:max-w-3xl text-sm sm:text-base lg:text-lg text-text">
            Professionally designed templates that help your resume
            pass Applicant Tracking Systems and impress recruiters.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {templates.map((template) => (
            <div
              key={template.title}
              className="overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card transition hover:-translate-y-2 hover:border-primary"
            >
              {/* Gradient preview */}
              <div className={`h-52 sm:h-64 lg:h-72 bg-gradient-to-br ${template.color}`} />

              <div className="p-5 sm:p-6 lg:p-7">

                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs sm:text-sm text-primary">
                  {template.tag}
                </span>

                <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-bold text-heading">
                  {template.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-text">
                  {template.description}
                </p>

                {/* Buttons */}
                <div className="mt-6 sm:mt-8 flex gap-3">

                  <button className="flex-1 rounded-lg sm:rounded-xl bg-primary py-2.5 sm:py-3 text-sm sm:text-base text-white hover:bg-primary-hover flex items-center justify-center gap-2">
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                    Preview
                  </button>

                  <button className="rounded-lg sm:rounded-xl border border-border px-4 sm:px-5 hover:border-primary">
                    <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}