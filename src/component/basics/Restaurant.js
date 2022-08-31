import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
const Restaurant = () => {

    const [menuData,setMenuData] = useState(Menu);
    const filterItem = (cat) =>
    {
      const updated = Menu.filter((curr) =>
      {
        return curr.category===cat;
      });
      setMenuData(updated);
    };
  return (
     <>
     <div className='bg'>
     <h1>Dev Restaurant <img src="images/logo.png" className="myimg" alt="" /></h1>
     <nav className="navbar mynav navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">Category</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <button className='btn btn-group__item' onClick={ () => filterItem("breakfast")}>Breakfast</button>
        </li>
        <li className="nav-item">
            <button className='btn btn-group__item' onClick={ () => filterItem("lunch")}>Lunch</button>
        </li>
        <li className="nav-item">
        <button className='btn btn-group__item' onClick={ () => filterItem("evening")}>Evening</button>
        </li>
        <li className="nav-item">
        <button className='btn btn-group__item' onClick={ () => filterItem("dinner")}>Dinner</button>
        </li>
        <li className="nav-item">
        <button className='btn btn-group__item' onClick={ () => setMenuData(Menu) }>All</button>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
     <MenuCard menuData={menuData}/>
     
     </div>
     </>
  )
}

export default Restaurant
