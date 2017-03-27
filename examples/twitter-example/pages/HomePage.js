// react
import React, {PropTypes} from "react";
// style sheet and scroll view
import { StyleSheet, ScrollView } from 'react-native';

// tweet component
import Tweet from '../components/Tweet';
// what is tweet big??????????
import TweetPage from '../components/TweetBig';

// pass to route
const propTypes = {
  toRoute: PropTypes.func.isRequired,
};

class HomePage extends React.Component {
  // constructor
  constructor(props) {
    // super
    super(props);
    // flex style
    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#f5f8fa',
      },
    });

    // state
    // sample tweets
    this.state = {
      tweets: [
        {
          key: 1,
          text: 'The React Native Router is awesome!',
          user: {
            name: 'Tristan Edwards',
            username: 't4t5',
            avatar: 'https://pbs.twimg.com/profile_images/497658257276538880/KrPEaVDu_400x400.jpeg',
          },
        },
        {
          key: 2,
          text: 'Hello world!',
          user: {
            name: 'Leonard Pauli',
            username: 'LeonardPauli',
            avatar: 'https://pbs.twimg.com/profile_images/436581173871927296/txEzObgk_400x400.jpeg',
          },
        },
      ],
    };

    //
    this.goToTweet = this.goToTweet.bind(this);
  }

  // Go to somewhere
  goToTweet(tweetData) {
    // to route,
    // name of route
    // component
    // with data
    this.props.toRoute({
      name: 'Tweet',
      component: TweetPage,
      data: tweetData,
    });
  }

  // render
  // const var tweets
  // this state has tweets
  // map each
  // Tweet is a component
  // we pass down the data
  // one press, go to individual tweet
  // what is this.goToRoute
  // we pass down the goToTweet (with name, comp and data)
  render() {
    const Tweets = this.state.tweets.map((tweetData) => {
      return <Tweet {...tweetData} onPress={this.goToRoute} goToTweet={this.goToTweet} />;
    });

    return (
      <ScrollView style={this.styles.container}>
        {Tweets}
      </ScrollView>
    );
  }
}

HomePage.propTypes = propTypes;

export default HomePage;
