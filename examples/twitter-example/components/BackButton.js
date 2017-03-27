// react
import React from "react";
// style and image
import { StyleSheet, Image } from 'react-native';

// back button
export default class BackButton extends React.Component {
  render() {
    // just an image
    return (
      <Image source={require('../images/back_button.png')} style={styles.backButton} />
    );
  }
}

// quite small
const styles = StyleSheet.create({
  backButton: {
    width: 10,
    height: 17,
    marginLeft: 10,
    marginTop: 3,
    marginRight: 10,
    },
});
