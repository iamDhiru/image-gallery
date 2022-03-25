import React from 'react'
import {Paper} from '@material-ui/core'

const Album = ({albums, onSelectAlbumHandler, user}) => {
  return (
    <Paper className='row mt-3 mx-2 p-2'>
        <h4>Albums of {user}</h4>
        {
            albums && albums.map((album, index)=>{
                return (
                    <div onClick={()=>onSelectAlbumHandler(album)} key={index} className='  col-md-3 col-lg-4 mt-2'>
                        <div className='card shadow album p-2' style={{minHeight:"80px", height:"auto"}}>{album.title}</div>
                    </div>
                )
            })
        }
    </Paper>
  )
}
export default Album