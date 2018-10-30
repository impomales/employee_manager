import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection, Card, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  render() {
    console.log(this.props.email);
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.props.emailChanged}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="password"
            placeholder="pass"
            onChangeText={this.props.passwordChanged}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  email: state.login.email,
  password: state.login.password
});

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
