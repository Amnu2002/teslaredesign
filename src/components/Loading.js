import React from 'react'
import './Loading.css'
import Loader from './images/153 CSS Loaders.gif';

setTimeout(() => {
  document.getElementById('loading-img').style.display="none";
}, 10500);

setTimeout(() => {
  document.getElementById('App').style.display="block";
}, 9000);

const Loading = () => {
  return (
    <div>
        <img src="https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-7.gif" alt="Loading" id ="loading-img" />
    </div>
  )
}

export default Loading