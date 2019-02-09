import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./styles/app.scss";

import Header from "./components/Header";
import PostBox from "./components/PostBox";

class App extends Component {
  dataPosts = [
    {
      id: 1,
      avatarImg: "https://avatarfiles.alphacoders.com/693/thumb-69307.png",
      nome: "Emersn Silva",
      post_time: "há 2 minutos atras",
      text_content:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 2,
      avatarImg: "https://avatarfiles.alphacoders.com/693/thumb-69307.png",
      nome: "Jairo Iglesias",
      post_time: "há 2 minutos atras",
      text_content:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 3,
      avatarImg: "https://avatarfiles.alphacoders.com/693/thumb-69307.png",
      nome: "Matheus Catossi",
      post_time: "há 2 minutos atras",
      text_content:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <PostBox post={this.dataPosts} />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
