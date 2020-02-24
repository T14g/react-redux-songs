import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

    renderList() {

        //Class component have props inbuild, cool
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                        onClick={() => this.props.selectSong(song)}//calling the  function passed via props
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }
    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

//Will read data from state and pass it to props
const mapStateToProps = (state) =>{
    return { songs: state.songs };
}

//1st () returns a function
//2nd () invokes the function that got retorned
//3rd you config connect by passing a function
//4th passando um objeto com key SelectSong que será passado como uma prop a songList
//5h By passing action creator to connect function the connect automactly take the action got return and call dispatch for us
export default connect(mapStateToProps, {
    selectSong: selectSong
}) (SongList);