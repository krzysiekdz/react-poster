import React from 'react';


export default class extends React.Component {
	render() {
		return (
			<button class="navbar-toggle" onClick={this.props.toggleCollapse} id={"button-toggle"}>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		);
	}
}