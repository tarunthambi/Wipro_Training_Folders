// CourseCard Component
import './RoomCard.css';
import React from 'react';

const RoomCard = ({ course })=>{
    return(
        <div id='div'>
            <img id='rimg' src={course.image} alt={course.title}/>
            <h3 id='cardh3'>{course.title}</h3>
            {/* <p>{course.description}</p> */}
        </div>
    );
};


export default RoomCard;