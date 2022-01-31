// Components
import Title from "./Titre";

const Header = (props) => {
  return (
    <header>
      <Title title={props.title} />
    </header>
  );
};

export default Header;
