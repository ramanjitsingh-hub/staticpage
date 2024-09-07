import Image from "next/image";
import Logo from "../assets/PP.svg"
export function Navbar(){
return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px]">
   <div>
    <Image src = {Logo} alt = "logo" width = {50} height = {50}/>
   </div>
    <div className="font-bold text-pink-400 text-2xl lg:align-top" >
        Pink Parcel
    </div>    
    </nav>
)
}