import React, { Component } from 'react';
	import './components/Authentication/Authenticate'
	import PostsPage from './components/PostContainer/Post'
	import './App.css';
	import dummyData from './dummyData';
	import Authenticate from './components/Authentication/Authenticate';
	class App extends Component {
	  constructor(props) {
	    super(props)
	    this.state = {
	      posts: [],
	      displayedPosts: [],
	      searchValue: ''
	    }
	  }
	  componentDidMount = () => {
	    this.setState({
	        posts: dummyData,
	        displayedPosts: dummyData
	    })
	  }
	  searchPosts = event => {
	    const { name, value } = event.target
	    this.setState({
	      [name]: value
	    })
	    if (value.length > 0) {
	      const displayedPostArray = this.state.posts.filter(post => {
	        if (post.username.toLowerCase().includes(value.toLowerCase())) {
	          return true;
	        }
	      })
	      this.setState({
	        displayedPosts: displayedPostArray
	      })
	    } 
	    else {
	      this.setState({
	        displayedPosts: this.state.posts
	      })
	    }
	  }
	  render() {
	    return (
	      <PostsPage
	      logout={this.props.logout}
	      searchValue={this.state.searchValue}
	      searchPosts={this.searchPosts}
	      displayedPosts={this.state.displayedPosts}
	      userProfile={localStorage.getItem('username')}
	      />
	    );
	  }
	}
	
	export default Authenticate(App);