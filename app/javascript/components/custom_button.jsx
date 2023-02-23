import React, {useContext} from 'react';
import ReactDOM from 'react-dom';

import {FlashMessageContextFn} from './contexts';

const CustomButton = ({type, action, label}) => {

	const flashMessageFn = useContext(FlashMessageContextFn)

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
			flashMessageFn(response.message)
		});
	}

	return (
		<button type={type} onClick={(e) => {buttonAction(action, e)}}>{label}</button>
	)
}

export default CustomButton;