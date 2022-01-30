import React from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';



function GetId() {

    const { id } = useParams();
    console.log(id);

    return (
        <div>
            <ItemDetail itemId={id} />
        </div>
    );
}

export default GetId;