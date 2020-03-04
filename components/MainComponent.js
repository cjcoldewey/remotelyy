import React, { Component } from "react";
import { View, Image } from "react-native";
import { Card, Header, Icon, Text, ListItem } from "react-native-elements";

class Main extends Component {
  render() {
    return (
      <View>
        <Header
          placement="left"
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Remotelyy", style: { color: "#fff" } }}
        />
        <Text h1>City</Text>
        <Card title="Seattle">
          <Text>Hello World</Text>
        </Card>
        <Card title="Seattle">
          <Text>Hello World</Text>
        </Card>
        <Card title="Seattle">
          <Text>Hello World</Text>
        </Card>
        <Card title="Seattle">
          <Text>Hello World</Text>
        </Card>
        <Icon
          raised
          reverse
          name="plus"
          type="font-awesome"
          color="#f50"
          onPress={() => console.log("hello")}
        />
      </View>
    );
  }
}

export default Main;
