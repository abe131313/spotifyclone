
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import {db} from './firebase-config';
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import BasicTable from './components/table'
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
  
  const artistCollectionRef = collection(db,'artistinfo');
  const [artistInfo,setArtistInfo] = useState([])
  const [song,setSong] = useState("");
  const[dateofrelease,setDateOfRelease] = useState("")  
  const[artist,setArtist] = useState("")
  const [value, setValue] = React.useState(2);
  


  
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
      console.log(artistInfo)
    }
    getArtists()
  },[])
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
      <Button onClick={handleOpen}>+ Add Artist</Button>
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
    </div>


      {/* <BasicModal artistName = {(event) => {setArtist(event.target.value)}} song = {(event) => {setSong(event.target.value)}} releaseDate = {(event) => {setDateOfRelease(event.target.value)}} btnHandler = {createArtist} /> */}

      <BasicTable/>
    </div>
      
    
  );
}

export default App;
