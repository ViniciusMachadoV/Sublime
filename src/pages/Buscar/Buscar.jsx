import { useContext } from "react";

import { SearchContext } from "../../infra/contexts/SearchContext";

import { SearchPage } from "../../components/layout/SearchPage/SearchPage";
import ListaProdutos from "../../components/commons/ListaProdutos/ListaProdutos";

function Buscar() {
  const searchContext = useContext(SearchContext);

  return (
    <SearchPage>
      <ListaProdutos produtos={searchContext?.searchResults ?? []} />
    </SearchPage>
  );
}

export default Buscar;
