import { useEffect } from "react";
import { useParams, Navigate } from "react-router";
import { JobHero } from "./components/job-details/JobHero";
import { JobStory } from "./components/job-details/JobStory";
import { JobResponsibilities } from "./components/job-details/JobResponsibilities";
import { JobQualifications } from "./components/job-details/JobQualifications";
import { JobWorkplace } from "./components/job-details/JobWorkplace";
import { JobBenefits } from "./components/job-details/JobBenefits";
import { JobApplication } from "./components/job-details/JobApplication";
import { JobRelated } from "./components/job-details/JobRelated";
import { JobCTA } from "./components/job-details/JobCTA";
import { jobsData } from "./data/jobs";

export function JobDetails() {
  const { id } = useParams();
  const job = jobsData.find((j) => j.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white w-full overflow-hidden">
      <JobHero job={job} />
      <JobStory job={job} />
      <JobResponsibilities job={job} />
      <JobQualifications job={job} />
      <JobWorkplace />
      <JobBenefits />
      <JobApplication />
      <JobRelated />
      <JobCTA />
    </div>
  );
}