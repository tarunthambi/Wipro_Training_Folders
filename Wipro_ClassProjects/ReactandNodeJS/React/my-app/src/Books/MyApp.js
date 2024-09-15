import React,{useState,useEffect} from 'react';
import './Styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const MyApp=()=>{

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetch('https://freetestapi.com/api/v1/books')
        .then((response)=>{
            
            if(!response.ok){
                throw new Error('Network Error')
            }
            
            return response.json();
        })
        .then((data)=>{
            setData(data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error);
            setLoading(false);
        })

    },[]);


if(loading) return <p>Loading...</p>;
if(error) return <p>Error: {error.message}</p>;

   

return(
    <div>
        <h2 style={{textAlign:'center',color:'black'}}>Book Details</h2>
        <div className='card-container'>
            {data.map((book)=>(
                <div key={book.id} className='card'>
                    <h2 style={{color:'blue'}}>{book.title}</h2>
                    <p><b>{book.author}</b></p>
                    <img src={book.cover_image} style={{height:'100px',width:'150px'}}/>
                    <p style={{textAlign:'left'}}>{book.description}</p>
                    {/* <button>Add to Favourite</button> */}
                    <FontAwesomeIcon icon={faHeart} style={{color:'darkred',fontSize:'20px'}} onClick={()=>{alert("Added To Favourites")}}/>
                </div>
            ))}
        </div>
    </div>
)

};

export default MyApp;