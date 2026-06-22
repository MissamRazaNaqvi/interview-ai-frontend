// import { CheckCircle, XCircle, AlertTriangle, Briefcase, TrendingUp, Target, BookOpen, Award} from "lucide-react";
// import useAuth from "../hook/useAuth";

// export default function ResumeAnalysisReport() {

//   const { analysis, setAnalysis } = useAuth()

//   console.log(analysis,"analysis")

//   return (
//     <div className="min-h-screen bg-slate-950 text-white py-10 px-4">

//       <div className="max-w-7xl mx-auto space-y-8">

//         {/* Header */}
//         <div className="text-center">
//           <h1 className="text-4xl font-bold">
//             AI Resume Analysis Report
//           </h1>

//           <p className="text-slate-400 mt-3">
//             Complete ATS & Job Match Analysis
//           </p>
//         </div>

//         {/* Score Cards */}

//         <div className="grid md:grid-cols-3 gap-5">

//           <ScoreCard
//             title="ATS Score"
//             value={analysis.atsScore}
//             color="green"
//           />

//           <ScoreCard
//             title="Job Match"
//             value={analysis.jobMatchScore}
//             color="blue"
//           />

//           <ScoreCard
//             title="Overall Score"
//             value={
//               analysis.overallFeedback
//                 .overallScore
//             }
//             color="purple"
//           />
//         </div>

//         {/* Summary */}

//         <SectionCard title="Profile Summary">
//           <p className="leading-7 text-slate-300">
//             {analysis.profileSummary}
//           </p>
//         </SectionCard>

//         {/* Technical Skills */}

//         <div className="grid lg:grid-cols-3 gap-6">

//           <SkillBox
//             title="Matched Skills"
//             color="green"
//             items={
//               analysis.technicalSkills.matched
//             }
//           />

//           <SkillBox
//             title="Missing Skills"
//             color="red"
//             items={
//               analysis.technicalSkills.missing
//             }
//           />

//           <SkillBox
//             title="Additional Skills"
//             color="blue"
//             items={
//               analysis.technicalSkills.additional
//             }
//           />
//         </div>

//         {/* Strengths Weakness */}

//         <div className="grid lg:grid-cols-2 gap-6">

//           <ListCard
//             title="Resume Strengths"
//             icon={<CheckCircle />}
//             items={analysis.resumeStrengths}
//             success
//           />

//           <ListCard
//             title="Resume Weaknesses"
//             icon={<XCircle />}
//             items={analysis.resumeWeaknesses}
//             danger
//           />
//         </div>

//         {/* Missing Keywords */}

//         <SectionCard title="Missing Keywords">

//           <div className="flex flex-wrap gap-3">
//             {analysis.missingKeywords.map(
//               (item, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-2 rounded-full bg-red-500/20 text-red-300 border border-red-500/30"
//                 >
//                   {item}
//                 </span>
//               )
//             )}
//           </div>

//         </SectionCard>

//         {/* Improvement Suggestions */}

//         <SectionCard title="Improvement Suggestions">

//           <div className="space-y-4">
//             {analysis.improvementSuggestions.map(
//               (item, index) => (
//                 <div
//                   key={index}
//                   className="bg-slate-900 rounded-xl p-4 border border-slate-800"
//                 >
//                   <h4 className="font-semibold text-indigo-400">
//                     {item.section}
//                   </h4>

//                   <p className="text-slate-300 mt-2">
//                     {item.suggestion}
//                   </p>
//                 </div>
//               )
//             )}
//           </div>

//         </SectionCard>

//         {/* Projects */}

//         <SectionCard title="Recommended Projects">

//           <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

//             {analysis.recommendedProjects.map(
//               (project, index) => (
//                 <div
//                   key={index}
//                   className="bg-slate-900 rounded-2xl border border-slate-800 p-5"
//                 >
//                   <h3 className="font-bold text-lg">
//                     {project.title}
//                   </h3>

//                   <p className="mt-3 text-sm text-slate-400">
//                     {project.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mt-4">
//                     {project.skillsCovered.map(
//                       (skill, i) => (
//                         <span
//                           key={i}
//                           className="px-2 py-1 text-xs rounded bg-indigo-500/20"
//                         >
//                           {skill}
//                         </span>
//                       )
//                     )}
//                   </div>
//                 </div>
//               )
//             )}
//           </div>

//         </SectionCard>

//         {/* Career Path */}

//         <SectionCard title="Career Path Recommendation">

//           <div className="grid md:grid-cols-3 gap-4">

//             <InfoBox
//               title="Current Level"
//               value={
//                 analysis
//                   .careerPathRecommendation
//                   .currentLevel
//               }
//             />

//             <InfoBox
//               title="Next Role"
//               value={
//                 analysis
//                   .careerPathRecommendation
//                   .nextRole
//               }
//             />

//             <InfoBox
//               title="Long Term Goal"
//               value={
//                 analysis
//                   .careerPathRecommendation
//                   .longTermGoal
//               }
//             />

//           </div>

//           <p className="mt-5 text-slate-400">
//             {
//               analysis
//                 .careerPathRecommendation
//                 .explanation
//             }
//           </p>

//         </SectionCard>

//         {/* Learning Roadmap */}

//         <div className="grid lg:grid-cols-3 gap-6">

//           <RoadmapCard
//             title="Beginner"
//             items={
//               analysis.learningRoadmap
//                 .beginner
//             }
//           />

//           <RoadmapCard
//             title="Intermediate"
//             items={
//               analysis.learningRoadmap
//                 .intermediate
//             }
//           />

//           <RoadmapCard
//             title="Advanced"
//             items={
//               analysis.learningRoadmap
//                 .advanced
//             }
//           />

//         </div>

