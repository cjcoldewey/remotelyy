import React, { Component } from "react";
import { View, Image } from "react-native";
import { Card, Header, Icon, Text, ListItem } from "react-native-elements";

class CoworkingList extends Component {
  render() {
    return (
      <View>
        <Header
          placement="left"
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Seattle", style: { color: "#fff" } }}
        />
        <ListItem
          leftAvatar={{
            title: name[0],
            source: { uri: avatar_url },
            showEditButton: true
          }}
          title={name}
          subtitle={role}
          chevron
        />
        ;
      </View>
    );
  }
}

export default CoworkingList;
