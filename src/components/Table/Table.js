import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { truepop, setpost, setindex } from '../../reducer';
import Popup from '../Popup.js/Popup';
import profile from '../../assests/profile.png'
import './table.css'
const Table = () => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => {
    return state.popup
  })

  console.log(popup);
  const [value, setvalue] = useState('');
  // const [fil,setfilter] = useState('');
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      dispatch(setpost(data))
    }).catch((err) => { console.log(err) })
  }, [])
  const handlechange = (e) => {
    setvalue(e);
  }

  return (
    <div className='table'>
      <div className='table-header'>
        <div className='table-header-logo'>
          <p>Contact details</p>
        </div>
        <div className='table-header-img'>
          <img src={profile} width='40px' height='40px'></img>
          <p>Admin</p>
        </div>
      </div>
      <div className='table-content'>
        <div className='table-aside-left'>
          <div className='logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
            </svg>
          </div>
          <div className='logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cloud-plus-fill" viewBox="0 0 16 16">
              <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm.5 4v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
            </svg>
          </div>
          <div className='logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </div>
          <div className='logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </div>
          <div className='logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
          </div>
        </div>
        <div className='table-aside-right'>
          <div className='table-search'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input className='search' size='30' type='text' placeholder='Search' value={value} onChange={(e) => { handlechange(e.target.value) }}></input>
          </div>
          <div className='table-table'>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  popup.post.
                    filter((item) => {
                      return value.toLowerCase === '' ? item : item.name.toLowerCase().includes(value)
                    }).map((items, index) => {
                      return <tr key={index} onClick={() => { dispatch(truepop()); dispatch(setindex(index)); console.log(popup); }}>
                        <td>ADFY000{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.username}</td>
                        <td>{items.email}</td>
                      </tr>
                    })
                }
              </tbody>
            </table>
          </div>

        </div>

      </div>

      {
        popup.popup ?
          <Popup /> : null
      }
    </div>
  )
}

export default Table
