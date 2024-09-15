//BookDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = ()=>
{
    const {id} =useParams();

    return(
        <div>
            <h2>Book Details for {id}</h2>

        </div>
    )
}

export default BookDetails;