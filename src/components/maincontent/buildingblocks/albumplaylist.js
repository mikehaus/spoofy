import React, { useState, useEffect } from 'react';
import AlbumPlaylistHeader from './albumplaylistheader';
import '../../../styles/maincontent/buildingblocks/albumplaylist.css'

function AlbumPlaylistView(props) {
    
    const [albumPlaylistData, setAlbumPlaylistData] = useState(null);
    const [isPlaylist, setIsPlaylist] = useState(null);
    const [isAlbum, setIsAlbum] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [albumPlaylistImgUrl, setAlbumPlaylistImgUrl] = useState(null);
    const [followerCount, setFollowerCount] = useState(null);
    const [playlistCreator, setPlaylistCreator] = useState(null);

    useEffect(() => {
        if (props.albumOrPlaylist === 'playlist') {
            props.spotify
                .getPlaylist(props.albumPlaylistId)
                .then((playlistData) => {
                    console.log('playlistData: ', playlistData);
                    setAlbumPlaylistData(playlistData);
                    setTitle(playlistData.name);
                    setDescription(playlistData.description);
                    setAlbumPlaylistImgUrl(playlistData.images[0].url);
                    setFollowerCount(playlistData.followers.total);
                    setPlaylistCreator(playlistData.owner.display_name);
                });
            setIsPlaylist(true);
            setIsAlbum(false);
        }
    }, []);

    return(
        <div className='album-playlist__wrapper'>
            <div className='album-playlist__header-wrapper'>
                <AlbumPlaylistHeader
                    albumPlaylistImgUrl={albumPlaylistImgUrl}
                    isPlaylist={isPlaylist}
                    isAlbum={isAlbum}
                    title={title}
                    description={description}
                    followerCount={followerCount}
                    creator={playlistCreator}/>
            </div>
            <div className='album-playlist__table-wrapper'>
                Test
            </div>
        </div>
    )
}

export default AlbumPlaylistView;