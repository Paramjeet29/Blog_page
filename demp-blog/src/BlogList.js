import { Link } from "react-router-dom";

//------we can use directly the properties that we want to use instead of storing it in a const-----
// const BlogList = ({blogs,title,handleDelete}) => {
//     return (
//         <div className="blog-list">
//             <h2>{title}</h2>
//         {/* blog is just iterator . id must be unique*/}
//         { blogs.map((blog) => (
//             <div className="blog-preview" key={blog.id}>
//                 <h2>{blog.title}</h2>
//                 <p>written by {blog.author} </p>
//                 <button onClick={()=> handleDelete(blog.id)}>delete blog</button>
//             </div>
//         ))}
//         </div>
//       );
// }
// export default BlogList;



const BlogList = ({blogs,title}) => {
    
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
        {/* blog is just iterator . id must be unique*/}
        { blogs.map(blog => (
            <div className="blog-preview" key={blog.id}>
                {/* these are not single quotes instead backticks */}
                <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author} </p>
                </Link>
            </div>
        ))}
        </div>
      );
}
export default BlogList;






// const BlogList = (props) => {

//     const blogs=props.blogs;
//     const title=props.title;
//     return (
//         <div className="blog-list">
//             <h2>{title}</h2>
//         {/* blog is just iterator . id must be unique*/}
//         { blogs.map((blog) => (
//             <div className="blog-preview" key={blog.id}>
//                 <h2>{blog.title}</h2>
//                 <p>written by {blog.author} </p>
//             </div>
//         ))}
//         </div>
//       );
// }
//export default BlogList;




