import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Root() {
    return (
      <>
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