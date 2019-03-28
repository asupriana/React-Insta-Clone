import React from 'react';
	import dummyData from '../dummyData';
	import SearchBar from '../SearchBar/SearchBar';
	import PostContainer from '../PostContainer/PostContainer';
	import { Button } from 'reactstrap';
	
	class Post extends React.Component {
	  constructor () {
	    super();
	    this.state = {
	      dummyData: [],
	      searchData: []
	    };
	  }
	
	componentDidMount() {
	  this.setState({
	    dummyData: dummyData
	  })
	}
	
	searchBarHandler = event => {
	  const posts = this.state.dummyData.filter( post => {
	    if (post.username.includes(event.target.value)) {
	      return post;
	    }
	  });
	  this.setState({ searchData: posts });
	};
	
	logOut = e => {
	  e.preventDefault();
	  const user = this.state.username;
	  localStorage.removeItem('user', user);
	  window.location.reload();
	}
	
	  render() {
	    return (
	      <div className="App">
	        <SearchBar searchPosts={this.searchBarHandler}/>
	        <PostContainer post={
	          this.state.searchData.length > 0 ?
	          this.state.searchData :
	          this.state.dummyData} />
	        <Button type="submit" onClick={this.logOut}>Logout</Button>
	      </div>
	    );
	  }
	}
	
	export default Post; 