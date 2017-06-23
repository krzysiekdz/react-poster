import React from 'react';

import NavbarLinkItem from './NavbarLinkItem'

const linksList = [
	{to: 'top_rated', text: 'Top Rated'},
	{to: 'upcoming', text: 'Upcoming'},
	{to: 'watchlist', text: 'Watchlist'},
]

export default class extends React.Component {
	render() {
		const {collapsed, toggleCollapse, location} = this.props;

		const links = linksList.map((item, i) => <NavbarLinkItem 
			to={item.to}  
			text={item.text} 
			key={i} 
			toggleCollapse={toggleCollapse}
			location={location}
		/>);
		///
		return (
			<div class={"navbar-collapse" + collapsed}>
				<ul class="nav navbar-nav">
					{links}
				</ul>
			</div>
		);
	}
}