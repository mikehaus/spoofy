import React, { useState, useEffect } from 'react';
import AlbumPlaylistHeader from './albumplaylistheader';
import '../../../styles/maincontent/buildingblocks/albumplaylist.css'

function AlbumPlaylistView(props) {
    
    const [albumPlaylistData, setAlbumPlaylistData] = useState(null);
    const [isPlaylist, setIsPlaylist] = useState(null);
    const [isAlbum, setIsAlbum] = useState(null);
    const [title, setTitle] = useState(null);

    useEffect(() => {
        console.log('loading AlbumPlaylistView');
        console.log('Album or Playlist: ', props.albumOrPlaylist);
        if (props.albumOrPlaylist === 'playlist') {
            props.spotify
                .getPlaylist(props.albumPlaylistId)
                .then((playlistData) => {
                    setAlbumPlaylistData(playlistData);
                    setTitle(playlistData.name);
                    console.log('AlbumPlaylistView Playlist Data: ', playlistData);
                });
            setIsPlaylist(true);
            setIsAlbum(false);

        }
    }, []);

    return(
        <div className='album-playlist__wrapper'>
            <div className='album-playlist__header-wrapper'>
                <AlbumPlaylistHeader 
                    isPlaylist={isPlaylist}
                    isAlbum={isAlbum}
                    title={title}/>
            </div>
            <div className='album-playlist__table-wrapper'>
                Test
            </div>
        </div>
    )
}

export default AlbumPlaylistView;