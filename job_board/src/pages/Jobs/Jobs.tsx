import { useState } from "react";
import AddJobModal from "./AddJobModal";
import { useJobs } from "../../hooks/job";
import styled from "styled-components";
import { formatDate } from "../../utils/date";
import Button from "../../components/Button/Button";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const Jobs = () => {
  const { data: jobs, isLoading } = useJobs();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isLoading) {
    return <div>Jobs are loading...</div>;
  }
  // !0 => true
  // true && false

  if (!isLoading && !jobs?.length) {
    return <div>There are no jobs added yet..</div>;
  }

  // title: string;
  // description: string;
  // price: number;
  // type: JobType;
  // starting_from: string;
  // has_drivers_license: boolean;
  // user_id: User["id"];

  const jobTypeLooks = (type: string) => {
    if (type === "fullTime") {
      return "Full Time";
    }
    if (type === "partTime") {
      return "Part Time";
    }
    if (type === "freelance") {
      return "Freelance";
    }
  };

  return (
    <PageContainer>
      <button onClick={openModal}>Create Job Post</button>
      <Container>
        {jobs.map((job) => (
          <JobCard key={job.id}>
            <div onClick={() => setBookmark(!bookmark)}>
              {bookmark ? (
                <BsBookmark className="bookmark" />
              ) : (
                <BsBookmarkFill className="bookmark" />
              )}
            </div>
            <h2>{job.title}</h2>
            <Salary>{job.price} €</Salary>
            <Description>{job.description}</Description>
            <Row>
              <Perks>{jobTypeLooks(job.type)}</Perks>
              <Perks>Start: {formatDate(job.starting_from)}</Perks>
              {job.has_drivers_license && <Perks>Drivers License needed</Perks>}
            </Row>
            <ButtonContainer>
              <Button>Apply</Button>
            </ButtonContainer>
          </JobCard>
        ))}

        <AddJobModal isOpen={modalIsOpen} close={closeModal} />
      </Container>
    </PageContainer>
  );
};

export default Jobs;
const PageContainer = styled.div`
  background-color: #c2b0e273;
  height: 100vw;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;
`;

const JobCard = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.393) 0px 7px 29px 0px;
  border-radius: 4px;
  padding: 16px;
  position: relative;
  .bookmark {
    position: absolute;
    right: 10px;
    top: -2px;
    font-size: 3rem;
    color: #9575cd;
    cursor: pointer;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
`;

const Salary = styled.p`
  font-weight: 700;
  color: gray;
`;

const Perks = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 5px;
  width: fit-content;
  padding: 5px;
  font-size: 10px;
  color: gray;
`;

const Description = styled.p`
  margin: 16px 0px;
  font-size: 14px;
  color: gray;
`;
