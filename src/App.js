import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

function App() {
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
    </div>
  );
}

export default App;
