import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks'

class App extends Component {
    addTrack() {
        console.log('addTrack', this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    findTrack(){
        console.log('findTrack', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value)
    }
  render() {
    return (
      <div>
          <div>
              <input type="text" ref={(input) => {this.trackInput = input}}/>
              <button onClick={this.addTrack.bind(this)}>Add Track</button>
          </div>
          <div>
              <input type="text" ref={(input) => {this.searchInput = input}}/>
              <button onClick={this.findTrack.bind(this)}>Find Track</button>
          </div>
          <div>
              <button onClick={this.props.onGetTracks}>Get Track</button>
          </div>
          <ul>
              {this.props.tracks.map((track,index) =>
              <li key={index}>{track.name}</li>)}
          </ul>
      </div>
    );
  }
}

export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({ type: 'ADD_TRACK', payload })
        },
        onFindTrack: (name) => {
            console.log('name', name);
            dispatch({ type: 'FIND_TRACK', payload: name})
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);
