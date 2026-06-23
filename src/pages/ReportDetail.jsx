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
        <div className="min-h-screen mx-auto max-w-7xl bg-background text-text p-4 sm:p-6 space-y-6">

            {/* HEADER */}
            <div className="bg-card border border-border p-4 sm:p-5 rounded-xl">
                <h1 className="text-xl sm:text-2xl font-bold text-heading">
                    📄 AI Resume Analysis Report
                </h1>
                <p className="text-muted mt-1 text-sm sm:text-base">
                    Job Role: <span className="text-primary">{report.jobDescription}</span>
                </p>
            </div>

            {/* SCORE CARDS (FLEX) */}
            <div className="flex flex-col sm:flex-row gap-4">

                <div className="flex-1 bg-card border border-border p-5 rounded-xl">
                    <p className="text-muted text-sm">ATS Score</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                        {analysis.atsScore}
                    </h2>
                </div>

                <div className="flex-1 bg-card border border-border p-5 rounded-xl">
                    <p className="text-muted text-sm">Job Match Score</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-accent">
                        {analysis.jobMatchScore}
                    </h2>
                </div>

                <div className="flex-1 bg-card border border-border p-5 rounded-xl">
                    <p className="text-muted text-sm">Overall Score</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-success">
                        {analysis.overallFeedback?.overallScore}
                    </h2>
                </div>

            </div>

            {/* SUMMARY */}
            <div className="bg-card border border-border p-5 rounded-xl">
                <h2 className="text-heading text-lg sm:text-xl font-semibold mb-2">
                    🧠 AI Summary
                </h2>
                <p className="text-muted leading-relaxed text-sm sm:text-base">
                    {analysis.profileSummary}
                </p>
            </div>

            {/* SKILLS */}
            <div className="flex flex-col lg:flex-row gap-6">

                {/* MATCHED */}
                <div className="flex-1 bg-card border border-border p-5 rounded-xl">
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
                <div className="flex-1 bg-card border border-border p-5 rounded-xl">
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
            <div className="flex flex-col lg:flex-row gap-6">

                <div className="flex-1 bg-card border border-border p-5 rounded-xl">
                    <h2 className="text-heading font-semibold mb-3">
                        💪 Strengths
                    </h2>

                    <ul className="space-y-1 text-muted list-disc ml-5 text-sm sm:text-base">
                        {resumeStrengths?.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 bg-card border border-border p-5 rounded-xl">
                    <h2 className="text-heading font-semibold mb-3">
                        ⚠️ Weaknesses
                    </h2>

                    <ul className="space-y-1 text-muted list-disc ml-5 text-sm sm:text-base">
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
                <p className="text-muted text-sm sm:text-base">
                    {skillGapAnalysis?.overallGap}
                </p>
            </div>

            {/* CAREER PATH */}
            <div className="bg-card border border-border p-5 rounded-xl">
                <h2 className="text-heading font-semibold mb-3">
                    🚀 Career Path
                </h2>

                <div className="flex flex-col gap-1 text-sm sm:text-base">
                    <p className="text-muted">
                        <span className="text-heading font-medium">Current:</span>{" "}
                        {careerPathRecommendation?.currentLevel}
                    </p>

                    <p className="text-muted">
                        <span className="text-heading font-medium">Next:</span>{" "}
                        {careerPathRecommendation?.nextRole}
                    </p>

                    <p className="text-muted">
                        <span className="text-heading font-medium">Goal:</span>{" "}
                        {careerPathRecommendation?.longTermGoal}
                    </p>
                </div>
            </div>

            {/* PROJECTS */}
            <div className="bg-card border border-border p-5 rounded-xl">
                <h2 className="text-heading font-semibold mb-4">
                    🧩 Recommended Projects
                </h2>

                <div className="flex flex-wrap gap-4">

                    {recommendedProjects?.map((proj, i) => (
                        <div
                            key={i}
                            className="
                  flex flex-col
                  basis-full sm:basis-[48%] lg:basis-[31%]
                  border border-border p-4 rounded-lg bg-surface
                  hover:border-primary transition
                "
                        >
                            <h3 className="text-heading font-medium mb-2">
                                {proj.title}
                            </h3>

                            <p className="text-muted text-sm mb-3">
                                {proj.description}
                            </p>

                            <div className="flex flex-wrap gap-1 mt-auto">
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