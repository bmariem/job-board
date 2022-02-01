import Job from "./Job";

const Jobs = (props) => {
  return (
    <main>
      {props.jobs.map((job, index) => (
        <Job
          key={index}
          className={job.className}
          title={job.title}
          city={job.city}
          country={job.country}
          contractType={job.contractType}
        />
      ))}
    </main>
  );
};

export default Jobs;
