import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import logo from '../../assets/img/logo.svg';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { cart } = this.props;
    return (
      <Container>
        <Link to="/">
          <img src={logo} alt="Shoes" />
        </Link>
        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>{cart.length} Itens</span>
          </div>
          <MdShoppingBasket size={36} color="FFF" />
        </Cart>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
