import React, { Component } from 'react';
import BlogPost from './BlogPost';

class Blog extends Component {
	render() {
		return (
			<main class="blog">
				<h1>Progress Blog</h1>
				<BlogPost author="lucia"
					postTitle="Structure and first components"
					paragraphs={[
						"Working with React has been pretty interesting but also quite complicated. It's funny how much work we've done before we could actually start pushing code! First of all a lot of reading, then a lot of testing, and a lot of tinkering.",
						"We first created some HTML drafts but integrating it with React it's not as easy as one could think, so first we kicked off with a basic project structure. Eme figured out how to create and use components with the correct syntax and React kewords, etc., so we could add an empty header and footer to begin with. I separated the CSS files into responsive breakpoint folders and tried it out with some color changes. I worked on rendering several items in one component; turns out it's pretty simple to achieve by using the 'map' function.",
						"We've been experimenting with other things such as routing and importing SVG's (whcih is kind of a pain since importing doesn't work exactly as you'd expect). Next update should include a fully responsive header and footer, and maybe a bit of routing."
					]}
				/>
			</main>
		);
	}
}

export default Blog;
