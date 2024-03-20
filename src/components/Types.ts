export interface Attributes{
    name:String,
    stock:number,
    prix:number,
}
export type Entry = Record<string,Attributes>

export interface Item_interface{
    data:Attributes,
    addToBag:(data:Attributes)=>void
}
export interface Bag_item_interface{
    data:Attributes | null,
    putAway:(data:Attributes)=>void
}