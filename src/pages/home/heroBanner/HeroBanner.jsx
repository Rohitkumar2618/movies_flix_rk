import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import Img from '../../../components/lazyLoadImage/img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/popular");

  useEffect(() => {
    if (data?.results) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const bg = url.backdrop + data.results[randomIndex]?.backdrop_path;
      setBackground(bg);
    }
  }, [data, url]);

  const searchQueryHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleSearchButtonClick = () => {
    searchQueryHandler();
  };

  const handleSearchInputKeyUp = (event) => {
    if (event.key === "Enter") {
      searchQueryHandler();
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleSearchInputKeyUp}
            />
            <button onClick={handleSearchButtonClick}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
