import NavBar from "./components/NavBar";
import Transact from "./components/Transact";
import HomePage from "./components/HomePage";
import Pdfdownload from "./components/Pdfdownload"
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProfilePage from "./components/Profile"
import Docupload from "./components/Docupload"
import VideoPlayer from "./components/VideoPlayer";
function App() {
  return (
    <>

     <BrowserRouter>
     <NavBar/>
   
     <Routes>
       <Route path="/HomePage" element={<HomePage />}></Route>
       <Route path="profile" element={<ProfilePage />}></Route>
       <Route path="Docupload" element={<Docupload />}></Route>
       <Route path="Transact" element={<Transact />}></Route>
       <Route path="Pdfdownload" element={<Pdfdownload />}></Route>
       <Route path="VideoPlayer" element={<VideoPlayer />}></Route>
     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
