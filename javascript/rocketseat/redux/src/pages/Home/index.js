import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddToCart = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product
    });
  };

  render() {
    const { products } = this.state;
    return (
      <>
        <ProductList>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
              <button type="button" onClick={() => this.handleAddToCart(product)}>
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" />
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          ))}
        </ProductList>
      </>
    );
  }
}

export default connect()(Home);
