import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// --------- COMPONENTS -------------- //
import VideoConsole from './pages/videoConsole/VideoConsole.page';
import Search from './components/search/Search.component';

// ---------- API ------------ //
import youtube from './api/youtube';

// ------------ STYLES ---------- //
import './App.css';
class App extends React.Component {

  state = {
    videos: [],
  };

  onTermSubmit = async (term) => {
    const result = await youtube.get('/search', {
      params: {
        q: term,
      }
    })

    this.setState({ videos: result.data.items })
  }
  render() {
    return (

      <div className="App" >
        <h1>Youtube</h1>
        <Search onFormSubmit={this.onTermSubmit} />
        <VideoConsole videos={this.state.videos} />


      </div >
    );
  }

}

export default App;
