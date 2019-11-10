import React, {Component} from 'react';
import FormDeals from './formDeals';
import PropTypes from 'prop-types';
import {Alert} from 'react-native';

class DealPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};
  handleDetail = () => {
    this.props.navigation.navigate('DetailPage');
  };

  render() {
    return <FormDeals handleDetail={this.handleDetail} />;
  }
}

export default DealPage;
