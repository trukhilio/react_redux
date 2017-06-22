var mockAPiData = [
    {
        id: 1,
        name: 'Enter Sandman'
    },
    {
        id: 2,
        name: 'Konan is the best'
    },
    {
        id: 3,
        name: 'Chunga-changa'
    },
    {
        id: 4,
        name: 'Roma for dois'
    },
    {
        id: 5,
        name: 'The gods made heavy metal'
    },

];

export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('I got tracks');
        dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockAPiData })
    }, 2000)
};