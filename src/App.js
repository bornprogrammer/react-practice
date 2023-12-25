import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import Posts from './Pages/Resources/Posts';
import PostDetail from './Pages/Resources/PostDetail';
import Layout from './components/Layout';
import Resource from './Pages/Resources/Resource';
import Albums from './Pages/Resources/Albums';
import Photos from './Pages/Resources/Photos';
import Comments from './Pages/Resources/Comments';
import Users from './Pages/Resources/Users';
import MainRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
      {/* <Routes> */}
      {/* <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/resource' element={<Resource />}>
            <Route path='/resource/posts' element={<Posts />}></Route>
            <Route path='/resource/albums' element={<Albums />}></Route>
            <Route path='/resource/photos' element={<Photos />}></Route>
            <Route path='/resource/comments' element={<Comments />}></Route>
            <Route path='/resource/users' element={<Users />}></Route>
          </Route>
        </Route> */}
      {/* </Routes> */}
    </BrowserRouter>
  );
}

export default App;
