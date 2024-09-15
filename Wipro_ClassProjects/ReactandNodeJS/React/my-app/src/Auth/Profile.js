import React,{useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logout from './Logout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Card, Row, Col, Container } from 'react-bootstrap';

function Profile(){

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const [username,setUsername]=useState('');

    const location=useLocation();
    const token=location.state?.token;

    useEffect(()=>{
        console.log(token);
        fetch('https://freetestapi.com/api/v1/books')
        .then((response)=>{
            
            if(!response.ok){
                throw new Error('Network Error')
            }
            
            return response.json();
    })
    .then((data)=>{
        setData(data);
        setUsername(localStorage.getItem('username'));
        setLoading(false);
    })
    .catch((error)=>{
        setError(error);
        setLoading(false);
    })
},[]);

if(loading) return <p>Loading...</p>;
if(error) return <p>Error: {error.message}</p>

    return(
        <Container>
            <div style={{textAlign:'right'}}>
                <h5>Welcome {username}</h5>
                <h6><Logout/></h6>
            </div>
      <div className="text-center my-4">      
       
        <h1 style={{color:'ThreeDDarkShadow'}}>Book Details</h1>
      </div>
      
      <Row>
        {data.map((book) => (
          <Col key={book.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100" style={{ overflow: 'hidden' }}>             
              <Card.Body>
                <Card.Title style={{ color: 'blue' }}>{book.title}</Card.Title>
                <Card.Text>
                  <small style={{color:'red',fontSize:'15px',fontWeight:'bold'}}>{book.genre.join(' / ')}</small>
                </Card.Text>
                <Card.Text style={{color:'darkgoldenrod'}}><b>{book.author}</b></Card.Text>
                <img src={book.cover_image} className='img-responsive' style={{width:'100%',height:'100px'}}/>
                <Card.Text style={{ textAlign: 'left',fontWeight:'bold' }}>{book.description}</Card.Text>
                <div className="text-end">
                  <FontAwesomeIcon icon={faHeart} style={{ color: 'darkred', fontSize: '20px' }} onClick={() => alert("Added To Favourites")} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    )
}

export default Profile;
