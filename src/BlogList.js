import {Link} from "react-router-dom";

const BlogList = ({blogs, filterBlogs}) => {

    const deleteBlog = (blogID) => {
        fetch(`http://localhost:8000/blogs/${blogID}`,
        {
            method: "DELETE"
        }).then(() => {
            filterBlogs(blogID);
        });
    }

    return (
        <div className="blog-list">
            {!blogs.length && <h2>No blogs found. Time to write new ones.</h2>} 
            {Boolean(blogs.length) && <h1>All blogs</h1>}
            {blogs &&
                blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <button onClick={() => deleteBlog(blog.id)}>X</button>
                    <Link to={`/blogs/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        <p>Written by {blog.author}.</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;