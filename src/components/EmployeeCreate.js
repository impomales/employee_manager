import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const EmployeeCreate = props => {
  const { name, phone, shift } = props;
  return (
    <Card>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          value={name}
          onChangeText={value => props.employeeUpdate({ prop: 'name', value })}
        />
      </CardSection>
      <CardSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
          value={phone}
          onChangeText={value => props.employeeUpdate({ prop: 'phone', value })}
        />
      </CardSection>

      <CardSection style={{ flexDirection: 'column' }}>
        <Text style={styles.pickerTextStyle}>Shift</Text>
        <Picker
          selectedValue={shift}
          onValueChange={value =>
            props.employeeUpdate({ prop: 'shift', value })
          }
        >
          {DAYS_OF_WEEK.map(day => (
            <Picker.Item key={day} label={day} value={day} />
          ))}
        </Picker>
      </CardSection>

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
