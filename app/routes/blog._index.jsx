import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import ListadoPosts from "../components/listado-posts";

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

function Blog() {
  const posts = useLoaderData();

  return (
    <div>
      <ListadoPosts posts={posts} />
    </div>
  );
}

export default Blog;
