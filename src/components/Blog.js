import React, { Component } from "react";
import BlogPost from "./BlogPost";

class Blog extends Component {
  render() {
    return (
      <main class="blog responsive-padded">
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

            "We then began to create the initial structure of the project and push to gitlab.It was a great opportunity for me to learn. After setting up the project structure, Lucia helped with the initial pushes on gitlab, she also worked on the footer and banner on the homepage.",
            "Thereafter, i began to create the initial components and style them as well.Afterwards, i started with my gitlab pushes",

            "Its been interesting so far undertaking the pair project, having to seat with someone else, join heads together and solve a problem. Its really been more productive.We have been exploring several aspects of react and are still learning on it",

            "The next thing for us now is to proceed with the actual content of the page where i willstart creating the Profile page and Lucia would do the rest of the homepage"
          ]}
        />
        <BlogPost
          author="lucia"
          postTitle="Homepage and About"
          paragraphs={[
            "After adding the hero banner, I've created the first homepage section, structured in card style, fully responsive, by reading the data from a JSON file and mapping it to a component. The next step would be to reuse these components to create the video section, and try and reuse it in the main pages as well.",
            "Eme is done with the About page and her own profile page, and she added a placeholder for my page. She's now working on the general display for the external links."
          ]}
        />
        <BlogPost
          author="eme"
          postTitle="Profile Page and External Links"
          paragraphs={[
            "I have Created my  profile page and have also added the page content, styled to suit every screen size . i have also created a responsive layout for the external links page",
            "Lucia has now created the individual pages for Learning resources, she is now working on the Video resources and Learning resources page Content "
          ]}
        />
        <BlogPost
          author="lucia"
          postTitle="Suggest a topic and new learning resources"
          paragraphs={[
            "I've created a request form for the users to suggest a topic they'd be interested in seeing added to the page, and integrated it into the footer for this to be available from every page. I also piggybacked into my footer work to enable the footer links.",
            "Meanwhile, Eme has been adding content and styles to the Learning Resources and External Links pages, which had only placeholder text and links. After this Eme will focus on the contact form and I'll create the comment interface for the resources. We're still pending the Videos page and my own profile page, and maybe some CSS tweaks."
          ]}
        />
      </main>
    );
  }
}

export default Blog;
