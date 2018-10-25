import React, { Component } from 'react';

class MoreBox extends Component {
	render() {
		return (
			<a class={'resource__box resource__box--more ' + this.props.section + '-resource__box'} href={'/' + this.props.section}>
				<img src="/img/thumb/more.png" />
				<h3>More</h3>
			</a>
		);
	}
}

export default MoreBox;
