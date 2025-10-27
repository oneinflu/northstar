import Hero from "@/components/Hero";
import Placements from "@/components/Placements";
import TransitionStories from "@/components/TransitionStories";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <Placements/>
      <TransitionStories/>
    </>
  );
}
