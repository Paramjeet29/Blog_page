// import { useState,useEffect } from "react";
import BlogList from './BlogList'
import useFetch from "./useFetch";

// USESTATE WITH PROPS
const Home = () => {
   
    // const [blogs,setBlogs]=useState([
    // { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    // { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    // { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);

//    const [name,setName]=useState('mario');


    //without custom hook
    //when we want to fetch form api we use null
    // const [blogs,setBlogs]=useState(null);
    // const [isPending,setIsPending]=useState(true);
    // const [error,setError]=useState(null);


    //useEffect runs on every render as the state changes but we dont want to run it on every render so we use dependencies
    // useEffect(()=>{
    //     console.log("it ran!!!");
    // },[]);
    // [] makes it render only first time

    // useEffect(()=>{
    //     console.log('it ran')
    // },[name]);
    //if we click the button to change name then it will use useEffect


    // useEffect(()=>{
    //     fetch('http://localhost:8000/blogs')
    //     //res is response object that we got from fetch, we have to perform to get data from res 
    //     .then(res =>{
    //         return res.json();
    //     })
    //     //the res.json() return json which is also a promise so we again use .then to get data.
    //     //the data will be the array of js that is written in db.json file
    //     .then((data)=>{
    //         setBlogs(data)
    //     })
    // },[]);



    //---------without using custom hook------
    // we used ispending while the api is fetched till then the page shows loading
    // useEffect(()=>{
    //     fetch('http://localhost:8000/blogs')
    //     .then(res=>{
    //         //we got the fetch right so we get ok=true
    //         //if the end point is faulty or doesnt exist then it will return ok=false;
    //         if(!res.ok){
    //              throw Error('could not fetch the data for that resource');
    //         }
    //         return res.json();
    //     })
    //     .then((data)=>{
    //         setBlogs(data);
    //         setIsPending(false);
    //         setError(null);
    //     })
    //     //it will catch connection error
    //     .catch(err =>{
    //         setError(err.message);
    //         setBlogs(null);
    //         setIsPending(false);
    //     })
    // },[]);

  
    //--------WITH  CUSTOM HOOK----------
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');



    //we have created handleDelete here so we can pass it as a prop to the BlogList component so that the data cannot be permanently deleted
    //so we use setBlogs to update the blog
    // const handleDelete=(id)=>{
    //     const newBlogs=blogs.filter(blog=>blog.id!==id);
    //     setBlogs(newBlogs);
    // }

    return ( 
    <div className="home">

        {/* if we use the below code it will show error because in the BlogList.js file it will pass null first because of the usestate we have initialised with null */}
        {/* <BlogList blogs={blogs} title={"All Blogs!"} handleDelete={handleDelete}/> */}

        {/* to overcome the null issue we use && */}
        {/* {blogs && <BlogList blogs={blogs} title={"All Blogs!!"} handleDelete={handleDelete}/>} */}

        {/* {blogs && <BlogList blogs={blogs} title={"All blogs!!"}/>} */}
        {/* blogs={blogs} is a prop */}


        {error && <div>{ error }</div>}
        {isPending && <div>loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!!" />}

        {/* <BlogList blogs={blogs.filter((blog)=> blog.author==='mario')} title={"Mario's Blogs!"}/> */}
        {/* filter out only blogs with author mario . blog is just a iterator*/}

        {/* <button onClick={()=>setName('luigi')}>Change name</button>
        <p>{ name }</p> */}
    </div>
     );
}
 
export default Home;

//props are way to pass from parent component to child component 
//use of props
// 1.we dont have to copy the usestate part of code to BlogList File. 
// 2. it becomes usable at both Home and BlogList file











// ------USESTATE USING BUTTONS--------

// const Home = () => {
//     const handleClick=()=>{
//         console.log("hello ");
//     }
//     const handleClickAgain=(name)=>{
//         console.log('hello '+name);
//     }

//     return (  
//         <div className="home">
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click Me</button>
//             <button onClick={() =>{
//                 handleClickAgain('param');
//             }}>Click me again</button>
//         </div>
//     );
// }
// export default Home;

//we dont use handleClick() coz we want only reference and not invoke it
// () represents anonymous function







// ----------USESTATE WITH OUTPUTTING LIST AND WITHOUT USING PROPS ----------

// const Home = () => {
//  const[blogs,setBlogs]=useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//  ]);

//     return ( 
//         <div className="home">
//             {/* blog is just iterator iterator. Id must be unique*/}
//             { blogs.map(blog => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2>{blog.title}</h2>
//                     <p>written by {blog.author} </p>
//                 </div>
//             ))}
//         </div>
//      );
// }
// export default Home;













//-------EXTRA-------
//useState to make things responsive
// const[name,setName]=useState('Preet) name is used coz of Preet 
//setName is function in which set is used aise hi and Name is the first parameter



//-------USESTATE TO CHANGE NAME ON EVERY CLICK OF BUTTON----------
// const Home = () => {
//     // let name='Param';
//     const[name,setName]=useState('Preet');
//     const[count,setCount]=useState(0);
//     const names=['Anshu','Param','Babli'];

//     const handleClick = ()=>{
//         setCount(count+1);
//         if(names.length>count){
//         setName(names[count]);
//         }
//         else{
//             setCount(0);
//             setName('Preet');
//         }
//     }
    
    
//     return ( 
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{name}</p>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//      );
// }
 
// export default Home;