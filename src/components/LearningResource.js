import React, { Component } from 'react';
import resourceJson from '../data/resources';

class LearningResource extends Component {

  render() {
    const thisResource = resourceJson.resources.find(rsrc => {
        return rsrc.slug === this.props.match.params.slug;
      })

    return (
    	<main class="learning-resource__page responsive-padded">
        <ul class="breadcrumbs">
          <li><a href="/">Home</a></li>&ensp;&raquo;&ensp;<li><a href="/learning">Learning Resources</a></li>
        </ul>
        <p class="learning-resource__category">{thisResource.category }</p>
        <h1>{ thisResource.title }</h1>
        <h2>by { thisResource.author }</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat magna, feugiat at convallis quis, feugiat non turpis. Cras justo nisi, congue nec quam fermentum, elementum sodales ante. Sed posuere mattis est, vitae dignissim felis congue cursus.</p>
        <p>Duis sed faucibus tortor. Donec eleifend nulla id posuere pharetra. Mauris suscipit justo et quam accumsan accumsan. Curabitur tristique a odio ut ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus pulvinar ut metus ut lobortis. Pellentesque ultricies mauris ex, sit amet convallis ipsum consequat vitae.</p>
        <p>Praesent arcu tortor, ornare ut malesuada eget, tincidunt quis nulla. Donec diam enim, iaculis eget lacus ut, imperdiet feugiat nisl. Nam quis lectus non metus consectetur pharetra. Nunc in sodales justo. Proin malesuada molestie sem, a interdum lacus ullamcorper nec. Duis vestibulum tincidunt eros non interdum. Nam sed libero nunc. Aenean porta luctus ligula.</p>
        <p>Maecenas quis pharetra nulla. Vestibulum ut molestie enim. Pellentesque vel elit nec tortor commodo dapibus eget elementum tellus.</p>

        <cite><a href="#">Source</a></cite>
      </main>
    );
  }
}

export default LearningResource;
