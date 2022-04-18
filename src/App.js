import { useState } from 'react';

import EarthCanvas from './components/canvas/EarthCanvas';


function App() {

	const [chosenPlanet, setChosenPlanet] = useState('')

	return (
		<div className='App'>
			{/* <div>
				<button>Button</button>
				<button>Button</button>
				<button>Button</button>
				<button>Button</button>
			</div> */}
			
			<EarthCanvas />
		</div>
    );
}

export default App;
