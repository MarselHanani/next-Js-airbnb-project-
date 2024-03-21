import { LiveData } from "../types/app";
import { getLive } from "../utils/api";
import MainHeader from "./Header/MainHeader";
import LiveCard from "./LiveCard";

const Live = async () => {
  const LiveData: LiveData = await getLive();
  return (
    <section className="pt-6">
      <div className="container">
        <MainHeader title="Live Anywhere" />
      </div>
      <div className="container">
        <div className="flex space-x-3 overflow-scroll no-scrollbar p-3 -ml-3">
          {LiveData.map((item, index) => {
            return <LiveCard key={index} title={item.title} img={item.img} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Live;
