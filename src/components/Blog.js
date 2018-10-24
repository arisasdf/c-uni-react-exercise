import React, { Component } from "react";
import BlogPost from "./BlogPost";

class Blog extends Component {
  render() {
    return (
      <main class="blog">
        <h1>Progress Blog</h1>
        <BlogPost
          author="lucia"
          postTitle="Structure and first components"
          paragraphs={[
            "Working with React has been pretty interesting but also quite complicated. It's funny how much work we've done before we could actually start pushing code! First of all a lot of reading, then a lot of testing, and a lot of tinkering.",
            "We first created some HTML drafts but integrating it with React it's not as easy as one could think, so first we kicked off with a basic project structure. Eme figured out how to create and use components with the correct syntax and React kewords, etc., so we could add an empty header and footer to begin with. I separated the CSS files into responsive breakpoint folders and tried it out with some color changes. I worked on rendering several items in one component; turns out it's pretty simple to achieve by using the 'map' function.",
            "We've been experimenting with other things such as routing and importing SVG's (which is kind of a pain since importing doesn't work exactly as you'd expect). Next update should include a fully responsive header and footer, and maybe a bit of routing."
          ]}
        />
        <BlogPost
          author="eme"
          postTitle="Setting up the Environment"
          paragraphs={[
            "Starting out with react has been exciting so far, i am happy with the opportunity to learn and explore something new. We started first by looking up on online resources, setting up the environment, installing the softwares, and Creating the app itself",

            "We then began to create the initial structure of the project and push to gitlab. My Greatest challenge was managing the gitlab pushes and updates on Taiga and  coding at the same time. I was a great opportunity for me to learn. After setting up the project structure, Lucia helped with the initial pushes on gitlab and i updated it on my system. Thereafter, i began to create the initial components and style them as well.Afterwards, i started with my gitlab pushes",

            "Its been interesting so far undertaking the pair project, having to seat with someone else, join heads together and solve a problem. Its really been more productive.We have been exlopring several aspects of react and are still learning on it"
          ]}
        />
      </main>
    );
  }
}

export default Blog;
