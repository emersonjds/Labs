import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as FavoriteActions from '../../store/actions/favorites';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  state = {
    repositoryInput: '',
  };

  handleAddRepository = (event) => {
    event.preventDefault();
    this.props.addFavoriteRequest(this.state.repositoryInput);
    this.setState({
      repositoryInput: '',
    });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuario/value"
            // eslint-disable-next-line react/destructuring-assignment
            value={this.state.repositoryInput}
            onChange={e => this.setState({
              repositoryInput: e.target.value,
            })
            }
          />
          <button type="submit">Adicionar</button>
          {this.props.favorites.loading && <span>Carregando...</span>}
          {
            // eslint-disable-next-line react/destructuring-assignment
            !!this.props.favorites.error && <span style={{ color: '#F00' }}>{this.props.favorites.error}</span>
          }
        </form>

        <ul>
          {this.props.favorites.data.map(favorite => (
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
