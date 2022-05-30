import React from 'react';

import { useState } from 'react';
import "./Style.css";

import Parent from './parent';


const Main = () => {
	const [searchitems, setItems] = useState("");

	return (
		<div className='container'>

			<Parent />

		</div>


	);

}

export default Main;