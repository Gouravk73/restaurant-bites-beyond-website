import React, { useEffect, useState } from 'react'
 import Loader from'../Loader'
import './Blog.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
const url ='https://api.edamam.com/search?q=';
const api='&app_id=e9bfcc42&app_key=4b93c61044e43d6fbf480c8bf8711ac3&from=0&to=20';


// const query='indian';
const Blog = () => {
    const [recipeData,setRecipeData] =useState([]);
    const [search ,setSearch]=useState('');
    const[selectedRecipe,setSelectRecipe] = useState('indian food');
    const [loading, setLoading] = useState(false);
    const [curPage,setCurpage]=useState(1);
    const itemPerPage=8;

    const activeTab=(val)=>{
        setSelectRecipe(val);

    }
    useEffect(() => {
        const  fetchRecipe= async()=>{
            const query = search || selectedRecipe;
            setLoading(true);
            const {data}  = await axios.get(`${url}${query}${api}`);
            setRecipeData(data.hits);
            setLoading(false);
        }
        fetchRecipe();
    },[selectedRecipe,search])

    const handlePagination=(pageNumber)=>{
        setCurpage(pageNumber);
    }
    const handleSearching=(e)=>{
        setSearch(e.target.value);
     }

    const indLastItem=curPage* itemPerPage;
    const indFirstItem=curPage* itemPerPage -itemPerPage;
    const curRecipeData=recipeData.slice(indFirstItem,indLastItem);
    const totalPage= Math.ceil(recipeData.length / itemPerPage);


    return (
    <div className='blog'>
        <div className="blog-img"  >
            <h1>BITES&BEYOND</h1>
            <h2>BLOG</h2> 
        </div>
        <div className='blog-search-food-banner'>
            <h1>SEARCH FOOD </h1>
            <input type="text" onChange={handleSearching}/>
        </div>


            
        <div className="blog2">
            <div className="blog-content">
                {
                    loading?(<Loader/>)
                    :
                    curRecipeData.length>0?(
                        curRecipeData.map((item,ind)=>{
                            item=item.recipe
                            return <div key={ind}>
                                <Link to={item.url} target={'blank'}  >
                                     <LoadingImage src={item.image} alt={item.label} />
                                <h1>{item.label}</h1>

                                </Link>
                            </div>
                        })
                    ):(<p>No item found</p>)
                }
            </div>




            
            <div className="blog-meal-choice">
                <div className='blog-filter'>
                    <h2>Filter Recipes:</h2>
                    <p>Select which  recipe you are looking for :</p>
                </div>
               
               <div className="meal-type">
                    <h2>MEAL TYPE:</h2>
                    <MealType onClickInput={activeTab} val={'breakfast'}/>
                    <MealType onClickInput={activeTab} val={'lunch'}/>
                    <MealType onClickInput={activeTab} val={'dinner'}/>
                    <MealType onClickInput={activeTab} val={'soups'}/>
                    <MealType onClickInput={activeTab} val={'desserts'}/>
                    <MealType onClickInput={activeTab} val={'salads'}/>
                    <MealType onClickInput={activeTab} val={'snacks'}/>

            </div>
            <div className="meal-Cuisine-diet">
                    <h2>CUISINE TYPE:</h2>
                    <MealType onClickInput={activeTab} val={'Indian'}/>
                    <MealType onClickInput={activeTab} val={'Chinese'}/>
                    <MealType onClickInput={activeTab} val={'Mexican'}/>
                    <MealType onClickInput={activeTab} val={'Italian'}/>
                </div>
            <div className="meal-special-diet">
                    <h2>SPECIAL DIET:</h2>
                    <MealType onClickInput={activeTab} val={'vegan'}/>
                    <MealType onClickInput={activeTab} val={'vegetarian'}/>
                    <MealType onClickInput={activeTab} val={'non vegetarian'}/>
                    <MealType onClickInput={activeTab} val={'gluten free'}/>
                </div>

            </div>
            </div>
            <div className="pagination">
                {Array.from({ length: totalPage},(_,ind)=>(
                        <span 
                            key={ind}
                            className={curPage===ind+1 ? 'active' : ''}
                            onClick={() =>handlePagination(ind+1)}
                            >
                                {ind+1}
                            </span>
                    ))
                }
            </div>
        </div>
  )
}
const MealType=({onClickInput,val})=>{
   return <>
        <input onClick={()=>{onClickInput(val)}} type="radio" name='meal' id={val}/>
        <label htmlFor={val}>{val}</label> <br />
        </>}
const LoadingImage = ({ src, alt }) => {
    const [isLoading, setIsLoading] = useState(true);
  
    const handleImageLoad = () => {
      setIsLoading(false);
    };
  
    return (
      <div className='loading-image-container'>
        {isLoading && <div style={{display:'flex',justifyContent:'center',alignItems:'center', textAlign:'center',backgroundColor:'grey',width:'270px',height: "auto",borderRadius: '50px',color:'white'}} className='loading-animation'>Loading...</div>}
        <img
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
    );
  };

export default Blog