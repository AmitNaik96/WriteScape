import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // 13. react router
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Footer from './Footer';

const App = () => {
  return (
    <Router >
      <div className='App'>
        <Navbar />
        <div className="content">
        <Routes>
          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/create' element = {<Create />}></Route>
          <Route path='/blogs/:ID' element = {<BlogDetails/>}></Route>
          <Route path='*' element = {<NotFound />}></Route>
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;