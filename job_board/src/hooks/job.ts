import { useMutation, useQuery } from "@tanstack/react-query";
import { createJob, fetchJobs } from "../api/jobs";

const JOBS = "JOBS";

export const useCreateJob = () => {
  return useMutation(createJob);
};

export const useJobs = () => {
  return useQuery([JOBS], fetchJobs);
};
