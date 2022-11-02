import * as React from 'react';

export default class ReactComponentReactInput extends React.Component {

  divStyle = {
    color: 'blue',
  }

  override render() {
    return (
      <div style={{ 
        width: '500px',
        height: '200px',
        margin: '5px',
        paddingLeft: '5px',
        border: '3px solid rgb(97, 219, 251)',
        borderRadius: '5px'}}>
        <h3>React Component:</h3>
        <p>Enter your name to provide the data for the Angular component.</p>
        <input id='inputname' type="text" placeholder='Enter your Name' defaultValue='' style={{
          height: '20px',
          width: '200px',
          border: '2px solid rgb(97, 219, 251)',
          borderRadius: '5px',
        }}/>
      </div>
    );
  }

}
