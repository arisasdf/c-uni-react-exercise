import React, { Component } from "react";

class ProfileLucia extends Component {
  render() {
    return (
    	<main class="responsive-padded lucia__profile">
    		<h1 class="lucia__title">Luc&iacute;a Serrano</h1>
				<h3 class="lucia__subtitle">
    			<img class="lucia__picture" src="/img/lucia-photo.png"/>
					<br />Software developer by profession
					<br />Operatic soprano by passion
					<br />Dungeon master by chance
				</h3>

				<section>
					<h2>Qualifications</h2>

					<ul>
						<li>BSc. in Computer Science (2013)</li>
						<li>Certified Scrum Master (2015)</li>
						<li>World's Okayest Dungeon Master (2018)</li>
					</ul>
				</section>
				<section>
					<h2>My Favourites</h2>

					<table>
						<thead>
							<tr>
								<th>Programming Languages</th>
								<th>Reason</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Ruby</td>
								<td>Straightforward, easy to use and read, extensible.</td>
							</tr>
							<tr>
								<td>Javascript</td>
								<td>Powerful and satisfying... if used right.</td>
							</tr>
							<tr>
								<td>Scheme (RIP)</td>
								<td>My first love. Fun to use. A bit impractical.</td>
							</tr>
						</tbody>
					</table>
					<table>
						<thead>
							<tr>
								<th>Metal Subgenres</th>
								<th>Reason</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Power Metal</td>
								<td>Full of energy, fantasy and HONOR.</td>
							</tr>
							<tr>
								<td>Progressive Metal</td>
								<td>Challenging and rich.</td>
							</tr>
							<tr>
								<td>Folk/Pirate Metal</td>
								<td>For drinking and dancing and neopaganism.</td>
							</tr>
						</tbody>
					</table>
				</section>

				<section class="lucia__sponsors">
					<h2>My Sponsors</h2>
					<ol>
						<li><a href="http://www.cardiff.ac.uk/">Cardiff University</a></li>
						<li><a href="https://www.tec.ac.cr/">TEC de Costa Rica</a></li>
						<li><a href="https://www.ucenfotec.ac.cr/">CENFOTEC University, Costa Rica</a></li>
						<li><a href="https://www.facebook.com/VortexGamingCR/">Vortex Gaming Center</a></li>
					</ol>
				</section>

				<section class="lucia__contact">
					<h2>Talk to me!</h2>
					<address>
						<p><strong>twitter:</strong> <a href="https://twitter.com/serranito_melt">@serranito_melt</a></p>
						<p><strong>phone:</strong> +44 077 3308 3627</p>
					</address>
				</section>
    	</main>
    );
  }
}

export default ProfileLucia;
