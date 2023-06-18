import { createContext, useState } from "react";
import {
  bagsRepository,
  feminineProductsRepository,
  masculineProductsRepository,
  outletRepository,
} from "../../data/useCases/ProductsRepository";

export const SearchContext = createContext();

export function SearchContextProvider(props) {
  const [searchResults, setSearchResults] = useState(null);

  async function doSearch(searchTerm) {
    const feminineSearchPromise = feminineProductsRepository.getAll(searchTerm);

    const masculineSearchPromise =
      masculineProductsRepository.getAll(searchTerm);

    const bagsSearchPromise = bagsRepository.getAll(searchTerm);

    const outletSearchPromise = outletRepository.getAll(searchTerm);

    const allSearchsResponses = await Promise.allSettled([
      feminineSearchPromise,
      masculineSearchPromise,
      bagsSearchPromise,
      outletSearchPromise,
    ]);

    const allSearchs = allSearchsResponses.reduce(
      (acc, curr) => (curr ? acc.concat(curr.value) : acc),
      []
    );

    setSearchResults(allSearchs);
  }

  return (
    <SearchContext.Provider value={{ searchResults, doSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
}
