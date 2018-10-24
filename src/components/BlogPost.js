import React, { Component } from 'react';

class BlogPost extends Component {
	render() {
		const paragraphs = this.props.paragraphs.map((pg) => <p>{pg}</p>),
			authorFullNames = {
				'eme'  : 'Eme Effiom',
				'lucia': 'Lucia Serrano'
			};

		return (
			<article class="blog__post">
				<img src={'/img/thumb/' + this.props.author + '.png'}/>
				<h2>{this.props.postTitle}</h2>
				<h4>{authorFullNames[this.props.author]}</h4>
				<div class="clearfix"></div>
				{paragraphs}
			</article>
		);
	}
}

export default BlogPost;
