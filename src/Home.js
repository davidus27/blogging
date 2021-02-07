import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const [blogs, isPending, error, setBlogs] = useFetch('http://localhost:8000/blogs');
    
    const filterBlogs = (blogID) => {
        const filteredBlogs = blogs.filter((blog) => blog.id !== blogID);
        setBlogs(filteredBlogs);
    }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading, please wait...</div>}
            {blogs && <BlogList blogs={blogs} filterBlogs={filterBlogs}/>}
        </div>
    );
}

export default Home;
