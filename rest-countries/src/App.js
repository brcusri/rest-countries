import {useEffect, useState} from 'react'
import axios from 'axios'
import { Routes, Route} from "react-router-dom"
import SingleCountry from './components/SingleCountry'
import Content from './components/Content'
import Nav from './components/Nav'
const url = 'https://restcountries.com/v2/all'
function App() {
  const [items,setItems] = useState([])
  const fetchCountries = async () =>{
    axios.get(url).then(response=>setItems([...response.data]))
  }
  useEffect(()=>{
    fetchCountries()
  },[])
  return(
    <div>
     <Nav/>
     <Routes>
       <Route exact path = '/' element={<Content countriesItems={items}/> }></Route>
       <Route path = '/singleCountry' element={<SingleCountry/> }></Route>
     </Routes>
    </div>)
}
export default App