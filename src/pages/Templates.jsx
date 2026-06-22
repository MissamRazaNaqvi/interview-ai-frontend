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
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-card border border-border px-5 py-2 text-primary">
            Resume Templates
          </span>

          <h1 className="mt-6 text-5xl font-bold text-heading">
            ATS-Friendly Resume Templates
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-text">
            Professionally designed templates that help your resume
            pass Applicant Tracking Systems and impress recruiters.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {templates.map((template) => (
            <div
              key={template.title}
              className="overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-2 hover:border-primary"
            >
              <div
                className={`h-72 bg-gradient-to-br ${template.color}`}
              />

              <div className="p-7">

                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  {template.tag}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-heading">
                  {template.title}
                </h3>

                <p className="mt-3 text-text">
                  {template.description}
                </p>

                <div className="mt-8 flex gap-3">

                  <button className="flex-1 rounded-xl bg-primary py-3 text-white hover:bg-primary-hover">
                    <Eye className="inline mr-2 h-5 w-5" />
                    Preview
                  </button>

                  <button className="rounded-xl border border-border px-5 hover:border-primary">
                    <Download className="h-5 w-5" />
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