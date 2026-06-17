const Templates = () => {
    const templates = [
      {
        title: "Modern Professional",
        description:
          "Clean and ATS-friendly template for software engineers and developers.",
      },
      {
        title: "Executive Resume",
        description:
          "Designed for senior professionals and management roles.",
      },
      {
        title: "Creative Portfolio",
        description:
          "Perfect for designers, marketers, and creative professionals.",
      },
    ];
  
    return (
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
              Resume Templates
            </span>
  
            <h1 className="mt-6 text-5xl font-bold">
              ATS-Friendly Resume Templates
            </h1>
  
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Choose from professionally designed resume templates
              optimized for recruiters and Applicant Tracking Systems.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <div
                key={template.title}
                className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-72 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100"></div>
  
                <h3 className="mt-6 text-xl font-semibold">
                  {template.title}
                </h3>
  
                <p className="mt-3 text-gray-600">
                  {template.description}
                </p>
  
                <button className="mt-6 w-full rounded-lg bg-indigo-600 py-3 text-white">
                  Preview Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Templates;