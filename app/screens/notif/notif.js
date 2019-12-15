import React, {Component} from 'react';
import {View} from 'react-native';
import FormNotif from './formNotif';
import {styles} from '../styles';
import PropTypes from 'prop-types';
import {groupArrays} from '../../components/globalFunction/groupingArrayByDate';
import {getNotificationsById} from '../../action/notificationAction/notificationAction';
class notif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          DateTime: '2019-11-22T00:00:00',
          Title: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        },
        {
          DateTime: '2019-11-22T00:00:00',
          Title: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        },
        {
          DateTime: '2019-11-22T00:00:00',
          Title: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        },
        {
          DateTime: '2019-11-23T00:00:00',
          Title: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        },
        {
          DateTime: '2019-11-23T00:00:00',
          Title: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        },
        {
          DateTime: '2019-11-24T00:00:00',
          Title: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        },
      ],
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
  };

  // componentDidMount() {
  //   this.props.dispatch(getNotificationsById(2));
  // }
  render() {
    const {data} = this.state;
    const listOfNotif = groupArrays;
    console.log(data);
    return (
      <View style={styles.containerWhite}>
        <FormNotif data={data} listOfNotif={listOfNotif} />
      </View>
    );
  }
}

export default notif;
