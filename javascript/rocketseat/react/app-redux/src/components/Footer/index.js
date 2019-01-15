import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

const Footer = ({ count }) => (
  <p>
    Voce tem
    {count}
    {' '}
favoritos
  </p>
);

// eslint-disable-next-line react/no-typos
Footer.Proptypes = {
  count: Proptypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.favorites.data.length,
});

export default connect(mapStateToProps)(Footer);
