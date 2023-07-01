import React from 'react';


const ColorPicker = () => {

	const container = {
		display: 'flex',
		justifyContent: 'space-between',
	}

	const colorSelector = (color='green') => {
		return {
			border: '3px solid lightgray',
			width: '20px',
			height: '20px',
			borderRadius: '20px',
			backgroundColor: color,
			margin: '2px',
			cursor: 'pointer'
		}		
	}

	return(
		<span style={container}>
			<div style={colorSelector('lightblue')}></div>
			<div style={colorSelector('lightgreen')}></div>
			<div style={colorSelector('mediumorchid')}></div>
			<div style={colorSelector('tan')}></div>
		</span>
	)
}

export default ColorPicker;