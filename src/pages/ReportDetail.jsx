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

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReportDetail = () => {
    const { id } = useParams();
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/interview/report/${id}`,
                    { withCredentials: true }
                );
                setReport(res.data.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchReport();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background text-text flex items-center justify-center">
                <p className="text-muted">Loading report...</p>
            </div>
        );
    }

    if (!report) {
        return (
            <div className="min-h-screen bg-background text-text flex items-center justify-center">
                <p className="text-muted">Report not found</p>
            </div>
        );
    }

    const analysis = report?.analysis || {};

    const technicalSkills = analysis?.technicalSkills || { matched: [], missing: [], additional: [] };
    const softSkills = analysis?.softSkills || { strengths: [], missing: [] };
    const skillGapAnalysis = analysis?.skillGapAnalysis || {};
    const resumeStrengths = analysis?.resumeStrengths || [];
    const resumeWeaknesses = analysis?.resumeWeaknesses || [];
    const recommendedProjects = analysis?.recommendedProjects || [];
    const careerPathRecommendation = analysis?.careerPathRecommendation || {};

    return (
        <div className="min-h-screen mx-auto max-w-7xl bg-background text-text p-6 space-y-6">

            {/* HEADER */}
            <div className="bg-card border border-border p-5 rounded-xl">
                <h1 className="text-2xl font-bold text-heading">
                    📄 AI Resume Analysis Report
                </h1>
                <p className="text-muted mt-1">
                    Job Role: <span className="text-primary">{report.jobDescription}</span>
                </p>
            </div>

            {/* SCORE CARDS */}
            <div className="grid md:grid-cols-3 gap-4">

                <div className="bg-card border border-border p-5 rounded-xl">
                    <p className="text-muted text-sm">ATS Score</p>
                    <h2 className="text-3xl font-bold text-primary">
                        {analysis.atsScore}
                    </h2>
                </div>

                <div className="bg-card border border-border p-5 rounded-xl">
                    <p className="text-muted text-sm">Job Match Score</p>
                    <h2 className="text-3xl font-bold text-accent">
                        {analysis.jobMatchScore}
                    </h2>
                </div>

                <div className="bg-card border border-border p-5 rounded-xl">
                    <p className="text-muted text-sm">Overall Score</p>
                    <h2 className="text-3xl font-bold text-success">
                        {analysis.overallFeedback?.overallScore}
                    </h2>
                </div>

            </div>

            {/* SUMMARY */}
            <div className="bg-card border border-border p-5 rounded-xl">
                <h2 className="text-heading text-xl font-semibold mb-2">
                    🧠 AI Summary
                </h2>
                <p className="text-muted leading-relaxed">
                    {analysis.profileSummary}
                </p>
            </div>

            {/* SKILLS */}
            <div className="grid md:grid-cols-2 gap-6">

                {/* MATCHED */}
                <div className="bg-card border border-border p-5 rounded-xl">
                    <h2 className="text-heading font-semibold mb-3">
                        ✅ Matched Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {technicalSkills?.matched?.map((skill, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 text-xs rounded-full bg-success/10 text-success border border-success/20"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* MISSING */}
                <div className="bg-card border border-border p-5 rounded-xl">
                    <h2 className="text-heading font-semibold mb-3">
                        ❌ Missing Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {technicalSkills?.missing?.map((skill, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 text-xs rounded-full bg-danger/10 text-danger border border-danger/20"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

            {/* STRENGTH & WEAKNESS */}
            <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-card border border-border p-5 rounded-xl">
                    <h2 className="text-heading font-semibold mb-3">
                        💪 Strengths
                    </h2>
                    <ul className="space-y-1 text-muted list-disc ml-5">
                        {resumeStrengths?.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-card border border-border p-5 rounded-xl">
                    <h2 className="text-heading font-semibold mb-3">
                        ⚠️ Weaknesses
                    </h2>
                    <ul className="space-y-1 text-muted list-disc ml-5">
                        {resumeWeaknesses?.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* SKILL GAP */}
            <div className="bg-card border border-border p-5 rounded-xl">
                <h2 className="text-heading font-semibold mb-2">
                    📊 Skill Gap Analysis
                </h2>
                <p className="text-muted">
                    {skillGapAnalysis?.overallGap}
                </p>
            </div>

            {/* CAREER PATH */}
            <div className="bg-card border border-border p-5 rounded-xl">
                <h2 className="text-heading font-semibold mb-3">
                    🚀 Career Path
                </h2>

                <p className="text-muted">
                    <span className="text-heading font-medium">Current:</span>{" "}
                    {careerPathRecommendation?.currentLevel}
                </p>

                <p className="text-muted mt-1">
                    <span className="text-heading font-medium">Next:</span>{" "}
                    {careerPathRecommendation?.nextRole}
                </p>

                <p className="text-muted mt-1">
                    <span className="text-heading font-medium">Goal:</span>{" "}
                    {careerPathRecommendation?.longTermGoal}
                </p>
            </div>

            {/* PROJECTS */}
            <div className="bg-card border border-border p-5 rounded-xl">
                <h2 className="text-heading font-semibold mb-4">
                    🧩 Recommended Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-4">
                    {recommendedProjects?.map((proj, i) => (
                        <div
                            key={i}
                            className="border border-border p-4 rounded-lg bg-surface hover:border-primary transition"
                        >
                            <h3 className="text-heading font-medium mb-2">
                                {proj.title}
                            </h3>

                            <p className="text-muted text-sm mb-3">
                                {proj.description}
                            </p>

                            <div className="flex flex-wrap gap-1">
                                {proj?.skillsCovered?.map((s, j) => (
                                    <span
                                        key={j}
                                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ReportDetail;