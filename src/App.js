import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Cards from './Card';
import  axios  from 'axios';
import './App.css'



function App() {
  const [list, setList] = useState()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getData = setTimeout(() => {
      axios
      .get(`https://dummyjson.com/products/search?q=${search}&limit=12`)
      .then((response) => {
        console.log(response)
        setList(response?.data?.products)
      });
    }, 1000)

    return () => clearTimeout(getData)
  }, [search])

  return (
    <div className='Main_container'>
      <div className='Input_list'>
      <Form.Label htmlFor="inputPassword5">Search Products</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        onChange={(e) => setSearch(e.target.value)}
        aria-describedby="passwordHelpBlock"
      />
      </div>

      {
        list && list.length > 0 &&
        <div className='list' >
          {
            list.map((item, i) => {
              return (
                <Cards key={i} data={item} />
              )
            })
          }
        </div>
      }
    </div>
  );
}

export default App;
