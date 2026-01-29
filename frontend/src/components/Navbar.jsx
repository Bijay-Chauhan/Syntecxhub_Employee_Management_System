import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <NavLink to="/" className="navbar-logo">
        <img
          src="https://i0.wp.com/salarybox.in/wp-content/uploads/2023/05/Employee-management.webp?fit=716%2C500&ssl=1"
          alt="Employee Management"
        />
      </NavLink>

      {/* Title */}
      <h2 className="navbar-title">Employee Management System</h2>

      {/* Action Button */}
      <NavLink to="/create" className="navbar-btn">
        Create Employee
      </NavLink>
    </nav>
  );
}
