import React, { Component } from 'react';
import Comments from './Comments';
import videoJson from '../data/videos';

class LearningResource extends Component {

  render() {
    const thisVideo = videoJson.resources.find(rsrc => {
        return rsrc.slug === this.props.match.params.slug;
      });

    return (
    	<main class="learning-resource__page responsive-padded">
        <ul class="breadcrumbs">
          <li><a href="/">Home</a></li>&ensp;&raquo;&ensp;<li><a href="/video">Video Tutorials</a></li>
        </ul>
        <p class="learning-resource__category">{thisVideo.category }</p>
        <h1>{ thisVideo.title }</h1>
        <iframe class="embedded-video-tutorial" src="https://www.youtube.com/embed/PaUmfUVezuA" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
        <Comments />
      </main>
    );
  }
}

export default LearningResource;
