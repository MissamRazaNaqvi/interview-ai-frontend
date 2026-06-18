const HowItWorks = () => {
    return (
      <section className=" py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-center text-4xl font-bold">
            How It Works
          </h2>
  
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-5xl">📄</div>
              <h3 className="text-xl font-semibold">
                Upload Resume
              </h3>
            </div>
  
            <div className="text-center">
              <div className="mb-4 text-5xl">🤖</div>
              <h3 className="text-xl font-semibold">
                AI Analysis
              </h3>
            </div>
  
            <div className="text-center">
              <div className="mb-4 text-5xl">🚀</div>
              <h3 className="text-xl font-semibold">
                Improve & Apply
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;