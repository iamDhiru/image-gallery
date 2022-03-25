import React,{useState, useEffect} from 'react'
import Photo from './Photo'
import User from './User'
import axios from 'axios'
import Album from './Album'

const Home = () => {
    // States
    const [photos, setPhotos] = useState([]);
    const [users, setUsers] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [user, setUser] = useState('');
    const [filteredAlbum, setFilteredAlbum] = useState([]);
    const [filteredPhotos, setFilteredPhotos] = useState([]);
    const [isPhotoVisible, setIsPhotoVisible] = useState(false)
    const [isAlbumVisible, setIsAlbumVisible] = useState(false)
    const [inputValue, setInputValue] = useState('')



    useEffect(()=>{
        getUsers();
        getAlbums();
        getPhotos();
    },[]);

    // This function will get the user and filter the album based on that user
    const handleChange = (e) =>{
        setUser(e.label);
        setInputValue(e.label)
        setIsAlbumVisible(true);
        setFilteredAlbum(albums.filter(album=> album.userId==e.value))
    }
    // this function will set the filter the value from the list of images wrt albumid
    const onSelectAlbumHandler = (record) =>{
        setFilteredPhotos(photos.filter(photo=> photo.albumId==record.id))
        setIsAlbumVisible(false);
        setIsPhotoVisible(true);

    }

// These three function we will use to get data from the api
    const getUsers = async () =>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        if(res){
            setUsers(res.data);
        }
    }
    const getAlbums = async () =>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
        if(res){
            setAlbums(res.data);
        }
    }
    const getPhotos = async () =>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
        if(res){
            setPhotos(res.data);
        }
    }
    const setInitial = () =>{
        setIsAlbumVisible(false);
        setIsPhotoVisible(false);
        window.location.reload()
    }

  return (
    <div className='container '>
        <h5><span style={{color: isAlbumVisible || isPhotoVisible ? 'blue':"#000"}} onClick={setInitial}>Users</span> <span style={{color:isPhotoVisible && 'blue'}} onClick={()=>{setIsPhotoVisible(false);setIsAlbumVisible(true)}}>{isAlbumVisible || isPhotoVisible ? '/ Albums':''}</span><span>{ isPhotoVisible ? '/ Photos':''}</span></h5>
        {
            !isPhotoVisible && (
                <User
                inputValue={inputValue}
                handleChange={handleChange} 
                users={users}/>
            )
        }
        {
              isAlbumVisible && (
                <Album
                user={user} 
                onSelectAlbumHandler={onSelectAlbumHandler}
                albums={filteredAlbum}
                /> 
            )
        }   
        {
            isPhotoVisible && (
                <Photo
                photos={filteredPhotos}
                />
            )
        }   
    </div>
  )
}
export default Home