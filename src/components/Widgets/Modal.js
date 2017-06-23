import React from 'react'


export default class Modal extends React.Component {

	render() {
		const {img, onClick} = this.props;
		return (
			<div class="modal-container">
				<img src={img} class='modal-img' />
				<a href='#' onClick={this.handleOnClick.bind(this)} class='modal-a'>[powrót]</a>
			</div>
		);
	}

	handleOnClick(e) {
		const {onClick} = this.props;
		e.preventDefault();
		onClick();
	}
}