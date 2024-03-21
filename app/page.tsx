import Image from "next/image";
import Banner from "./Components/Banner";
import Explore from "./Components/Explore";
import Live from "./Components/Live";
import GreatestOutdoores from "./Components/GreatestOutdoores";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";

export default function Home() {
  return (
    <>
    <Header/>
      <main>
        <Banner />
        <Explore />
        <Live />
        <GreatestOutdoores
          img="https://images.unsplash.com/photo-1707147231430-7870dda96138?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
          title="The Greatest Outdoor"
          description="wishlist curated by airbnb"
          linkText="Get Inspired"
        />
      </main>
      <Footer/>
    </>
  );
}
