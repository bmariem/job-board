import "./App.css";

// Components
import Header from "./Components/Header";
import Jobs from "./Components/Jobs";
import Footer from "./Components/Footer";

// Data
import data from "./assets/data/data.json";

function App() {
  return (
    <>
      <Header title="The Job Board" />

      <Jobs jobs={data} />

      <Footer
        text={["Made with ", <strong>React </strong>, "by"]}
        link="https://github.com/bmariem"
        name="Mariem Belgacem"
      />
    </>
  );
}

export default App;
