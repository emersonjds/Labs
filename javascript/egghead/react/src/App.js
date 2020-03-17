import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import Message from "./components/Message";
import Time from "./components/Time";
import Counter from "./components/Counter";
import Cronometer from "./components/Cronometer";
import BindCounter from "./components/BindCounter";
import ReactRefs from "./components/ReactRefs";

// App.propTypes = {
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired
// };

// export default function App(props) {
//   return (
//     <div className="App">
//       Hello {props.firstName} {props.lastName} !
//     </div>
//   );
// }

class App extends React.Component {
  static proptTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  };

  render() {
    const { firstName, lastName } = this.props;
    return (
      <div className="App">
        <Message msg={null} />
        <Time />
        <Counter username="Emerson" />
        Hello {firstName} {lastName} !
        <br />
        <Cronometer />
        <br />
        <BindCounter />
        <br />
        <ReactRefs children="Hello There" className="totally-centered" />
      </div>
    );
  }
}

export default App;
