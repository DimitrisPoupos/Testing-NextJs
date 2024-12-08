"use client"
import { MenuItem } from "./page";



type Props = { item: MenuItem; };

export default function AddToCart( {item} : Props) {
    let cart: MenuItem[] = [];
    function handleClick() {
        cart.push(item);
        console.log(cart);
    }
    return (
        <button onClick={handleClick} >Add</button>
    )
}