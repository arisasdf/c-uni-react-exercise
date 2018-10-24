import React, { Component } from "react";
import HomeSection from './HomeSection';
import resourceJson from '../data/resources';


class Home extends Component {
  render() {
    return(
			<main>
				<section class="hero-section">
					<h1>The best coder you can&nbsp;be</h1>
					<p>Whether you prefer Java, Python, Ruby or C++, whether you have lots of experience or you're new to programming, whether you're a professional developer or a hobbyist coder, there's always something new to learn.</p>
					<p>What are you waiting for? Get&nbsp;to&nbsp;it.</p>
				</section>
				<HomeSection title="Learning Resources"
					section="resources"
					items={resourceJson.resources.slice(0, 3)} />
			</main>
    );
  }
}

export default Home;
