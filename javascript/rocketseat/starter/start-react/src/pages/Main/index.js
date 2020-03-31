import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: []
    };
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("/products");
    const { docs } = response.data;
    this.setState({
      docs
    });
    console.log("documentos carregados", this.state.docs);
  };

  render() {
    const { docs } = this.state;
    return (
      <div className="product-list">
        {docs.map(document => (
          <article key={document._id}>
            <strong>{document.title}</strong>
            <p>{document.description}</p>
            <a>Acessar</a>
          </article>
        ))}
      </div>
    );
  }
}

export default Main;
