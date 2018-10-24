import React, { Component } from 'react';

class ResourceBox extends Component {
	render() {
		let boxClass = 'resource__box resource__box--' + this.props.category,
			authorTag = <p class="resource-author">{this.props.author}</p>;

		return (
			<a class={boxClass}
			   href={'/' + this.props.section + '/' + this.props.slug}>
				<p class="resource-category">{this.props.category}</p>
				{ authorTag }
				<h3>{this.props.title}</h3>
			</a>
		);
	}
}

export default ResourceBox;
