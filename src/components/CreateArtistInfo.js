// artwork,song,dateofrelease,artists,rating
import React from 'react';


function CreatArtist(props) {
    
    return (
        <div>
            <input placeholder='Name of the artist' onChange={props.artistName}></input>
            <input onChange={props.song} placeholder='song'></input>
            <input onChange={props.releaseDate} placeholder='date of release'></input>
            <button onClick={props.btnHandler} type="button" class="btn btn-secondary mx-1">submit</button>

        </div>
    );
}

export default CreatArtist;



