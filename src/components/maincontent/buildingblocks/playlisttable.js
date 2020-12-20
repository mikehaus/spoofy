import React from 'react';
import React from 'react';
import '../../../styles/maincontent/buildingblocks/albumplaylist.css';

function playlistTableRows(props) {
    
    // Props to go in in playlistData
    const tracks = props.tracks.items;
    const rowItems = tracks.map((item, key) => 
        <tr key={key}>
            <td />
            <td>{item.track.name}</td>
            <td>{item.track.artists[0].name}</td>
            <td>{item.track.album.name}</td>
        </tr>
    );

    return (
        <div>
            <tbody>
                {rowItems}
            </tbody>
        </div>
    );
}

function PlaylistTable(props) {
    return (
        <div className='a-p__song-table--main'>
            <tr>
                <th />
                <th>TITLE</th>
                <th>ARTIST</th>
                <th>ALBUM</th>
            </tr>
        </div>
    );
}

export default PlaylistTable;