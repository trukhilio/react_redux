import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

const initialState = [
    'Smells like teen spirit',
    'Am I Evil'
];

function playList (state = initialState, action){
    if (action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(playList);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// registerServiceWorker();

// import { createStore } from 'redux';
//
// function playList (state = [], action){
//     if (action.type === 'ADD_TRACK'){
//         return [
//             ...state,
//             action.payload
//         ];
//     }
//     return state;
// }
//
// const store = createStore(playList);
//
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];
//
// store.subscribe(() => {
//     list.innerHTML = '';
//     trackInput.value = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     });
// });
//
// addTrackBtn.addEventListener('click', () => {
//     const trackName = trackInput.value;
//     store.dispatch({ type: 'ADD_TRACK', payload: trackName});
// });