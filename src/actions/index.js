// OBS: payload não é obrigatório 
// Action creator that returns an action 
//Named exports colocando export na frente , e precisa importar com { }

export const selectSong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song

    };
};