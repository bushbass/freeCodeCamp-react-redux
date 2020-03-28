import React from 'react';
import './styles.css';
import DisplayMessages from './components/DisplayMessages';

export default function App() {
  return (
    <div className='App'>
      <div>
        <p>This is the DisplayMessages component by itself</p>
        <DisplayMessages />
      </div>
    </div>
  );
}
