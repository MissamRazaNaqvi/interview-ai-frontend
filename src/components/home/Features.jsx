import {
    FileText,
    Brain,
    TrendingUp,
    Search,
  } from "lucide-react";
  
  const features = [
    {
      icon: <FileText />,
      title: "ATS Score",
      description: "Check ATS compatibility."
    },
    {
      icon: <Brain />,
      title: "AI Suggestions",
      description: "Improve content quality."
    },
    {
      icon: <Search />,
      title: "Keyword Analysis",
      description: "Match job descriptions."
    },
    {
      icon: <TrendingUp />,
      title: "Career Insights",
      description: "Identify skill gaps."
    }
  ];
  
  const Features = () => {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Powerful AI Features
          </h2>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border p-6"
              >
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
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