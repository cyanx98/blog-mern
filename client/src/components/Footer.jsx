import React from "react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  "Agriculture",
  "Business",
  "Education",
  "Entertainment",
  "Art",
  "Investment",
  "Uncategorized",
  "Weather",
];

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        {CATEGORIES.map((category) => (
          <li key={category}>
            <Link to={`/posts/categories/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>

      <div className="footer__copyright">
        <small>All Right Reserved &copy; Copyright, Cyandev</small>
      </div>
    </footer>
  );
};

export default Footer;
