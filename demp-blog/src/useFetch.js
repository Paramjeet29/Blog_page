
import{ useState,useEffect } from 'react';


//custom hook need to start with use inorder to work
const useFetch=(url)=> {

    //changes blogs  to data for future use 
    const[data,setData]=useState(null);
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState(null);
    const [shouldAbort, setShouldAbort] = useState(false);

//without abort controller 
//     useEffect(()=> {
//         fetch(url)
//         .then(res=>{
//             if(!res.ok)
//             {
//                 throw Error("could not fetch the data");
//             }
//             return res.json();
//         })
//         .then((data)=>{
//             setData(data);
//             setIsPending(false);
//             setError(null);
//         })
//         .catch(err=>{
//             setIsPending(false);
//             setError(err.message);
//             setData(null);
//         })
//      return {data,isPending,error};
//     },[url]);
// }

useEffect(()=>{
        const abortCont=new AbortController();
        setTimeout(() => {
    //now abortCont is associated with the signal
    fetch(url, {signal: abortCont.signal})
    .then(res=>{
        if(!res.ok)
        {
            throw Error("could not fetch the data");
        }
        return res.json();
    })
    .then(data =>{
        setData(data);
        setIsPending(false);
        setError(null);
    })
    .catch(err=>{
        if(shouldAbort){
            console.log('fetch aborted');
        }
        else{
            setIsPending(false);
            setError(err.message);
            setData(null);
        }
    })
}, 1000); 
    return () =>{
        setShouldAbort(true);
        abortCont.abort();
    }
},[url,shouldAbort]);
    return {data,isPending,error};
}
export default useFetch;