import React from 'react';

import {Link} from 'react-router'

export default class extends React.Component {
	render() {
		const {to, text, toggleCollapse, location} = this.props;
		
		var setClass = location.pathname.match('/' + to) ? 'active' : '';
		
		return (		
			<li class={setClass}>
				<Link to={to} onClick={toggleCollapse}>{text}</Link>
			</li>	
		);
	}
}