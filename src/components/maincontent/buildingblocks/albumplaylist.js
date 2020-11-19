import React, { useState, useEffect } from 'react';
import AlbumPlaylistHeader from './albumplaylistheader';
import '../../../styles/maincontent/buildingblocks/albumplaylist.css'

function AlbumPlaylistView(props) {
    
    const [albumPlaylistData, setAlbumPlaylistData] = useState(null);

    useEffect(() => {
        console.log('loading AlbumPlaylistView');
        console.log('Album or Playlist: ', props.albumOrPlaylist);
        if (props.albumOrPlaylist === 'playlist') {
            props.spotify
                .getPlaylist(props.albumPlaylistId)
                .then((playlistData) => {
                    setAlbumPlaylistData(playlistData);
                    console.log('AlbumPlaylistView Playlist Data: ', playlistData);
                })
        }
    }, []);

    return(
        <div className='album-playlist__wrapper'>
            <div className='album-playlist__header-wrapper'>
                Test
            </div>
            <div className='album-playlist__table-wrapper'>
                Test
            </div>
        </div>
    )
}

export default AlbumPlaylistView;