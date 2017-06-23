import React from 'react';

import SearchBox from "./Shared/SearchBox";

export default class extends React.Component {

	render() {
		return (
			<div class="container">
				<div class={"jumbotron" + (this.props.hide ? ' hidden ' : '')}>
					<h2 class="text-center">Welcome to a Poster!</h2>
					<p class="text-center">A minimalist Movies catalog, powered by <a href="#">TMDb</a></p>
					<SearchBox handleClick={this.props.action}/>
				</div>
			</div>
		);
	}
}