// react and type
import React, {PropTypes} from "react";
// touch highlight
// image
// style
import { TouchableHighlight, Image, StyleSheet } from 'react-native';

// it gets a func
const propTypes = {
  goToSearch: PropTypes.func.isRequired,
};

// it is a search icon
class SearchIcon extends React.Component {
  // constructor
  constructor(props) {
    // super and put some props into it
    super(props);

    // why do we create a prop here?
    // style here.
    // small search button
    this.styles = StyleSheet.create({
      icon: {
        width: 21,
        height: 21,
        marginTop: 4,
        marginRight: 15,
      },
    });

    // someone pass a search here
    // bind this key word
    this.goToSearch = this.goToSearch.bind(this);
  }

  // go to search
  // call this.whatever.passdown.
  goToSearch() {
    this.props.goToSearch();
  }

  // render
  // touch then go
  render() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToSearch}>
        <Image source={require('../../images/search_icon.png')} style={this.styles.icon} />
      </TouchableHighlight>
    );
  }
}

SearchIcon.propTypes = propTypes;

export default SearchIcon;
