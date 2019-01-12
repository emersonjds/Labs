import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as FavoriteActions from '../../store/actions/favorites';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      }).isRequired,
    ),
  };

  state = {
    repositoryInput: '',
  };

  handleAddRepository = (event) => {
    const { repositoryInput, addFavoriteRequest } = this.state;
    event.preventDefault();
    addFavoriteRequest(repositoryInput);
  };

  render() {
    const { favorites, repositoryInput } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuario/value"
            // eslint-disable-next-line react/destructuring-assignment
            value={repositoryInput}
            onChange={e => this.setState({
              repositoryInput: e.target.value,
            })
            }
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          {favorites.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong>
(
                {favorite.description}
)
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

// Reducers
const mapStateToProps = state => ({
  favorites: state.favorites,
});

// Actions
const mapDispathToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(Main);
