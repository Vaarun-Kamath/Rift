import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Sidebar from './Sidebar/Sidebar';

function App() {
	return (
		<div className="App">
			<Sidebar/>
			<Home />
		</div>
	);
}

export default App;
