import React, { Component } from 'react';
import resourceJson from '../data/resources';

class LearningResource extends Component {

  render() {
    const thisResource = resourceJson.resources.find(rsrc => {
        return rsrc.slug === this.props.match.params.slug;
      }),
      paragraphs = thisResource.content.map((pg) => <p>{pg}</p>);

    return (
    	<main class="learning-resource__page responsive-padded">
        <ul class="breadcrumbs">
          <li><a href="/">Home</a></li>&ensp;&raquo;&ensp;<li><a href="/learning">Learning Resources</a></li>
        </ul>
        <p class="learning-resource__category">{thisResource.category }</p>
        <h1>{ thisResource.title }</h1>
        <h2>by { thisResource.author }</h2>
        {paragraphs}
        <cite><a href="#">Source</a></cite>
      </main>
    );
  }
}

export default LearningResource;
