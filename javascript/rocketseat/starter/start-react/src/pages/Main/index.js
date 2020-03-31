import React, { Component } from "react";
import api from "../../services/api";

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
      <>
        {docs.map(data => (
          <div key={data.id}>
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.url}</p>
          </div>
        ))}
      </>
    );
  }
}

export default Main;
