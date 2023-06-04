import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../Components/Loading';

const MIN_LOGIN_LENGTH = 2;

export default class Login extends Component {
  state = {
    login: '',
    buttonDisabled: true,
    loading: false,
  };

  handleChangeLogin = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      const buttonIsDisabled = value.length <= MIN_LOGIN_LENGTH;

      this.setState({
        buttonDisabled: buttonIsDisabled,
      });
    });
  };

  clickOnButton = async () => {
    this.setState({ loading: true });

    const { login } = this.state;
    const { history } = this.props;

    await createUser({ name: login });
    history.push('./search');
  };

  render() {
    const { login, buttonDisabled, loading } = this.state;
    return (
      <main>
        <div data-testid="page-login">Login TrybeTunes</div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <form>
              <input
                data-testid="login-name-input"
                type="text"
                id="login"
                name="login" // identificando
                value={ login }
                onChange={ this.handleChangeLogin }
              />
            </form>
            <button
              data-testid="login-submit-button"
              type="submit"
              disabled={ buttonDisabled }
              onClick={ this.clickOnButton }
            >
              Entrar
            </button>
          </>
        )}
      </main>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    length: PropTypes.string.isRequired,
  }).isRequired,
};
