const About = () => {
    return (
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-600">
              About ResumeAI
            </span>
  
            <h1 className="mt-6 text-5xl font-bold">
              Helping Job Seekers Land More Interviews
            </h1>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              ResumeAI was built to help professionals create stronger,
              ATS-optimized resumes using the power of Artificial
              Intelligence.
            </p>
          </div>
  
          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                Our Mission
              </h2>
  
              <p className="mt-6 text-gray-600 leading-8">
                We believe every job seeker deserves access to
                professional resume feedback. Our AI analyzes resumes,
                identifies weaknesses, and provides actionable
                recommendations to improve hiring success.
              </p>
            </div>
  
            <div>
              <h2 className="text-3xl font-bold">
                Why Choose ResumeAI?
              </h2>
  
              <ul className="mt-6 space-y-4 text-gray-600">
                <li>✓ Advanced ATS Compatibility Checks</li>
                <li>✓ AI-Powered Resume Insights</li>
                <li>✓ Keyword Optimization</li>
                <li>✓ Professional Resume Templates</li>
                <li>✓ Detailed Improvement Suggestions</li>
                <li>✓ Secure Document Handling</li>
              </ul>
            </div>
          </div>
  
          <div className="mt-20 rounded-3xl bg-indigo-600 p-12 text-center text-white">
            <h2 className="text-4xl font-bold">
              Ready to Improve Your Resume?
            </h2>
  
            <p className="mt-4 text-lg">
              Upload your resume and receive actionable AI insights.
            </p>
  
            <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-indigo-600">
              Get Started
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;