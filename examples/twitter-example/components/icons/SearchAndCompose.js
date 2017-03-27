// react and prop type
import React, {PropTypes} from "react";
// style sheet
// and view
import { StyleSheet, View } from 'react-native';

// search, what is search, just a icon, with toRoute method
import SearchIcon from './Search';
// just a image button
import ComposeIcon from './Compose';
// 
import SearchPage from '../../pages/SearchPage';
import SearchBar from './SearchBar';

const propTypes = {
  toRoute: PropTypes.func.isRequired,
};

class SearchAndCompose extends React.Component {
  constructor(props) {
    super(props);

    this.styles = StyleSheet.create({
      iconContainer: {
        flexDirection: 'row',
      },
      icon: {
        width: 21,
        height: 21,
        marginTop: 4,
        marginRight: 15,
      },
      input: {
        backgroundColor: '#3f88bf',
        width: 220,
        height: 32,
        marginTop: 6,
        paddingLeft: 10,
        color: 'white',
        borderRadius: 4,
      },
    });

    this.goToSearch = this.goToSearch.bind(this);
  }

  // go to search
  // wrap this.props.toRoute
  // pass this to component. that is why call bubble????
  // we can pass the toRoute deep down, but this requires parent child relationship
  goToSearch() {
    this.props.toRoute({
      name: 'Search',
      component: SearchPage,
      rightCorner: ComposeIcon,
      titleComponent: SearchBar,
    });
  }

  render() {
    return (
      <View style={this.styles.iconContainer}>
        <SearchIcon goToSearch={this.goToSearch} />
        <ComposeIcon />
      </View>
    );
  }
}

SearchAndCompose.propTypes = propTypes;

export default SearchAndCompose;
