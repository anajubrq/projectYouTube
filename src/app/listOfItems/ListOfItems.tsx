import { INavigationMenuProps } from "../navigationMenu/NavigationMenu";

export default function ListOfItems({ isOpen }: INavigationMenuProps) {

  const items = new Array(20).fill("Item");

  return (
    <div
      className={`fixed z-10 w-full h-[56px] mt-[56px] transition-all duration-300 ease-in-out bg-customGray ${
        isOpen ? "ml-[240px]" : "ml-0"
      }`}
    >
      <ul className="flex justify-between p-[10px]">
        {items.map((item, index) => (
          <li
            key={index}
            className="
              w-[65px] h-[38px] 
              bg-colorBoder rounded-[32px] 
              flex justify-center items-center 
              border border-colorFont
              transition-colors duration-300 
              hover:bg-white 
              active:bg-white 
              hover:text-black 
              active:text-black 
              text-white
            "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
