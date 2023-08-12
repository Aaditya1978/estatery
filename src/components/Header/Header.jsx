import { Form, FloatingLabel } from "react-bootstrap";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="heading">Search Properties to rent</div>
      <div className="search">
        <FloatingLabel label="Search with search bar">
          <Form.Control type="text" placeholder="Search with search bar" />
        </FloatingLabel>
      </div>
    </div>
  );
}
