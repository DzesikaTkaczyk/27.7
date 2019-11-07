import React from 'react';
import '../css/App.css';
import CommentsListContainer from "../components/CommentsListContainer";
import DevTools from '../DevTools';

const App = () => {
  return (
    <div className='App'>
      <CommentsListContainer />
      <DevTools />
    </div>
  );
};

export default App;
