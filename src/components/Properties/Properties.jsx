import PropTypes from "prop-types";
import PropertyCard from "../PropertyCard/PropertyCard";
import "./Properties.scss";

export default function Properties({ properties }) {
  return (
    <div className="properties">
      {properties.length !== 0 ? (
        properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))
      ) : (
        <div className="noProperties">Sorry! No Properties Found</div>
      )}
    </div>
  );
}

Properties.propTypes = {
  properties: PropTypes.array.isRequired,
};
