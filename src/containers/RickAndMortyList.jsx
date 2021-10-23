import React, { useState, useEffect } from "react";
import useGetProducts from "../hooks/useGetProducts";
import "../assets/styles/containers/RickAndMortyList.scss";
import CharacterCard from "../components/CharacterCard";
import Loading from "../components/Loading";

const API = "https://rickandmortyapi.com/api/character?page=";

const RickAndMortyAPI = () => {
  const listAPI = useGetProducts(API);
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = useState(listAPI);

  useEffect(() => {
    const result =
      listAPI &&
      listAPI.filter((item) => {
        return `${item.name} ${item.status} ${item.species} ${item.gender} ${item.origin.name}`
          .toLowerCase()
          .includes(query.toLowerCase());
      });
    console.log(result.length);
    setFilter(result);
  }, [listAPI, query]);

  if (listAPI.length > 0) {
    return (
      <div className="Container">
        <div className="Wrap">
          <div className="search">
            <input
              onChange={(event) => {
                setQuery(event.target.value);
              }}
              type="text"
              className="searchTerm"
              placeholder="Buscar..."
            />
          </div>
          <div className="Wrap__List">
            {filter.map((product) => (
              <CharacterCard
                product={product}
                key={`product-list-` + product.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
  <Loading/>
  );
};

export default RickAndMortyAPI;
