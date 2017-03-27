// react
import React from "react";
// style, text, view
import { StyleSheet, Text, View } from 'react-native';

// search page is style + text
export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Text>Search page</Text>
      </View>
    );
  }
}
