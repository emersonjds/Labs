import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import logo from '../../assets/img/logo.svg';
import { MdShoppingBasket } from 'react-icons/md';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Shoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 Itens</span>
        </div>
        <MdShoppingBasket size={36} color="FFF" />
      </Cart>
    </Container>
  );
}
