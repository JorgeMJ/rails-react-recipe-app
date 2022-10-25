import React from 'react';
import ReactDOM from 'react-dom';

const MyComponent = (props) => {

  const name = props.name;

  return(
    <div>
      <p>This is my custom component</p>
      <p>This is passed value: {name}</p>
    </div>
  )
}

// document.addEventListener('DOMContentLoaded', () => {
//   const node = document.getElementById('appointments_data')
//   const data = JSON.parse(node.getAttribute('data'))



document.addEventListener('DOMContentLoaded', () => {  
  const node = document.getElementById('appointments_data')
  const data = JSON.parse(node.getAttribute('data'))

  console.log('cosa',$('#cosa'))

  $('#cosa').css('background-color', 'lightgreen')

  ReactDOM.render(
    // <Hello name="React" />,
    <MyComponent name={data}/>,
    // document.body.appendChild(document.createElement('div')),
    document.getElementById('cosa').appendChild(document.createElement('div')),
  )
})

export default MyComponent;