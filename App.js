import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ListItem } from "react-native-elements";
import { SocialIcon } from "react-native-elements";

const list = [
  {
    name: "WeWork Seattle",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Pioneer Collective",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "James Cole",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "Peter Jones",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  }
];

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      {list.map((l, i) => (
        <ListItem
          key={i}
          leftAvatar={{ source: { uri: l.avatar_url } }}
          title={l.name}
          subtitle={l.subtitle}
          chevron
          bottomDivider
          onPress={() => navigation.navigate("Details")}
        />
      ))}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <SocialIcon type="twitter" />
      <SocialIcon type="facebook" />
      <SocialIcon type="instagram" />
    </View>
  );
}

function DetailsScreen(props) {
  return <View></View>;
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Remotelyy" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
