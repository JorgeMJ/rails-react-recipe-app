import React, {} from 'react';
import ReactDOM from 'react-dom';


const CustomButton = ({type, action, text}) => {


	const buttonAction = (action, event) => {
		event.preventDefault();

		let url = '';
		let method = '';

		if (action === 'add') {
			url = '/dashboard/add_sample_recipes';
			method = 'GET';
			console.log('ADDED');
		} else if (action === 'delete') {
			url = '/dashboard/delete_sample_recipes';
			method = 'DELETE';
			console.log('DELETED');
		}

		$.ajax({
			url: url,
			method: method,
			dataType: 'JSON',
			contentType: 'applicaiton/json',

		}).then((response) => {
			console.log('everything was OK')
		}).catch((error) => {
			console.log('Error => ', error)
		});
	}

	return (
		<>
			<button type={type} onClick={(e) => {buttonAction(action, e)}}>{text}</button>
		</>
		
	)
}

export default CustomButton;