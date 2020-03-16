import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

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
        Hello {firstName} {lastName} !
      </div>
    );
  }
}

export default App;
