import React, { useEffect, useState } from "react"
import Item from "./Item"
import styled from "styled-components"
import ShopBag from "./ShopBag"
import { Attributes } from "./Types"

const item_base={
    pomme:{name:"pomme",stock:5,prix:1},
    banane:{name:"banane",stock:10,prix:2},
    abrico:{name:"abrico",stock:50,prix:1},
    raisin:{name:"raisin",stock:4,prix:2},
    mangue:{name:"mangue",stock:6,prix:3},
    ananas:{name:"ananas",stock:3,prix:3},
    cerise:{name:"cerise",stock:3,prix:3},
}
const Shop=()=>{
    const [items,setItems]=useState<any>(undefined)
    const [itemList,setItemList]=useState<any[]>([])
    const [data,setData]=useState(null)
    const getItem=(data: any) => {
        const _items={...items}
        const _data={...data}
        _items[_data.name].stock-=1
        _data.stock=1
        setData(_data)
    }

    const putAway=(data: Attributes) => {
        console.log("putAway data",data)
        
        const _items={...items}
        const _data={...data}
        _items[_data.name as keyof Attributes].stock+=1
        _data.stock=-1
        setData(_data as any)
    }

    useEffect(()=>{ 
        if(items===undefined){
            setItems(item_base)
        }else{
            const _item_list: { name: string; stock: number; prix:number }[]=[]
            Object.keys(items).forEach(key => _item_list.push(items[key]))
            setItemList(_item_list)
        }
    },[items])

    return(
    <div>
    <ShopBag data={data} putAway={putAway}/>
    <ShopWrap>
        <ListWrap>
            {
            itemList.map(
                (val:Attributes,i)=>{
                    return <Item key={i} data={val} addToBag={getItem}/>
                }
            )
            }
        </ListWrap>
    </ShopWrap>
    
    </div>
    )
}

export default Shop

const ShopWrap=styled.div`
display: flex;
flex-wrap: wrap;
background-color: aquamarine;
justify-content: center;
padding: 0px 20% 0px;
height: 100vh;
`
const ListWrap=styled.div`
display:flex;
flex-wrap:wrap;
height: fit-content;
justify-content: left;
`