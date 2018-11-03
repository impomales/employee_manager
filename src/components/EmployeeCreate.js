import React from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

const EmployeeCreate = props => {
  const { name, phone } = props;
  return (
    <Card>
      <CardSection>
        <Input
          label="name"
          placeholder="Jane"
          value={name}
          onChangeText={value =>
            props.employeeUpdate({ prop: 'name', value })
          }
        />
      </CardSection>
      <CardSection>
        <Input
          label="phone"
          placeholder="555-555-5555"
          value={phone}
          onChangeText={value =>
            props.employeeUpdate({ prop: 'phone', value })
          }
        />
      </CardSection>
      <CardSection />

      <CardSection>
        <Button>Create</Button>
      </CardSection>
    </Card>
  );
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

const mapDispatchToProps = { employeeUpdate };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeCreate);
