import { useState } from 'react';

import EarthCanvas from './components/canvas/EarthCanvas';


function App() {

	const [chosenPlanet, setChosenPlanet] = useState('Earth')

	return (
		<div className='App'>
			<div>
				<button onClick={e => setChosenPlanet(e.target.innerHTML)}>Mercury</button>
				<button onClick={e => setChosenPlanet(e.target.innerHTML)}>Venus</button>
				<button onClick={e => setChosenPlanet(e.target.innerHTML)}>Earth</button>
				<button onClick={e => setChosenPlanet(e.target.innerHTML)}>Mars</button>
				<button onClick={e => setChosenPlanet(e.target.innerHTML)}>Jupiter</button>
				<button onClick={e => setChosenPlanet(e.target.innerHTML)}>Saturn</button>
				<button onClick={e => setChosenPlanet(e.target.innerHTML)}>Uranus</button>
				<button onClick={e => setChosenPlanet(e.target.innerHTML)}>Neptune</button>
			</div>
			
			<EarthCanvas clickedButton={chosenPlanet} />
		</div>
    );
}

export default App;
