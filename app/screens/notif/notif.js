import React, { Component } from "react";
import { View } from "react-native";
import FormNotif from "./formNotif";
import { styles } from "../styles";
import { groupArrays } from "../../components/globalFunction/groupingArrayByDate";
class notif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          DateTime: "2019-11-22T00:00:00",
          Title: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        },
        {
          DateTime: "2019-11-22T00:00:00",
          Title: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        },
        {
          DateTime: "2019-11-22T00:00:00",
          Title: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        },
        {
          DateTime: "2019-11-23T00:00:00",
          Title: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        },
        {
          DateTime: "2019-11-23T00:00:00",
          Title: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        },
        {
          DateTime: "2019-11-24T00:00:00",
          Title: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        }
      ]
    };
  }
  render() {
    const { data } = this.state;
    const listOfNotif = groupArrays;
    return (
      <View style={styles.containerWhite}>
        <FormNotif data={this.state.data} listOfNotif={listOfNotif} />
      </View>
    );
  }
}

export default notif;
