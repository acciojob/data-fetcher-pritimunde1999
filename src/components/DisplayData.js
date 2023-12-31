import React, { useEffect, useState } from "react";
import axios from "axios";


const DisplayData = () => {
    const[data,setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(()=>{
        setLoading(true);
        axios.get(' https://dummyjson.com/products')
        .then(response=>response.data)
        .then((res)=>{
           setData(res);
           setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    },[])

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>An error occurred: {error.message}</div>;
    }
  
    if (!data) {
      return <div>No data found</div>;
    }

    

  return (
    <div>
        <h1>Data Fetched from API</h1>
        {
            data && (
              <pre>
                 {JSON.stringify(data,null,2)}
              </pre>
            )
        }
    </div>
  )
}

export default DisplayData


// Here's what each parameter in JSON.stringify does:

// data: This is the object you want to convert into a JSON string.

// null: The second parameter is a replacer function or an array that specifies how the values in the JSON string should be transformed before being included in the result. In this case, null is used, which means no transformation is applied, and all properties of the object are included in the string.

// 2: The third parameter is the number of spaces to use for indentation when formatting the JSON string. In this case, 2 spaces are used to make the JSON more readable.
