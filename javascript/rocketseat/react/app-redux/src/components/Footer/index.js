import React from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";

const Footer = ({ count }) => <p>Voce tem {count} favoritos</p>;

Footer.Proptypes = {
  count: Proptypes.number.isRequired
};

const mapStateToProps = state => ({
  count: state.favorites.length
});

export default connect(mapStateToProps)(Footer);
