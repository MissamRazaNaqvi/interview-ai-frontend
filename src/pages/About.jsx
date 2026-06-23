const About = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-background text-text">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">

          <span className="inline-block rounded-full bg-primary/20 px-4 py-2 text-xs sm:text-sm font-medium text-primary">
            About ResumeAI
          </span>

          <h1 className="mt-5 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Helping Job Seekers Land More Interviews
          </h1>

          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl lg:max-w-3xl text-sm sm:text-base lg:text-lg text-textSecondary leading-relaxed">
            ResumeAI was built to help professionals create stronger,
            ATS-optimized resumes using the power of Artificial Intelligence.
          </p>

        </div>

        {/* Content Grid */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Left */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Our Mission
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-textSecondary leading-relaxed">
              We believe every job seeker deserves access to
              professional resume feedback. Our AI analyzes resumes,
              identifies weaknesses, and provides actionable
              recommendations to improve hiring success.
            </p>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Why Choose ResumeAI?
            </h2>

            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-textSecondary">
              <li>✓ Advanced ATS Compatibility Checks</li>
              <li>✓ AI-Powered Resume Insights</li>
              <li>✓ Keyword Optimization</li>
              <li>✓ Professional Resume Templates</li>
              <li>✓ Detailed Improvement Suggestions</li>
              <li>✓ Secure Document Handling</li>
            </ul>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 rounded-2xl sm:rounded-3xl bg-primary p-6 sm:p-10 lg:p-12 text-center text-white">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Ready to Improve Your Resume?
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-200">
            Upload your resume and receive actionable AI insights.
          </p>

          <button className="mt-6 sm:mt-8 rounded-xl bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-primary transition hover:bg-gray-100">
            Get Started
          </button>

        </div>

      </div>
    </section>
  );
};

export default About;