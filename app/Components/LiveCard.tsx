import Image from "next/image";
import { LiveData, LiveItem } from "../types/app";

type LiveDataProps = LiveItem;
const LiveCard = ({ img, title }: LiveDataProps) => {
  return (
    <div className="m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative w-80 h-80">
        <Image src={img} alt="explore card" fill />
      </div>
      <div>
        <h3 className="text-2xl mt-3">{title}</h3>
      </div>
    </div>
  );
};

export default LiveCard;
