import React from 'react'

const MenuCard = ({menuData}) => {
    //console.log(menuData);
  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((curr) =>{
        return(
            <>
            <div className='card-container'>
            <div className='card'>
                <div className='card-body'>
                <span className='card-number card-circle sublet'>{curr.id}</span>
                <span className='card-author sublet'>{curr.category}</span>
                <span className='card-title'>{curr.name}</span>
                <span className='card-description sublet'>{curr.description}</span>
                <div className='card-read'>Read</div>
                </div>
                <img src={curr.image} alt="image" className='card-media' />
                <span className='card-tag sublet'  >Order Now</span>
            </div>
       </div>
        </>
            );
            
            })}
    </section>
    </>  
    );
}

export default MenuCard
