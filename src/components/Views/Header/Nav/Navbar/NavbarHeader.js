import React from 'react';

import NavbarToggle from './NavbarToggle'
import NavbarBrand from './NavbarBrand'

export default class extends React.Component {
	render() {
		const {toggleCollapse, location} = this.props;
		return (
			<div class="navbar-header">
				<NavbarBrand location={location}/>
				<NavbarToggle toggleCollapse={toggleCollapse}/>
			</div>
		);
	}
}