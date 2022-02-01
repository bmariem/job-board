const Job = (props) => {
  return (
    <div className={`job border-${props.className}`}>
      {/* IF TRUE */}
      {props.title && <h2>{props.title}</h2>}
      <p>
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};

export default Job;
