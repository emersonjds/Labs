import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      docsInfo: {},
      page: 1
    };
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);
    const { docs, ...docsInfo } = response.data;
    this.setState({
      docs,
      docsInfo,
      page
    });
    console.log("documentos carregados", this.state.docs);
  };

  prevButton = () => {
    const { page } = this.state;
    if (page === 1) return;
    const pageNumber = page - 1;
    this.loadProducts(pageNumber);
  };

  nextButton = () => {
    const { page, docsInfo } = this.state;
    if (page === docsInfo.pages) return;
    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };

  render() {
    const { docs, page, docsInfo } = this.state;
    return (
      <>
        <div className="product-list">
          {docs.map(document => (
            <article key={document._id}>
              <strong>{document.title}</strong>
              <p>{document.description}</p>
              <Link to={`/products/${document._id}`}>Acessar</Link>
            </article>
          ))}
          <div className="actions">
            <button disabled={page === 1} onClick={this.prevButton}>
              Anterior
            </button>
            <button disabled={page === docsInfo.page} onClick={this.nextButton}>
              Próximo
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
