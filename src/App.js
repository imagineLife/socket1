import React from "react";
import ReactDOM from "react-dom";
import io from 'socket.io-client';

class App extends React.Component{

	//sets initial state
	constructor (props) {
		super(props)

		this.state = {
			//list of messages
			messages: [
				{
					from: 'Jake',
					body: 'Test Message Body'
				}
			]
		}
	}

	render(){

		console.log('this.state ->',this.state);
		//map over state, create list item for each item
		const messages = this.state.messages.map((m,i) => {
			return <li key={i}>
				<b>{m.from}:</b>
				{m.body} 
				</li>
			})

		return(
			<div>
				<h1>Hello Socket!</h1>
				<input 
					type="text" 
					placeholder="enter a message..."
					onKeyUp={this.handleSubmit} 
				/>
				{messages}
			</div>
			)
	}
}
export default App;
ReactDOM.render(<App />, document.getElementById("app"));