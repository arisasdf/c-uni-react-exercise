import React, { Component } from 'react';
import ResourceBox from './ResourceBox';
import MoreBox from './MoreBox';

class HomeSection extends Component {

  render() {
    const resourceBoxes = this.props.items.map((r) => <ResourceBox title={r.title} category={r.category} author={r.author} slug={r.slug} section={this.props.section} />);

    return (
    	<section class="home-section responsive-padded">
    		<h2>{this.props.title}</h2>
        <div class="resource__row">
          { resourceBoxes }
          <MoreBox section={this.props.section} />
        </div>
      </section>
    );
  }
}

export default HomeSection;
