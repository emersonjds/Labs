import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: {}
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/products/${id}`);
    this.setState({
      doc: response.data
    });
  }

  render() {
    const { doc } = this.state;

    return (
      <div className="doc-info">
        <h1>{doc.title}</h1>
        <p>{doc.description}</p>
        <p>
          url: <a href={doc.url}>{doc.url}</a>
        </p>
      </div>
    );
  }
}
