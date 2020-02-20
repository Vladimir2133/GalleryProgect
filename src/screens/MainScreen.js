import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  FlatList,
  StyleSheet
} from "react-native";

const url =
  "https://api.unsplash.com/photos?query=cars&client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043&page=";

export default class MainScreen extends Component {
  state = {
    data: [],
    page: 1
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await fetch(url + this.state.page);
    const result = await response.json();
    this.setState({
      data: this.state.data.concat(result)
    });
  };

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1 }, this.getData);
  };

  render() {
    const data = this.state.data;
    return (
      <View style={styles.container} >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate("Photo", {
                  image: item.urls.regular
                })
              }
            >
              <View style={styles.photoCard}>
                <Image
                  source={{ uri: item.urls.small }}
                  style={styles.photo}
                />
                <Text style={styles.text}>{item.user.name}</Text>
              </View>
            </TouchableHighlight>
          )}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={1}
          removeClippedSubviews={true}
          keyExtractor={item => item.index}
        />
      </View>
    );
  }
}

MainScreen.navigationOptions = {
  headerTitle: "Gallery",
    headerStyle: {
        backgroundColor: '#020000'
    },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212120"
  },
  photoCard: {
    flex: 1,
    margin: 10,
    paddingBottom: 15,
    shadowColor: "#fff",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 8,
    backgroundColor: "#575957",
    borderRadius: 10,
    alignItems: "center"
  },
    photo:{
        width: '100%',
        height: 200
    },
  text: {
    fontSize: 18,
    paddingTop: 5,
    color: '#fff'
  }
});
