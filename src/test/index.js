import React, { Component } from 'react';
import ReactBodymovin from 'react-bodymovin'
import animation from './wifi_connect.json'

class index extends Component {
  render() {
    const bodymovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: animation
      }
    return (
        <div>
            <ReactBodymovin options={bodymovinOptions} />
        </div>
    );
  }
}

/*
const App = () => {
    const bodymovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: animation
    }
   
    return (
      <div>
        <ReactBodymovin options={bodymovinOptions} />
      </div>
    )
*/

export default index;
