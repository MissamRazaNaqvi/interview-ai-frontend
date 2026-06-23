const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-center md:text-left">

          {/* Left Section */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-400">
              ResumeAI
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-300">
              AI-powered resume analysis platform.
            </p>
          </div>

          {/* Right Section */}
          <div className="text-xs sm:text-sm text-gray-300">
            © {new Date().getFullYear()} ResumeAI. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;