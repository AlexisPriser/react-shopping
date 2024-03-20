import React from "react"
import styled from "styled-components"
import { Bag_item_interface} from "./Types"
const BagItem=({data, putAway}:Bag_item_interface)=>{

    const handleClick=(e:any)=>{
        console.log(putAway)
        if(data){
        putAway(data)
        }
    }
    if(data){
    return(
        <ItemWrap onClick={handleClick}>
            
            <p>{data.name}</p>
            <p>stock: {data.stock}</p>
            <p>prix: {data.prix}€</p>
            
        </ItemWrap>
    )}
}

export default BagItem

const ItemWrap=styled.div`
background-color: white;
border: solid black;
width: 100px;
display: inline-block;
margin:5px;
`