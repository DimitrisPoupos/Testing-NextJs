"use client";
import { MenuItem } from "./page";

type Props = { item: MenuItem };

export default function AddToCart({ item }: Props) {
  let cart: MenuItem[] = [];
  function handleClick() {
    cart.push(item);
    console.log(cart);
  }
  return (
    <button className=" hover:text-green-400 " onClick={handleClick}>
      Add
    </button>
  );
}
