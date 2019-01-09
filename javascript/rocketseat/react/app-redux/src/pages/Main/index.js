import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FavoriteActions from "../../store/actions/favorites";

import PropTypes from "prop-types";

class Main extends Component {
  static propTypes = {
    addFavorite: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string
      }).isRequired
    )
  };
  state = {
    repositoryInput: ""
  };

  handleAddRepository = event => {
    event.preventDefault();
    this.props.addFavorite();
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuario/value"
            value={this.state.repositoryInput}
            onChange={e =>
              this.setState({
                repositoryInput: e.target.value
              })
            }
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          {this.props.favorites.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong>({favorite.description})
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

//Reducers
const mapStateToProps = state => ({
  favorites: state.favorites
});

//Actions
const mapDispathToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Main);
