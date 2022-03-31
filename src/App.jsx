import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';

import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Login from './pages/Login';
import FourOFour from './pages/FourOFour';
import Home from './pages/home';

function App() {
	return (
		<Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Welcome />}></Route>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
               <Route path='*' element={<FourOFour/>}/>
          </Routes>
        </BrowserRouter>
		</Fragment>
	);
}

export default App;
