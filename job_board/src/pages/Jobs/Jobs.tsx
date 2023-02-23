import { useJobs } from "../../hooks/job";

const Jobs = () => {
  const { data } = useJobs();
  const jobs = data || [];
  console.log(jobs);
  return <div>Jobs</div>;
};

export default Jobs;
