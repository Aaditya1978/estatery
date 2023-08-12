import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { BiBed, BiBath, BiArea, BiHeart } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import "./PropertyCard.scss";

export default function PropertyCard({ property }){
    return (
        <Card className="propertyCard">
            <Card.Img className="card-img" variant="top" src={property.image} />
            <Card.Body className="body">
                { property.popular &&
                <div className="popular"><BsStars className="icon" /> Popular</div>
                }
                <div className="like">
                    <BiHeart className="icon" />
                </div> 
                <div className="price">${property.price}<span>/month</span></div>
                <div className="name">{property.name}</div>
                <div className="address">{property.location}</div>
                <div className="infos">
                    <div className="info"><BiBed className="icon" /> {property.no_of_beds} Beds</div>
                    <div className="info"><BiBath className="icon" /> {property.no_of_baths} Bathrooms</div>
                    <div className="info"><BiArea className="icon" /> {property.area} sqft</div>
                </div>
            </Card.Body>
        </Card>
    );
}

PropertyCard.propTypes = {
    property: PropTypes.object.isRequired,
};