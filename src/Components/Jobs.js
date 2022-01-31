import Job from "./Job";

const Jobs = (props) => {
  return (
    <main>
      {props.jobs.map((job) => (
        <Job
          key={job.key}
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
