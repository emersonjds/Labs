import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import Message from "./components/Message";
import Time from "./components/Time";
import Counter from "./components/Counter";
import Cronometer from "./components/Cronometer";
import BindCounter from "./components/BindCounter";
import ReactRefs from "./components/ReactRefs";
import Forms from "./components/Forms";
import DynamicForm from "./components/DynamicForm";

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
        <Forms
          getErrorMessage={value => {
            if (value.length < 3) {
              return `the field accepts in minimum 3 characters`;
            }
            if (!value.includes("s")) {
              return `Values do not include 's' but it should necessary`;
            }
            return null;
          }}
        />
        <br />
        <DynamicForm />
      </div>
    );
  }
}

export default App;
