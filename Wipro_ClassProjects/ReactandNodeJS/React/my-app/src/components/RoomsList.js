// CousreList Component

import React, { Component } from "react";
import RoomCard from "./RoomCard.js";

class CourseList extends Component{
    constructor(){
        super();
        this.state={
            courses:[
                {id:1,title:'Kitchen',image:'../images/kitchen'},
                {id:2,title:'Bath',image:'../images/bath'},
                {id:3,title:'Bedroom',image:'../images/bedroom'},
                {id:4,title:'Dining',image:'../images/dining'},
                {id:5,title:'Exterior',image:'../images/exterior'},
                {id:6,title:'Living',image:'../images/living'},
                {id:7,title:'Outdoor',image:'../images/outdoor'},
                {id:8,title:'Wardrobe',image:'../images/wardrobe'}
            ]
        };
    }

    render(){
        return(
            <div style={courseListStyle}>
                {this.state.courses.map(course=>(
                    <RoomCard key={course.id} course={course}/>
                ))}
            </div>
        )
    }
}

const courseListStyle={
    display:'flex',
    flexWrap:'wrap',
    gap:'20px',
    justifyContent:'center'
};

export default CourseList;