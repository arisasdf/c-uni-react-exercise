import React, { Component } from 'react';
import ResourceBox from './ResourceBox';
import videoJson from '../data/videos';

class LearningResources extends Component {

  render() {
    const videoBoxes = videoJson.resources.map((r) => <ResourceBox title={r.title} category={r.category} slug={r.slug} section='video'/>);

    return (
    	<main class="responsive-padded">
    		<h1>Video Tutorials</h1>
        <div class="resource-listing__boxes">
          { videoBoxes }
        </div>
      </main>
    );
  }
}

export default LearningResources;
