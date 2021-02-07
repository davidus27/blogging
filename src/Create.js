import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const history = useHistory();

    const submitBlog = (event) => {
        fetch("http://localhost:8000/blogs", {
            "method": "POST",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify({title, author, body})
        }).then(() => {
            setIsSubmitted(true);
        });
    }

    return (
        <div className="create">
            <button onClick={() => history.push("/")}>Go back to home</button>
            {isSubmitted &&
             <div>
                <h2>Submission successfully completed.</h2>
                <button onClick={() => setIsSubmitted(false)}>Submit new article</button>
            </div>}
            {!isSubmitted && 
            <div>
                <h2>Add new Blog</h2>
                <form onSubmit={submitBlog}>
                    <label>Blog title:</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" required/>

                    <label>Blog author:</label>
                    <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" required/>
                    
                    <label>Blog title:</label>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                    <button>Submit your blog</button>
                </form>
            </div>}
        </div>
    );
}

export default Create;