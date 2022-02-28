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

  onTermSubmit = async (term) => {
    const result = await youtube.get('/search', {
      params: {
        q: term,
      }
    })

    console.log(result.data.items);
  }
  render() {
    return (

      <div className="App" >
        <h1> App</h1>
        <Search onFormSubmit={this.onTermSubmit} />
        <VideoConsole />


      </div >
    );
  }

}

export default App;
