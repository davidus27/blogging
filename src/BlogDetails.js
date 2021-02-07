import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams();
    const [blog, isPending, error] = useFetch(`http://localhost:8000/blogs/${id}`);

    return (
        <div className="article">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && 
            <div>
                <article>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            </div>}
        </div>
        );
}

export default BlogDetails;