import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
const [title,setTitle] = useState('');
const [body,setBody] = useState('');
const [author,setAuthor] = useState('Dodohv');
const [isPending,setIsPending] = useState(false);
const history = useHistory();


const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log("Novo blog adicionado!")
        alert("Novo blog adicionado!")
        setIsPending(false);
        history.push('/api');
    })

    

}

    return ( 
        <div className="create">
            <h2>Adicionar novo Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Titulo do Blog:</label>
                <input 
                type="text" 
                required
                value = {title} 
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Corpo do Blog:</label>
                <textarea
                type="text" 
                required 
                value = {body} 
                onChange={(e) => setBody(e.target.value)}
                />
                <label>Autor do Blog:</label>
                <select
                value = {author}
                onChange={(e) => setAuthor(e.target.value)}
                
                >
                    <option value="Dodoh"> Dodoh</option>
                    <option value="Head Hunter"> Head Hunter</option>
                </select>

                {!isPending && <button>
                    Adicionar Blog
                </button>}
                {isPending && <button>
                    Adicionando Blog
                </button>}
                
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;