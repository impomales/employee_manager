import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderItem({ item }) {
    return <ListItem employee={item} />;
  }

  render() {
    const { employees } = this.props;
    return (
      <FlatList
        data={employees}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
