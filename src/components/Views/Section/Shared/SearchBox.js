import React from 'react';

export default class extends React.Component {

	constructor() {
		super();
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			value: ''
		}
	}

	handleClick() {
		if(this.state.value)
			//this.props.putMovie(this.refs.search.value);
			this.props.handleClick(this.state.value);
	}

	handleKeyUp(e) {
		if(e.which === 13 && this.state.value) {
			this.handleClick();
		}
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}


	render() {
		return (
			<div class="input-group">
				<input 
					id="poster-search" 
					type="text" 
					class="form-control" 
					placeholder="search for a movie..."
					ref="search"
					onKeyUp={this.handleKeyUp}
					onChange={this.handleChange}
				/>
				<span class="input-group-btn">
					<button class="btn btn-default" onClick={this.handleClick.bind(this)}>
						<span class="glyphicon glyphicon-search"></span>
					</button>
				</span>
			</div>
		);
	}
}