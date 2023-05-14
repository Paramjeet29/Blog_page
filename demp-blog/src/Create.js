import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle]=useState('')
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('mario');
    const [isPending,setIsPending]=useState(false);
    //history is an object and several methods can be used like going forward or backward
    const history=useHistory();

    const handleSubmit=(e)=>{
        //if we click add blog button it auto refreshes it but e.preventDefault prevent it from doing it
        e.preventDefault();

        //we dont need to give it a id as json provides it with unique id
        const blog={title,body,author};
        console.log(blog);

        setIsPending(true);
        fetch('http://localhost:8000/blogs/',{
            method:'POST',
            headers:{ "Content-Type":"application/json" },
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            // go back to one to history
            // history.go(-1);


            //forwards to home page
            history.push('/')
        })     
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            {/* if we click submit button it submits it to the form with the given action so we use onSubmit  */}
            <form onSubmit={handleSubmit}>
                <label >Blog Title</label>
                <input 
                type="text"
                required
                //agr usestate jo upr h usme kch likhdege to vo fix hojayega aur uske alawa kch ni likh payege pr hmlg ko setTitle ko waisa krna h 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                 />
                <label>Blog Body:</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                >   
                </textarea>
                <label >Blog Author</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog....</button>}
                
            </form>
        </div>
     );
}
 
export default Create
