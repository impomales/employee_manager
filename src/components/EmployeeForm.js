import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

class EmployeeForm extends Component {
  render() {
    const { name, shift, phone } = this.props;
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'name', value })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'phone', value })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: 'shift', value })
            }
          >
            {DAYS_OF_WEEK.map(day => (
              <Picker.Item key={day} label={day} value={day} />
            ))}
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, shift, phone } = state.employeeForm;

  return { name, shift, phone };
};
const mapDispatchtoProps = { employeeUpdate };

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(EmployeeForm);
