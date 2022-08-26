
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs/');
//  const {data: blogs, isPending, error} = useFetch('http://dodohv.com.br/api/blogs');

// const [name, setName] = useState('Dodohv');

// const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
// }



    return (
        <div className="home">
        {error && <div> {error} </div>}
            { isPending && <div>Carregando...</div> }
            {blogs && <BlogList blogs={blogs} title="Lista de Blogs em REST API REACT.JS" />}


        </div>
      );
}
 
export default Home;