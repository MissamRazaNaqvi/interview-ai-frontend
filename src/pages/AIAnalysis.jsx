const AIAnalysis = () => {
    const features = [
      "ATS Score Evaluation",
      "Keyword Optimization",
      "Skill Gap Detection",
      "Resume Strength Analysis",
      "Industry Recommendations",
      "Content Improvement Suggestions",
    ];
  
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-600">
              AI Powered Analysis
            </span>
  
            <h1 className="mt-6 text-5xl font-bold">
              Smart Resume Analysis
            </h1>
  
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Get instant feedback on your resume using advanced AI.
              Improve ATS compatibility, keyword matching, and overall
              hiring potential.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                What Our AI Evaluates
              </h2>
  
              <div className="mt-8 space-y-4">
                {features.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border p-4"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
  
            <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 p-10 text-white">
              <h3 className="text-3xl font-bold">
                Upload Resume
              </h3>
  
              <p className="mt-4 text-lg">
                Receive an ATS score, AI recommendations,
                keyword suggestions, and improvement tips
                within seconds.
              </p>
  
              <button className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600">
                Analyze Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AIAnalysis;