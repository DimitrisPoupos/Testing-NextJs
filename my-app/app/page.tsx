import Image from "next/image";
import AddToCart from "./addToCart";

export type MenuItem = { price: number; title: string };

let menu: MenuItem[] = [
  { price: 2, title: "coffee" },
  { price: 2, title: "toast" },
  { price: 1, title: "water" },
];

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="p-7 bg-neutral-700 rounded-md">
        <ul className="space-y-4">
          {menu.map((items) => {
            return (
              <>
                <li
                  draggable="true"
                  key={items.title}
                  className="flex gap-5 justify-center rounded-md p-2 border text-center w-52"
                >
                  {items.title} {items.price} <AddToCart item={items} />{" "}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
