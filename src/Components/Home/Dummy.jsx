import React,{useState} from 'react'
 
const Menu = () => {
    const Main_Course=[
        {
            title:'Chicken Avocado 1',
            id:'m1',
            price:'$10',
            description: 'Course description',
            

        },
        {
            title:'Chicken Avocado 2',
            id:'m2',
            price:'$10',
            description: 'Course description',

        },
        {
            
            title:'Chicken Avocado 3',
            id:'m3',
            price:'$10',
            description: 'Course description',

        },
        {
            title:'Chicken Avocado 4',
            id:'m4',
            price:'$10',
            description: 'Course description',

        },
        {
            title:'Chicken Avocado 5',
            id:'m5',
            price:'$10',
            description: 'Course description',

        },
         

     ] ;   

     const[toggled,setToggled]=useState();
    return (
        <div className="menu" id='menu'>
             <div className='wrapper'>
                 {
                    Main_Course.map(({title,id})=>{
                        return <button className="button"
                            onClick={()=>setToggled(id)}
                            >{title}</button>
                    })
                 }
             </div>
             {
                Main_Course.map(({title,price,description,id})=>{
                    return<>
                    {toggled===id?(
                        <div className="toggleContent">
                        <h2 className='toggleTitle'>{title}</h2>
                        <div className='content'>{price}
                        <p>{description}</p>
                        </div>
                    </div>
                    ):null}
                        
                    </>
                })
             }
        </div>
    )
}

export default Menu