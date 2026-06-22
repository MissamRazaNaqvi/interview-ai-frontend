import { Upload, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";


const features = ["ATS Score Evaluation", "Keyword Optimization", "Skill Gap Detection", "Resume Strength Analysis", "Industry Recommendations", "Interview Preparation",
];

export default function ResumeAnalyzerPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const {setAnalysis} = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, setError, clearErrors, formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      selfDescription: "",
      jobDescription: "",
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    clearErrors("resume");

    console.log("Selected File:", {
      name: file.name,
      type: file.type,
      size: file.size,
    });

    if (file.type !== "application/pdf") {
      setSelectedFile(null);

      setError("resume", {
        type: "manual",
        message: "Only PDF files are allowed",
      });

      toast.error("Only PDF files are allowed");

      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      setSelectedFile(null);

      setError("resume", {
        type: "manual",
        message: "Maximum file size is 5MB",
      });

      toast.error("Maximum file size is 5MB");

      return;
    }

    setSelectedFile(file);

    toast.success("Resume uploaded successfully");
  };

  // console.log(selectedFile, "selectedFile")

  const onSubmit = async (data) => {
    try {
      // console.log( "Form Data Before Submit:",  data);

      if (!selectedFile) {
        setError("resume", {
          type: "manual",
          message: "Resume PDF is required",
        });
        return;
      }

      const formData = new FormData();

      formData.append("resume", selectedFile);
      formData.append("jobDescription", data.jobDescription);
      formData.append("selfDescription", data.selfDescription);

      // Debug FormData
      // for (let pair of formData.entries()) {
      //   console.log(
      //     pair[0],
      //     ":",
      //     pair[1]
      //   );
      // }
        
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/interview/interview-report`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      console.log("Interview Report Response:", response.data);

      if(response?.data.success == true){
        setAnalysis(response?.data)
        navigate("/reports")
      }

      console.log("API Success:",response.data);

      toast.success("Resume analyzed successfully");

      reset();
      setSelectedFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

    } catch (error) {
      console.error(
        "Resume Analysis Error:",
        error
      );

      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong";

      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-cyan-600/20 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-indigo-300">
              <Sparkles size={16} />
              AI Powered Analysis
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
              Smart Resume
              <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                ATS Analyzer
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
              Upload your resume and compare it against a
              job description using advanced AI. Improve
              ATS compatibility, discover missing skills,
              and maximize your chances of getting hired.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">
            {/* left */}
            <div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur p-8">

                <h2 className="text-3xl font-bold">
                  Upload Resume
                </h2>

                <p className="mt-2 text-slate-400">
                  Upload a resume or paste text manually.
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-6"
                >
                   <label
                    htmlFor="resume"
                    className="block cursor-pointer rounded-2xl border-2 border-dashed border-slate-700 p-10 text-center hover:border-indigo-500 transition"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-800">
                      <Upload />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                      Drag & Drop Resume
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      PDF, DOCX or TXT
                    </p>

                    <div className="mt-5 inline-flex rounded-xl bg-indigo-600 px-5 py-3">
                      Choose File
                    </div>

                    {selectedFile && (
                      <p className="mt-4 text-green-400">
                        {selectedFile.name}
                      </p>
                    )}

                    <input ref={fileInputRef} hidden id="resume" type="file" accept=".pdf" onChange={handleFileChange}/>

                    {errors.resume && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.resume.message}
                      </p>
                    )}
                  </label>

                  {/* RESUME TEXT */}

                  <div>
                    <label className="mb-2 block font-medium">
                      Self Description (Optional)
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Write here your Self Description..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                      {...register("selfDescription")}
                    />
                  </div>

                  {/* JD */}

                  <div>
                    <label className="mb-2 block font-medium">
                      Job Description
                    </label>

                    <textarea
                      rows={6}
                      placeholder="Paste job description..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                      {...register(
                        "jobDescription",
                        {
                          required:
                            "Job Description is required",
                        }
                      )}
                    />

                    {errors.jobDescription && (
                      <p className="mt-1 text-sm text-red-400">
                        {
                          errors.jobDescription
                            .message
                        }
                      </p>
                    )}
                  </div>

                  {/* BUTTONS */}

                  <div className="flex gap-4">

                    <button
                      disabled={isSubmitting}
                      className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-semibold hover:opacity-90"
                    >
                      {isSubmitting
                        ? "Analyzing..."
                        : "Analyze Resume"}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        reset();
                        setSelectedFile(null);
                      }}
                      className="rounded-xl border border-slate-700 px-6"
                    >
                      Reset
                    </button>

                  </div>
                </form>

                {/* Supported Files */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {["PDF", "DOCX", "TXT"].map(
                    (type) => (
                      <span
                        key={type}
                        className="rounded-full border border-slate-700 px-3 py-1 text-sm"
                      >
                        {type}
                      </span>
                    )
                  )}
                </div>

              </div>

            </div>

            {/* right */}
            <div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur p-8">

                <h2 className="text-3xl font-bold">
                  What Our AI Evaluates
                </h2>

                <p className="mt-3 text-slate-400">
                  Detailed ATS and recruiter-style
                  analysis of your resume.
                </p>

                <div className="mt-8 space-y-4">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-4"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-green-400"
                      />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Info Cards */}

                <div className="mt-8 grid gap-4">

                  <div className="rounded-xl border border-slate-800 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={18} />
                      <h3 className="font-semibold">
                        What You'll Get
                      </h3>
                    </div>

                    <ul className="space-y-2 text-sm text-slate-400">
                      <li>• ATS Compatibility Score</li>
                      <li>• Missing Keywords</li>
                      <li>• Skill Gap Analysis</li>
                      <li>• Interview Questions</li>
                      <li>• Career Roadmap</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-800 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck size={18} />
                      <h3 className="font-semibold">
                        Privacy
                      </h3>
                    </div>

                    <p className="text-sm text-slate-400">
                      Your uploaded files are processed
                      securely and can be deleted after
                      analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}