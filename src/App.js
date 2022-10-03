import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
	return (
			<Router>
				<Routes>
					<Route path='/' element={<Home />}/>
					<Route path='/About' element={<About />}/>
					<Route path='/contact' element={<Contact />}/>
				</Routes>
			</Router>
	);
}

export default App;
