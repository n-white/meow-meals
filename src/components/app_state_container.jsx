import React from 'react';

class AppStateContainer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        appState: {
          isOnline: true,
          isAuthed: false
        }
      };
    }
  
    render() {
      return (
        <div>
          <h1>App State Container</h1>
          <p>Online: {this.state.appState.isOnline ? 'true' : 'false'}</p>
          <p>Authed: {this.state.appState.isAuthed ? 'true' : 'false'}</p>
        </div>
      );
    }
  }