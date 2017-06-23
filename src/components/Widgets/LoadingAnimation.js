import React from 'react';

//dumb component
export default class extends React.Component {
	render() {
		const imgPath = 'img/hourglass.png'
		let {text} = this.props;
		return (
			<div class="poster-loading-anim ">
				<img src={imgPath} alt='img' id='hourglass'/>
				<p id='poster-loading-info' >Loading for {text}...</p>
			</div>
		);
	}
}

