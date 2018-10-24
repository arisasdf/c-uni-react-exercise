import React, { Component } from 'react';
import ResourceBox from './ResourceBox';
import resourceJson from '../data/resources';

class LearningResources extends Component {

  render() {
    const resourceBoxes = resourceJson.resources.map((r) => <ResourceBox title={r.title} category={r.category} author={r.author} slug={r.slug} section='learning'/>);

    return (
    	<main class="responsive-padded">
    		<h1>Learning Resources</h1>
        <div class="resource-listing__boxes">
          { resourceBoxes }
        </div>
      </main>
    );
  }
}

export default LearningResources;
