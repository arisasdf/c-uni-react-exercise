import React, { Component } from 'react';
import RequestForm from './RequestForm';

class Footer extends Component {
	render() {
		return (
			<footer class="global-footer">
				<div class="global-footer__block">
					<h4>Pages</h4>
					<ul>
						<li><a href="/learning">Learning Resources</a></li>
						<li><a href="/video">Video Tutorials</a></li>
						<li><a href="/external">External Links</a></li>
						<li><a href="/directory">Directory</a></li>
					</ul>
				</div>
				<div class="global-footer__block">
					<h4>Team</h4>
					<ul>
						<li><a href="/about">About Us</a></li>
						<li><a href="/about/eme">&raquo;&ensp;Eme Effiom</a></li>
						<li><a href="/about/lucia">&raquo;&ensp;Luc&iacute;a Serrano</a></li>
						<li><a href="/blog">Blog</a></li>
					</ul>
				</div>
        <RequestForm />
        <div class="clearfix"></div>
				<div class="global-footer__copyright">Lucia S. &amp; Eme E. for the NSE - Cardiff University</div>
			</footer>
		);
	}
}

export default Footer;
