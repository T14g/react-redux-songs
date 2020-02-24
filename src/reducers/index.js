import { combineReducers } from 'redux';

const songsReducers = () => {
    return [
        {title: 'Is this love', duration : '4:05'},
        {title: 'Ace of spades', duration : '5:01'},
        {title: 'Master of puppets', duration : '6:05'},
        {title: 'Dance Macabre', duration : '9:05'}
    ]
};

const selectedSongReeducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReeducer
})