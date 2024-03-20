import React from "react"
import styled from "styled-components"

import { Item_interface } from "./Types"
const Item=({data,addToBag}:Item_interface)=>{
    const handleClick=(e:any)=>{
        if(data.stock>0){
        addToBag(data)
        }
    }
    return(
        <ItemWrap onClick={handleClick}>
            <p>{data.name}</p>
            <p>stock: {data.stock}</p>
            <p>prix: {data.prix}€</p>
        </ItemWrap>
    )
}

export default Item

const ItemWrap=styled.div`
background-color: white;
border: solid black;
width: 150px;
display: inline-block;
margin:5px;
`