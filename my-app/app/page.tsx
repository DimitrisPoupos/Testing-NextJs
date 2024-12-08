import Image from "next/image";
import AddToCart from "./addToCart";
export type MenuItem = { price: number; title: string;};
let menu: MenuItem[] = [
  { "price": 2, "title": "coffee" },
  { "price": 2, "title": "toast" },
  { "price": 1, "title": "water" }
];



export default function Home() {

  return (
    <div className="flex items-center" >
      <ul className="space-y-4">
        {menu.map((items) =>{
          return(
            <>
            <li className="p-2 border" >{items.title} {items.price} <AddToCart item = {items} /> </li>
            </>
          )
        })}
      </ul>
    </div>
  );
}
