// create your App component here
import React, {useState, useEffect}from "react";

function App () {
    const [image, setImage]= useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => {
            setImage(data.image)
            setIsLoading(false)
        })
        
    },[])
    
return(
    <>
    {!isLoading ? <p>Loading...</p>: (
        <img src={image} alt="Random Dog"></img>
    ) }
    
    </>
)
}
export default App