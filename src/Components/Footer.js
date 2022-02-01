const Footer = (props) => {
  return (
    <footer>
      <p>
        {props.text}
        <a href={props.link} title={props.name}>
          {props.name}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
