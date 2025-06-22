import React, { useState } from "react";

import Thumbnail1 from "../images/blog1.jpg";
import Thumbnail2 from "../images/blog2.jpg";
import Thumbnail3 from "../images/blog3.jpg";
import Thumbnail4 from "../images/blog4.jpg";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "This is the title of the very first post on this blog.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi, architecto sed expedita ut ratione esse culpa error distinctio? Esse odio obcaecati animi, consequatur facere soluta ex inventore impedit corporis vitae pariatur repudiandae libero blanditiis saepe cum perspiciatis vero, perferendis odit, maxime voluptate rem? Recusandae perspiciatis accusantium labore! At, esse!",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "science",
    title: "This is the title of the second post.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi, architecto sed expedita ut ratione esse culpa error distinctio? Esse odio obcaecati animi, consequatur facere soluta ex inventore impedit corporis vitae pariatur repudiandae libero blanditiis saepe cum perspiciatis vero, perferendis odit, maxime voluptate rem? Recusandae perspiciatis accusantium labore! At, esse!",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "technology",
    title: "Third post on this blog.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi, architecto sed expedita ut ratione esse culpa error distinctio? Esse odio obcaecati animi, consequatur facere soluta ex inventore impedit corporis vitae pariatur repudiandae libero blanditiis saepe cum perspiciatis vero, perferendis odit, maxime voluptate rem? Recusandae perspiciatis accusantium labore! At, esse!",
    authorID: 2,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "entertainment",
    title: "Fourth blog post title.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi, architecto sed expedita ut ratione esse culpa error distinctio? Esse odio obcaecati animi, consequatur facere soluta ex inventore impedit corporis vitae pariatur repudiandae libero blanditiis saepe cum perspiciatis vero, perferendis odit, maxime voluptate rem? Recusandae perspiciatis accusantium labore! At, esse!",
    authorID: 4,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  //   const handleDelete = (id) => {
  //     setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  //   };

  return (
    <section className="posts">
      <div className="container posts__container">
        {posts.length > 0 ? (
          posts.map((post) => <PostItem key={post.id} {...post} />)
        ) : (
          <p>No hay publicaciones disponibles.</p>
        )}
      </div>
    </section>
  );
};

export default Posts;
