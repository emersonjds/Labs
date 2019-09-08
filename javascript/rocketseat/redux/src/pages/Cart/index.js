import React, { Component } from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';
import { connect } from 'react-redux';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const { cartData } = this.props;
    this.setState({
      data: cartData,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTDE</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {data.map(product => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button type="button">
                      <MdRemoveCircleOutline size={20} color="#7159c1" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button">
                      <MdAddCircleOutline size={20} color="#7159c1" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R$ 258,80</strong>
                </td>
                <td>
                  <button type="button">
                    <MdDelete size="20" ccolor="#7159c1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
        <footer>
          <button type="button">Finalizar Pedido</button>
          <Total>
            <span>TOTAL</span>
            <strong>R$ 129,90</strong>
          </Total>
        </footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cartData: state.cart,
});

export default connect(mapStateToProps)(Cart);
