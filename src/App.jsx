import './css/styles.css';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Login from './pages/Login';
import FourOFour from './pages/FourOFour';

function App() {
	return (
		<Fragment>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<Welcome />}></Route>
					<Route path="/login" element={<Login />} />
          <Route path='*' element={<FourOFour/>}/>
				</Routes>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
