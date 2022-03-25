import React, {useState} from 'react'
import axios from 'axios'
import CloseIcon from '@material-ui/icons/Close';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Photo = (props) => {
    
    const[model, setModel] = useState(false);
    const [tempImage, setTempImage] = useState('')

    // this function will set the current image url to state to show in model
    const getCurrentImage = (url) =>{
        setTempImage(url);
        setModel(true);
    }
  return (
        <div className='row'>
            <div className={model ? 'model open':'model'}>
                <img src={tempImage}/>
                <CloseIcon onClick={()=>setModel(false)}/>
            </div>
            {
                props.photos && props.photos.map((photo, index)=>{
                    return  (
                        <div key={index} className='col-md-4 col-lg-3 mt-3'>
                            <div class="card shadow image" onClick={()=>getCurrentImage(photo.url)}>
                                <LazyLoadImage effect='blur' class="card-img-top" src={photo.url} alt={photo.thumbnailUrl}/>
                                <div class="card-body">
                                    <p class="card-text">
                                        {photo.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>

  )
}

export default Photo