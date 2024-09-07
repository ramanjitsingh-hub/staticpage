import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero_section";
import Car from "./components/car/car";
import DemoSlider from "./components/car/car";
import dataSlider from "../slider-data.json";
import CustomTxt from "./components/customtxt";


export default function Home() {
  return (
    <>
  <Navbar/>
  <Hero/>
  
  <DemoSlider data={dataSlider}/>
  <CustomTxt/>
  </>
  );
}
