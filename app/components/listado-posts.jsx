import Post from "./post"

export default function ListadoPosts({ posts }) {
  return (
    <>
      <h3 className="heading">Blog</h3>
      <div className="blog">
        {posts.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </div>
    </>
  );
}
