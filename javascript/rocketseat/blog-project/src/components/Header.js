import React from "react";
import { PropTypes } from "prop-types";

const Header = () => {
  return (
    <div className="header">
      <h1> Blog Posts</h1>
    </div>
  );
};

Header.defaultProps = {
  children: "Blog Posts"
};

Header.propTypes = {
  children: PropTypes.string
};

export default Header;
