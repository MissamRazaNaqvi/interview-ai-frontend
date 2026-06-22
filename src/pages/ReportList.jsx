import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ReportList = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/api/v1/interview/reports",
                    { withCredentials: true }
                );

                setReports(res.data.data);
            } catch (err) {
                console.error("Error fetching reports:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-background text-text">
                <p className="text-lg text-muted">Loading reports...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-text p-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-heading">
                    📊 Generated Reports
                </h1>
                <p className="text-muted mt-1">
                    AI analyzed candidate reports based on job descriptions
                </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map((report) => {
                    const analysis = report.analysis;

                    return (
                        <Link
                            key={report._id}
                            to={`/report/${report._id}`}
                            className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                        >
                            {/* Job Title */}
                            <h2 className="text-lg font-semibold text-heading mb-2 line-clamp-2">
                                {report.jobDescription}
                            </h2>

                            {/* Score badges */}
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                                    ATS: {analysis.atsScore}
                                </span>

                                <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                                    Match: {analysis.jobMatchScore}
                                </span>

                                <span className="px-2 py-1 text-xs rounded-full bg-muted/10 text-text border border-border">
                                    Score: {analysis.overallScore}
                                </span>
                            </div>

                            {/* Recommendation */}
                            <div className="mb-3">
                                <span
                                    className={`text-xs font-medium px-2 py-1 rounded-full border ${
                                        analysis.hiringRecommendation === "Recommended"
                                            ? "bg-success/10 text-success border-success/20"
                                            : "bg-danger/10 text-danger border-danger/20"
                                    }`}
                                >
                                    {analysis.hiringRecommendation}
                                </span>
                            </div>

                            {/* Summary */}
                            <p className="text-sm text-muted line-clamp-3">
                                {analysis.summary}
                            </p>

                            {/* Footer */}
                            <div className="mt-4 pt-3 border-t border-border">
                                <p className="text-xs text-muted">
                                    Created:{" "}
                                    {new Date(report.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ReportList;