//         {/* Interview */}

//         <SectionCard title="Interview Preparation">

//           <div className="grid lg:grid-cols-3 gap-6">

//             <ListCard
//               title="Technical Questions"
//               items={
//                 analysis.interviewPreparation
//                   .technicalQuestions
//               }
//             />

//             <ListCard
//               title="Behavioral Questions"
//               items={
//                 analysis.interviewPreparation
//                   .behavioralQuestions
//               }
//             />

//             <ListCard
//               title="Topics To Study"
//               items={
//                 analysis.interviewPreparation
//                   .topicsToStudy
//               }
//             />

//           </div>

//         </SectionCard>

//         {/* Final Recommendation */}

//         <div className="rounded-3xl p-8 bg-gradient-to-r from-indigo-600 to-purple-600">

//           <h2 className="text-3xl font-bold">
//             {
//               analysis.overallFeedback
//                 .hiringRecommendation
//             }
//           </h2>

//           <p className="mt-4 text-lg">
//             {
//               analysis.overallFeedback
//                 .summary
//             }
//           </p>

//         </div>

//       </div>
//     </div>
//   );
// }

// function ScoreCard({ title, value }) {
//   return (
//     <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
//       <p className="text-slate-400">
//         {title}
//       </p>

//       <h2 className="text-4xl font-bold mt-3">
//         {value}%
//       </h2>
//     </div>
//   );
// }
// function SectionCard({
//   title,
//   children,
// }) {
//   return (
//     <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
//       <h2 className="text-2xl font-bold mb-5">
//         {title}
//       </h2>
//       {children}
//     </div>
//   );
// }
// function SkillBox({
//   title,
//   items,
// }) {
//   return (
//     <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
//       <h3 className="font-semibold mb-4">
//         {title}
//       </h3>

//       <div className="flex flex-wrap gap-2">
//         {items.map((item, index) => (
//           <span
//             key={index}
//             className="px-3 py-1 rounded-full bg-slate-800 text-sm"
//           >
//             {item}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }
// function ListCard({
//   title,
//   items,
// }) {
//   return (
//     <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
//       <h3 className="font-semibold mb-4">
//         {title}
//       </h3>

//       <ul className="space-y-3">
//         {items.map((item, index) => (
//           <li
//             key={index}
//             className="text-slate-300"
//           >
//             • {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// function InfoBox({
//   title,
//   value,
// }) {
//   return (
//     <div className="bg-slate-800 rounded-xl p-4">
//       <p className="text-slate-400 text-sm">
//         {title}
//       </p>

//       <h3 className="font-semibold mt-2">
//         {value}
//       </h3>
//     </div>
//   );
// }
// function RoadmapCard({
//   title,
//   items,
// }) {
//   return (
//     <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
//       <h3 className="text-xl font-bold mb-4">
//         {title}
//       </h3>

//       <ul className="space-y-3">
//         {items.map((item, index) => (
//           <li key={index}>
//             • {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React from "react";
import {
  CheckCircle,
  Briefcase,
  Calendar,
  FileText,
  Award,
} from "lucide-react";

const analysisData = {
  atsScore: 92,
  jobMatchScore: 88,
  overallFeedback: {
    overallScore: 87,
    hiringRecommendation: "Recommended",
    summary:
      "Missam Naqvi is a strong candidate for a MERN Developer role. They possess a solid understanding of the core MERN stack and related frontend technologies, backed by practical project experience.",
  },
  jobDescription: "MERN Developer",
  createdAt: "2026-06-19T13:19:34.388Z",
};

export default function ReportDetail() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            AI Resume Analysis Report
          </h1>

          <p className="text-slate-400 mt-2">
            Detailed ATS and Job Match Evaluation
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid gap-5 md:grid-cols-3">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400">ATS Score</p>

            <h2 className="text-5xl font-bold mt-3 text-emerald-400">
              {analysisData.atsScore}%
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400">
              Job Match Score
            </p>

            <h2 className="text-5xl font-bold mt-3 text-indigo-400">
              {analysisData.jobMatchScore}%
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400">
              Overall Score
            </p>

            <h2 className="text-5xl font-bold mt-3 text-yellow-400">
              {analysisData.overallFeedback.overallScore}%
            </h2>
          </div>

        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">

          {/* Left */}
          <div className="lg:col-span-2 space-y-6">

            {/* Summary */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText size={22} />
                <h3 className="text-xl font-semibold">
                  AI Summary
                </h3>
              </div>

              <p className="text-slate-300 leading-8">
                {analysisData.overallFeedback.summary}
              </p>
            </div>

            {/* Recommendation */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-4">
                <Award size={22} />
                <h3 className="text-xl font-semibold">
                  Hiring Recommendation
                </h3>
              </div>

              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                <CheckCircle size={18} />
                {
                  analysisData.overallFeedback
                    .hiringRecommendation
                }
              </div>

            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">

            {/* Job Details */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <div className="flex items-center gap-2 mb-5">
                <Briefcase size={20} />
                <h3 className="font-semibold text-lg">
                  Job Details
                </h3>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Position
                </p>

                <p className="font-medium mt-1">
                  {analysisData.jobDescription}
                </p>
              </div>

            </div>

            {/* Date */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <div className="flex items-center gap-2 mb-5">
                <Calendar size={20} />
                <h3 className="font-semibold text-lg">
                  Report Date
                </h3>
              </div>

              <p className="text-slate-300">
                {new Date(
                  analysisData.createdAt
                ).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

            </div>

            {/* Status */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6">

              <h3 className="font-semibold text-lg mb-4">
                Candidate Status
              </h3>

              <p className="text-white/90">
                Your profile matches the role requirements
                very well and is recommended for further
                interview rounds.
              </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}