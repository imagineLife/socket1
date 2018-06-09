import React from "react";
import ReactDOM from "react-dom";
import io from 'socket.io-client';

export class App extends React.Component {

	//sets initial state
	constructor (props){
		super(props);

		this.state = {
			//list of messages
			messages: []
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//hanlde submit function
	handleSubmit(event){
		const body = event.target.value;
		
		//if enter was pressed & theres content in the textbox
		if (event.keyCode === 13 && body){
		console.log('submitted!')
			const message = {
				body,
				from: 'Me!! '
			};
			
			this.setState({messages: [message, ...this.state.messages]})

			event.target.value = "";
		};
	}

	render(){

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

ReactDOM.render(<App />, document.getElementById("app"));