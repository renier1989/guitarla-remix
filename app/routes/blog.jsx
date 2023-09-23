import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import Post from "~/components/post";
import styles from "../styles/blogs.css";

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles,
    }
  ]
}

function Blog() {
  const posts = useLoaderData();

  return (
    <main className="contenedor">
      <h3 className="heading">Blog</h3>
      <div className="blog">
        {posts.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </div>
    </main>
  );
}

export default Blog;
