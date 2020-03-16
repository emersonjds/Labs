import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import Message from "./components/Message";
import Time from "./components/Time";
import Counter from "./components/Counter";

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
      </div>
    );
  }
}

export default App;
