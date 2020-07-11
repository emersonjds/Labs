import React, { Component } from "react";

// export default function Header(props) {
//   return <header>{props.data}</header>;
// }

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return <h1>{data}</h1>;
  }
}
