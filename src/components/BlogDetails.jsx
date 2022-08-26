import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
const { id } = useParams();
const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
const history = useHistory();

const handleClick = () => { 
    fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
    }).then(() => {
        history.push('/api');
    })

    }   

    return (  
        <div className="blog-details">  
        
        {isPending && <div>Carregando... </div>}
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Escrito por { blog.author}</p>
                <div className="name">{blog.body}</div>
                <button onClick={handleClick}>Deletar Blog</button>
            </article>
        )}
        </div>
    );
}
 
export default BlogDetails;