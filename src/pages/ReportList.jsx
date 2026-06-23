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
                    `${import.meta.env.VITE_API_URL}/interview/reports`,
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
        <div className="min-h-screen bg-background text-text px-4 sm:px-6 py-6">

        {reports.length === 0 ? (
            <div className="min-h-[70vh] flex items-center justify-center">
                <div className="text-center max-w-md bg-card border border-border rounded-xl p-6 sm:p-8 shadow-lg">

                    <h2 className="text-xl sm:text-2xl font-bold text-heading mb-2">
                        No Reports Found 📭
                    </h2>

                    <p className="text-muted mb-6 text-sm sm:text-base">
                        You haven’t generated any AI interview reports yet.
                    </p>

                    <Link
                        to="/upload-resume"
                        className="inline-block px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition"
                    >
                        Generate Report
                    </Link>
                </div>
            </div>
        ) : (
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-heading">
                        📊 Generated Reports
                    </h1>
                    <p className="text-muted mt-1 text-sm sm:text-base">
                        AI analyzed candidate reports based on job descriptions
                    </p>
                </div>

                {/* FLEX WRAP CONTAINER (instead of grid) */}
                <div className="flex flex-wrap gap-5">

                    {reports.map((report) => {
                        const analysis = report.analysis;

                        return (
                            <Link
                                key={report._id}
                                to={`/report/${report._id}`}
                                className="
                                    flex flex-col
                                    basis-full
                                    sm:basis-[48%]
                                    lg:basis-[31%]
                                    bg-card border border-border rounded-xl
                                    p-4 sm:p-5
                                    hover:border-primary transition-all duration-300
                                    hover:shadow-lg hover:shadow-primary/10
                                "
                            >

                                {/* TITLE */}
                                <h2 className="text-base sm:text-lg font-semibold text-heading mb-2 line-clamp-2">
                                    {report.jobDescription}
                                </h2>

                                {/* BADGES */}
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

                                {/* RECOMMENDATION */}
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

                                {/* SUMMARY */}
                                <p className="text-sm text-muted line-clamp-3 flex-1">
                                    {analysis.summary}
                                </p>

                                {/* FOOTER */}
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
        )}
    </div>
    );
};

export default ReportList;