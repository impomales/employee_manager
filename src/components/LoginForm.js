import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection, Card, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.props.onEmailChanged}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="password"
            placeholder="pass"
            onChangeText={this.props.onPasswordChanged}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { email, password } = state.login;
  return { email, password };
};

const mapDispatchToProps = dispatch => ({
  emailChanged: text => {
    dispatch(emailChanged(text));
  },
  passwordChanged: text => {
    dispatch(passwordChanged(text));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
