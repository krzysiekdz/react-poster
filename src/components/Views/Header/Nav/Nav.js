import React from 'react';

import NavbarHeader from './Navbar/NavbarHeader'
import NavbarLinks from './Navbar/NavbarLinks'

export default class extends React.Component {
	constructor() {
		super();

		this.state = {
			collapsed: false
		}
	}

	toggleCollapse() {
		let coll = ! this.state.collapsed;
		this.setState({collapsed: coll});
	}

	render() {
		const collapsed = this.state.collapsed ? ' collapse ' : '';
		const {location} = this.props;

		return (
			<nav class="navbar navbar-inverse" id={"poster-nav"}>
				<div class="container-fluid">
					<NavbarHeader 
						toggleCollapse={this.toggleCollapse.bind(this)}
						location={location}
					/>
					<NavbarLinks 
						toggleCollapse={this.toggleCollapse.bind(this)}
						location={location}
						collapsed={collapsed}
					/>
				</div>
			</nav>
		);
	}
}