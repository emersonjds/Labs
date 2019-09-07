import React, { Component } from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';
import { connect } from 'react-redux';

class Cart extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const { cartData } = this.props;
    this.setState({
      data: cartData,
    });
  }

  render() {
    const { data } = this.state;
    console.tron.log(data);
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
            <tr>
              <td>
                <img
                  src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x"
                  alt="tenis"
                />
              </td>
              <td>
                <strong>Tenis</strong>
                <span>R$129,90</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={1} />
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
