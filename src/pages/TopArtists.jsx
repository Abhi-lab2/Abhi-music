import React from 'react';
// import Loader from '../components/Loader';
// import Error from '../components/Error'
import { ArtistCard, Error, Loader } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazemCore";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) {
    return <Loader title="Loading top artists..." />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div>
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-white text-left mt-4 b-10">
          {/* mapping cards div */}
          <div className="flex flex-wrap sm:justify-center gap-8">
            {data?.map((track) => <ArtistCard key={track.key} track={track} />)}
          </div>
        </h2>
      </div>
    </div>
  );
};

export default TopArtists;
