import React, { useEffect, useState } from "react"
import BagItem from "./BagItem"
import styled from "styled-components"
import { Attributes, Bag_item_interface} from "./Types"

const ShopBag=({data,putAway}:Bag_item_interface)=>{
    const [bag,setBag]=useState<any>({})
    useEffect(()=>{console.log("bag",bag)},[bag])
    useEffect(()=>{
        console.log("SB_data",data)
        
        if(data!==null){
        const _name=data.name
        const _bag={...bag}
        if(bag.hasOwnProperty(_name)){
            _bag[_name as keyof Attributes].stock+=data.stock // increment or decrement
            if(_bag[_name as keyof Attributes].stock<=0){
                delete _bag[_name as keyof Attributes]
            }
        }else{
            _bag[_name as keyof Attributes]=data
        }
        setBag(_bag)
        }
    },[data])
    
    const list_bag: { name: string; stock: number; prix:number }[]=[]
    Object.keys(bag).forEach(key => list_bag.push(bag[key]))
    return(
        <Bag>
            {
            list_bag.map((val,i)=>{
                if(val!==null){
                return(
                <BagItem key={i} data={val} putAway={putAway}/>
                )}
            })
            }
        </Bag>
    )
}

export default ShopBag

const Bag=styled.div`
width:200px;
height:100vh;
position:absolute;
background-color: #ffffffba;
right: 0px;
`