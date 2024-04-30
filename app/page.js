"use client";

import { useState } from "react";

import Container from "../components/Container";
import Frame from "../components/Frame";
import ImageSlider from "../components/ImageSlider";
import TextSlider from "../components/TextSlider";
import Header from "../components/Header";

const artists = [
 {
  name: "Taylor Swift",
 },
 {
  name: "Beyoncé",
 },
 {
  name: "Adele",
 },
 {
  name: "Ariana Grande",
 },
 {
  name: "Rihanna",
 },
 {
  name: "Lady Gaga",
 },
 {
  name: "Katy Perry",
 },
 {
  name: "Nicki Minaj",
 },
 {
  name: "Dua Lipa",
 },
 {
  name: "Lorde",
 },
];

const Home = () => {
 const [activeIndex, setActiveIndex] = useState(0);
 return (
  <main>
   <Frame>
    <Container>
     <Header />
     <ImageSlider artists={artists} activeIndex={activeIndex} />
     <TextSlider artists={artists} activeIndex={activeIndex} />
     <button
      onClick={() => {
       setActiveIndex(activeIndex - 1);
      }}
     >
      Previous
     </button>
     <button
      onClick={() => {
       setActiveIndex(activeIndex + 1);
      }}
     >
      Next
     </button>
    </Container>
   </Frame>
  </main>
 );
};
export default Home;
