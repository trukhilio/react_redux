const initialState = [
    'Smells like teen spirit',
    'Am I Evil'
];

export default function playList (state = initialState, action){
    if (action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'DELETE_TRACK') {
        return state;
    }
    return state;
}