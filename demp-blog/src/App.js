import Navbar from './Navbar';
import Home from'./Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


//for static page i.e without react routing
// function App(){
//   return(
//       <div className="App">
//         <Navbar />
//         <div className="content">
//           <Home/> 
//         </div>
//       </div>
//   );
// }

// with react routing 
function App(){
  return(
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          {/* it surrounds all the route inside it */}
          <Switch>
            <Route exact path="/">
            <Home/>
            </Route>
            <Route path="/create">
            <Create/>
            </Route>
            {/*---- /:name this is the syntax ----*/}
            <Route path="/blogs/:id">
            <BlogDetails/>
            </Route>
            {/* the below path is written in bottom so that it doesnt matches the first. */}
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
  export default App;

// function App() {
//   return (
//     <div className="App">
//       <div className="content">App components</div>
//     </div>
//   );
  //it is not html but it is jsx and a transpiler converts jsx to html
//}

// function App(){
//   const title="Welcome to the new blog ";
//   const likes=50;
//   const link="http://www.youtube.com";

//   // const person={name:"yoshi",age:30}; this will return error coz boolean and objects cant 
//   return(
//     <div className="App">
//      <div className="component">
//       <h1>{title}</h1>
//       <p>Liked {likes} times</p>
//       <p>{Math.floor(Math.random()*10)}</p>
//       <a href={link}>Youtube link</a>
//      </div>
//     </div>
//   )
// }



//component must start with capital letter
// the major difference in jsx and html is we use camel case to give class name