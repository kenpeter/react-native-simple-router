// react
import React from "react";
// style
import { StyleSheet } from 'react-native';

// this is a huge router
import Router from '../../index';

// home page, twitter
import HomePage from './pages/HomePage';
// back button
import BackButton from './components/BackButton';
// twitter search and compose
import SearchAndCompose from './components/icons/SearchAndCompose';
// add people
import AddPeople from './components/icons/AddPeople';

// first route
const firstRoute = {
  // Home
  name: 'Home',
  // home page
  component: HomePage,
  // left corner, add people, left corner has toRoute method.
  leftCorner: AddPeople,
};

// header bg color
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec',
  },
});

// status bar color
const statusBarProps = {
  backgroundColor: '#1b6298',
};

// twitter app main
export default class TwitterApp extends React.Component {
  render() {
    // router
    // home page router, index
    // header style
    // back button
    // right corner, search
    // status,
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        backButtonComponent={BackButton}
        rightCorner={SearchAndCompose}
        statusBarProps={statusBarProps}
      />
    );
  }
}
