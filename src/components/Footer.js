import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer class="global-footer">
				<div class="global-footer__block">
					<h4>Pages</h4>
					<ul>
						<li><a href="#">Learning Resources</a></li>
						<li><a href="#">Video Tutorials</a></li>
						<li><a href="#">External Links</a></li>
					</ul>
				</div>
				<div class="global-footer__block">
					<h4>Team</h4>
					<ul>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>
				<div class="global-footer__copyright">Lucia S. &amp; Eme E. for the NSE - Cardiff University</div>
			</footer>
		);
	}
}

export default Footer;
