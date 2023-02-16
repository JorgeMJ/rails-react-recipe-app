import React, {useState,createContext} from 'react';
import ReactDOM from 'react-dom';

const FlashContext = createContext();

const CustomButton = ({type, action, text}) => {

	const [msn, setMsn] = useState(null)

	const buttonAction = (action, event) => {
		event.preventDefault();

		let url = '';
		let method = '';

		if (action === 'add') {
			url = '/dashboard/add_sample_recipes';
			method = 'GET';
		} else if (action === 'delete') {
			url = '/dashboard/delete_sample_recipes';
			method = 'DELETE';
		}

		$.ajax({
			url: url,
			method: method,
			dataType: 'JSON',
			contentType: 'applicaiton/json',
		}).then((response) => {
			setMsn(response.message)
		// }).catch((error) => {
		// 	console.log('Error => ', error)
		});
	}

	return (

		<FlashContext.Provider value={msn}>
			<button type={type} onClick={(e) => {buttonAction(action, e)}}>{text}</button>
		</FlashContext.Provider>
		
	)
}

export default CustomButton;