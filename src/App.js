
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import {db} from './firebase-config';
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// artwork,song,dateofrelease,artists,rating


function App(props) {
  var avgRating;
  var topArtistsByAverageRating = [];
  const artistCollectionRef = collection(db,'artistinfo');
  const [artistInfo,setArtistInfo] = useState([])
  const [song,setSong] = useState("");
  const[dateofrelease,setDateOfRelease] = useState("")  
  const[artist,setArtist] = useState("")
  const [value, setValue] = React.useState(2);
  const[render,setRender] = useState(0)
  


  const colNames = ['artist','dateofrelease,song,rating']
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const createArtist = async() => {
    await addDoc(artistCollectionRef,{artist:artist,dateofrelease:dateofrelease,song:song,rating:value});
  }

  useEffect(() => {
    const getArtists = async () => {
      const data = await getDocs(artistCollectionRef);
      setArtistInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      
    }
    getArtists()
  },[])

  var avgRating;
  var allRatings = [];
  artistInfo.map((item) => {allRatings.push(item.rating)})
  var sum = 0;
  for(var i=0;i<allRatings.length;i++){
    sum += allRatings[i]
  }
  avgRating = Math.floor(sum/allRatings.length);
  
  artistInfo.map((item) => {
    if(avgRating == item.rating){
      topArtistsByAverageRating.push(item)
    }
  })

  console.log(topArtistsByAverageRating)


  
 
  


  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
     
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success"  type="submit">Search</button>
            </form>
          </div>
      </nav>
      <div>
      <Button onClick={handleOpen}>+ Add Artist/song</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div class="m-5">
                <h3>Fill the details</h3>
                <input placeholder='Name of the artist' onChange={(event) => {setArtist(event.target.value)}}></input>
                <input onChange={(event) => {setSong(event.target.value)}} placeholder='song'></input>
                <input onChange={(event) => {setDateOfRelease(event.target.value)}} placeholder='date of release'></input>
                <label></label>
                <select name="cars" id="cars">
                  <option value='select'>Choose from existing artists</option>
                  {
                    artistInfo.map((item) => {
                      return  <option value={item.artist}>{item.artist}</option>
                    })
                  }
                </select>
                
                <div>
                  <Box
                      sx={{
                          '& > legend': { mt: 2 },
                      }}
                      >
                      <Typography component="legend"></Typography>
                      <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                          setValue(newValue);
                          }}
                      />
                  </Box>
                </div>

                <button onClick={createArtist} type="button" class="btn btn-secondary mx-1">submit</button>
            </div>
        </Box>
        
      </Modal>

      <h3 class ='m-3'>Top artists</h3>

      <table class="table">
        <thead>
          <tr>
              
            <th scope="col">Artist</th>
            <th scope="col">dateofrelease</th>
            <th scope="col">song</th>
            <th scope="col">rating</th>
          </tr>
        </thead>
        <tbody>
            {topArtistsByAverageRating.map((item) => {
              return(
              <tr>
                <td>{item.artist}</td>
                <td>{item.dateofrelease}</td>
                <td>{item.song}</td>
                <td>{<Box
                      sx={{
                          '& > legend': { mt: 2 },
                      }}
                      >
                      <Typography component="legend"></Typography>
                      <Rating
                          name="simple-controlled"
                          value={item.rating}
                          onChange={(event, newValue) => {
                          setValue(newValue);
                          }}
                      />
                  </Box>}</td>         
              </tr>
              )
            })
            }
        </tbody>
      </table>


    </div>


      {/* <BasicModal artistName = {(event) => {setArtist(event.target.value)}} song = {(event) => {setSong(event.target.value)}} releaseDate = {(event) => {setDateOfRelease(event.target.value)}} btnHandler = {createArtist} /> */}

      
    </div>
      
    
  );
}

export default App;
