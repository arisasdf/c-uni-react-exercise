import React, { Component } from 'react';

class ResourceBox extends Component {
	render() {
		let thumbnailTag = '',
			boxClass = 'resource__box resource__box--' + this.props.category,
			authorTag = '';

		if (this.props.section === 'video') {
			boxClass += ' video-resource__box'
			thumbnailTag = <figure class="resource__box-thumb"><img src={'/img/thumb/' + this.props.slug + '.png'} /></figure>
		} else {
			authorTag = <p class="resource__box-author">{this.props.author}</p>
		}

		return (
			<a class={boxClass} href={'/' + this.props.section + '/' + this.props.slug}>
				<p class="resource__box-category">{this.props.category}</p>
				{ thumbnailTag }
				{ authorTag }
				<h3>{this.props.title}</h3>
			</a>
		);
	}
}

export default ResourceBox;
