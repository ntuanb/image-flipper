import React from 'react';
import './App.scss';
import ImageFlipper from './Components/ImageFlipper';

function App() {
  return (
    <div className="app">
      <h1 class="title">Image Flipper</h1>
      <p class="description">Please upload an image and use the arrow keys to flip the image</p>
      
      <ImageFlipper />
    </div>
  );
}

export default App;
