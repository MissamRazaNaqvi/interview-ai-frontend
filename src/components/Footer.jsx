const Footer = () => {
    return (
      <footer className="border-t ">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h3 className="text-lg font-bold text-gray-400">
                ResumeAI
              </h3>
              <p className="text-sm text-gray-300">
                AI-powered resume analysis platform.
              </p>
            </div>
  
            <div className="text-sm text-gray-300">
              © {new Date().getFullYear()} ResumeAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;