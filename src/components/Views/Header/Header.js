import React from 'react';

import Nav from './Nav/Nav'

export default class extends React.Component {
	render() {
		return(
			<header class="poster-header">
				<Nav location={this.props.location}/>
			</header>
		);
	}
}