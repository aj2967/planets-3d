import { useState } from 'react';
import { Link } from 'react-router-dom';
import MyCanvas from './components/canvas/MyCanvas';



function App() {

	const [chosenPlanet, setChosenPlanet] = useState('Earth')

	return (
		<div className='App'>
			<div className='buttons'>
				<Link to='/'><button onClick={e => setChosenPlanet(e.target.innerHTML)}>Mercury</button></Link>
				<Link to='/'><button onClick={e => setChosenPlanet(e.target.innerHTML)}>Venus</button></Link>
				<Link to='earth'><button onClick={e => setChosenPlanet(e.target.innerHTML)}>Earth</button></Link>
				<Link to='/'><button onClick={e => setChosenPlanet(e.target.innerHTML)}>Mars</button></Link>
				<Link to='/'><button onClick={e => setChosenPlanet(e.target.innerHTML)}>Jupiter</button></Link>
				<Link to='/'><button onClick={e => setChosenPlanet(e.target.innerHTML)}>Saturn</button></Link>
				<Link to='/'><button onClick={e => setChosenPlanet(e.target.innerHTML)}>Uranus</button></Link>
				<Link to='/'><button onClick={e => setChosenPlanet(e.target.innerHTML)}>Neptune</button></Link>
			</div>
			
			<MyCanvas clickedButton={chosenPlanet} />
		</div>
    );
}

export default App;
