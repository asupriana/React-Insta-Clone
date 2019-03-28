import React from 'react';
	import './App.css';
	import Login from './Components/Login/Login';
	import Post from './Components/PostContainer/Post';
	import Authenticate from './Components/Authentication/Authenticate';
	
	
	class App extends React.Component {
	  constructor () {
	    super();
	    this.state = {};
	  }
	
	  render() {
	    return (
	      <div className="App">
	        <ComponentFromAuthenticate />
	      </div>
	    );
	  }
	}
	
	const ComponentFromAuthenticate = Authenticate(Post)(Login);
	
	export default App;