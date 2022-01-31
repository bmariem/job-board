import "./App.css";

// Components
import Header from "./Components/Header";
import Jobs from "./Components/Jobs";
import Footer from "./Components/Footer";

function App() {
  const jobs = [
    {
      key: 1,
      className: "red",
      title: "Full Time Sales Associate - Sydney Boutique",
      contractType: "CDI",
      country: "Australie",
      city: "Sydney",
    },
    {
      key: 2,
      className: "green",
      title: "Agent de Sécurité - Pantin",
      contractType: "CDI",
      country: "France",
      city: "Pantin",
    },
    {
      key: 3,
      className: "yellow",
      title: "Responsable d'Atelier (H/F)",
      contractType: "CDD",
      country: "France",
      city: "Paris",
    },
    {
      key: 4,
      className: "blue",
      title: "Chef de Projets",
      contractType: "CDD",
      country: "France",
      city: "Paris",
    },
    {
      key: 5,
      className: "pink",
      title: "Développeur React.js",
      contractType: "CDI",
      country: "France",
      city: "Paris",
    },
    {
      key: 6,
      className: "red",
      title: "Sales Associate Stockholm",
      contractType: "CDI",
      country: "Suède",
      city: "Stockholm",
    },
    {
      key: 7,
      className: "green",
      title: "Vendeur/se - Crans Montana",
      contractType: "CDI",
      country: "Suisse",
      city: "Crans-Montana",
    },
    {
      key: 8,
      className: "yellow",
      title: "CRM & Data Quality Analyst",
      contractType: "CDI",
      country: "USA",
      city: "New York",
    },
    {
      key: 9,
      className: "blue",
      title: "Infirmier (H/F)",
      contractType: "CDI",
      country: "France",
      city: "Pantin",
    },
  ];
  return (
    <>
      <Header title="The Job Board" />

      <Jobs jobs={jobs} />

      <Footer text="Made with React by Mariem Belgacem" />
    </>
  );
}

export default App;
