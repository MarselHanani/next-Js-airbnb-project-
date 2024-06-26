import { ExploreData } from "../types/app";
import { getExplore } from "../utils/api";
import ExploreCard from "./ExploreCard";
import MainHeader from "./Header/MainHeader";

const Explore = async () => {
  const exploreData: ExploreData = await getExplore();
  return (
    <section>
      <div className="container">
        <MainHeader title="Explore Nearby"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4">
          {exploreData.map((item, index) => {
            return (
              <ExploreCard
                key={index}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Explore;
