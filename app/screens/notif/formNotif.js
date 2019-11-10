import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';
import PropTypes from 'prop-types';
import moment from 'moment';
const formNotif = props => {
  return (
    <React.Fragment>
      {/* {props.data ? (
        props.data.map((temp, i) => {
          return (
            <View key={i}>
              <View style={styles.cardNotif}>
                <Text style={styles.text18}>
                  {moment(temp.DateTime).format("DD MMM YYYY")}
                </Text>
              </View>
              <View style={styles.textNotif}>
                <Text style={styles.texttextAlignVertical}>
                  {temp.Title.length < 44
                    ? temp.Title
                    : temp.Title.slice(0, 44)}
                  {temp.Title.length < 44 ? temp.Title : "..."}
                </Text>
              </View>
            </View>
          );
        })
      ) : (
        <View style={styles.cardNotif}>
          <Text>Not Found</Text>
        </View>
      )} */}
      {props.listOfNotif ? (
        props.listOfNotif.map((temp, i) => {
          return (
            <View key={i}>
              <View style={styles.cardNotif}>
                <Text style={[styles.text18]}>
                  {moment(temp.date).format('DD MMM YYYY')}
                </Text>
              </View>
              {temp.item.map(data => (
                <View style={styles.textNotif}>
                  <Text style={styles.texttextAlignVertical}>
                    {data.Title.length < 50
                      ? data.Title
                      : data.Title.slice(0, 50)}
                    {data.Title.length < 50 ? data.Title : '...'}
                  </Text>
                </View>
              ))}
            </View>
          );
        })
      ) : (
        <View style={styles.cardNotif}>
          <Text>Not Found</Text>
        </View>
      )}
    </React.Fragment>
  );
};

formNotif.propTypes = {
  data: PropTypes.array,
};

{
  /* <View style={[styles.containerForm, styles.padding20]} key={i}>
              <View style={styles.cardNotif}>
                <Text style={styles.text18}>{temp.DateTime}</Text>
              </View>
              <View style={styles.textNotif}>
                <Text style={styles.texttextAlignVertical}>
                  {temp.Title.length < 44
                    ? temp.Title
                    : temp.Title.slice(0, 44)}
                  {temp.Title.length < 44 ? temp.Title : "..."}
                </Text>
              </View>
            </View> */
}

export default formNotif;
