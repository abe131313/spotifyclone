
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import {db} from './firebase-config';
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';
import CreatArtist from './components/CreateArtistInfo';

// artwork,song,dateofrelease,artists,rating


function App() {
  const artistCollectionRef = collection(db,'artistinfo');
  const [artistInfo,setArtistInfo] = useState([])
  const [song,setSong] = useState("");
  const[dateofrelease,setDateOfRelease] = useState("")  
  const[artist,setArtist] = useState("")
  const createArtist = async() => {
    await addDoc(artistCollectionRef,{artist:artist,dateofrelease:dateofrelease,song:song});
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
      <h3>
        Create Artists..
      </h3>
      <CreatArtist/>
    </div>
    
  );
}

export default App;
