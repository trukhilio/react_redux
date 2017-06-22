const initialState = [
    {
        id: 1234,
        name: 'Hands up! Yo!'
    }
];

export default function playList (state = initialState, action){
    if (action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
        return action.payload;
    }
    return state;
}