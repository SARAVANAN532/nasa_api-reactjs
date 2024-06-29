import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
   
const [data,setdata] = useState(null)


  const[showsidebar, setshowsidebar] = useState(false)

  function toggle(){
    setshowsidebar(!showsidebar)
  }

  useEffect(() => {
 async function fetchapi (){
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  
  const url = 'https://api.nasa.gov/planetary/apod' +
  `?api_key=${NASA_KEY}`

const today =(new Date()).toDateString()
const localkey = `NASA-${today}`


if (localStorage.getItem(localkey)){
  
const api = JSON.parse(localStorage.getItem(localkey))
setdata(api)
console.log('Fetched from Cache')
return 
}

localStorage.clear()

  try {
    const res = await fetch (url)
    const api = await res.json()
    console.log('DATA\n',api)
    localStorage.setItem(localkey,JSON.stringify(api))
    console.log('Fetched from API')
    setdata(api)
   
  }
  catch(err){
    console.log(err.message)
  }
 }

fetchapi()
  },[])

  return (
    <>
      {data ?(<Main data = {data} />):(
        <div className="loading">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showsidebar && ( <Sidebar data={data} toggle = {toggle} />)}

    {data? (<Footer data = {data} toggle = {toggle}/>):(
      <div></div>
    )}
    </>
  );
}

export default App;
