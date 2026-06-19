import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate()
    return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-6xl font-bold">
            Get Your Resume Reviewed by AI
          </h1>
  
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
            Upload your resume and receive ATS scoring,
            skill analysis, keyword recommendations,
            and actionable improvements in seconds.
          </p>
  
          <button className="cursor-pointer rounded-xl bg-gray-600 px-8 py-4 text-lg" onClick={()=>{navigate('/upload-resume')}}>
            Upload Resume
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;