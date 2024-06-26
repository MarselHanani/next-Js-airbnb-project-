import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:-[400px] lg:h-[500px] xl:[500px] ">
      <Image
        src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
        alt="home-image"
        className="object-cover object-left"
        fill
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button
          type="button"
          className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold"
        >
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
