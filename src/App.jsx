import { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Properties from "./components/Properties/Properties";
import rentalData from "./data/rentalData.json";
import "./App.scss";

function App() {
  const [properties, setProperties] = useState(rentalData.properties);
  const [filters, setFilters] = useState({
    location: "",
    moveInDate: "",
    price: "any",
    propertyType: "any",
  });

  const handleSearch = () => {
    let newProperties = rentalData.properties;

    if (filters.location !== "") {
      newProperties = newProperties.filter((property) =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.moveInDate !== "") {
      newProperties = newProperties.filter(
        (property) => property.move_in_date === filters.moveInDate
      );
    }

    if (filters.price !== "any") {
      const [min, max] = filters.price.split(" - ");
      newProperties = newProperties.filter(
        max
          ? (property) => property.price >= min && property.price <= max
          : (property) => property.price >= min
      );
    }

    if (filters.propertyType !== "any") {
      newProperties = newProperties.filter(
        (property) => property.type === filters.propertyType
      );
    }

    setProperties(newProperties);
  };

  return (
    <>
      <NavBar />

      <Container className="main">
        <Header />
        <Filters
          filters={filters}
          setFilters={setFilters}
          handleSearch={handleSearch}
        />
        <Properties properties={properties} />
      </Container>
    </>
  );
}

export default App;
