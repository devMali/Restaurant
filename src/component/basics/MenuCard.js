import React from 'react'

const MenuCard = ({menuData}) => {
    //console.log(menuData);
  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((curr) =>{

            const {id,category,name,description,image} = curr;   //DESTRUCTURE

        return(
            <>
            <div className='card-container'>
            <div className='card'>
                <div className='card-body'>
                <span className='card-number card-circle sublet'>{id}</span>
                <span className='card-author sublet'>{category}</span>
                <span className='card-title'>{name}</span>
                <span className='card-description sublet'>{description}</span>
                <div className='card-read'>Read</div>
                </div>
                <img src={image} alt="" className='card-media' />
                <button className='btn btn-success card-tag sublet'>Order Now</button>
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
