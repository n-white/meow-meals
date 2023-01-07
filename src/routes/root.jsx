import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

export default class Root extends React.Component {

  onClickRenderHealthCheck() {
    console.log('onClickRenderHealthCheck');
    axios.get('http://localhost:3000/healthcheck').then(
      (response) => {
        console.log('response', response);
        const detail = document.getElementById('detail');
        detail.innerHTML = response.data;
      }
    )
  }

  render() {
    return (
      <>
        <button onClick={this.onClickRenderHealthCheck}>Render Health Check</button>
        <div id="sidebar">
          <h1>This is the Root component</h1>
          <nav>
            <ul>
              <li>
                <Link to="login">login</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }
}