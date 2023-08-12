import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import "./Filters.scss";

export default function Filters({ filters, setFilters, handleSearch }) {
  return (
    <div className="filters">
      <div className="filter">
        <Form.Label htmlFor="location">Location</Form.Label>
        <Form.Control
          type="text"
          id="location"
          placeholder="Enter Location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
      </div>
      <div className="filter">
        <Form.Label htmlFor="moveIn">Move-in Date</Form.Label>
        <Form.Control
          type="date"
          id="moveIn"
          placeholder="Select Move-in Date"
          value={filters.moveInDate}
          onChange={(e) =>
            setFilters({ ...filters, moveInDate: e.target.value })
          }
        />
      </div>
      <div className="filter">
        <Form.Label htmlFor="price">Price</Form.Label>
        <Form.Select
          id="price"
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        >
          <option value="any">Any</option>
          <option value="0 - 500">$0 - $500</option>
          <option value="500 - 1000">$500 - $1000</option>
          <option value="1000 - 1500">$1000 - $1500</option>
          <option value="1500 - 2000">$1500 - $2000</option>
          <option value="2000 - 2500">$2000 - $2500</option>
          <option value="2500 - 3000">$2500 - $3000</option>
          <option value="3000 - ">$3000 - </option>
        </Form.Select>
      </div>
      <div className="filter">
        <Form.Label htmlFor="type">Property Type</Form.Label>
        <Form.Select
          id="type"
          value={filters.propertyType}
          onChange={(e) =>
            setFilters({ ...filters, propertyType: e.target.value })
          }
        >
          <option value="any">Any</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Condo">Condo</option>
          <option value="Townhouse">Townhouse</option>
        </Form.Select>
      </div>
      <div className="search">
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  );
}

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
