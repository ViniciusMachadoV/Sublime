import { useContext } from "react";

import { SearchContext } from "../../../infra/contexts/SearchContext";

export function SearchPage(props) {
  const searchContext = useContext(SearchContext);

  return (
    <>
      <header>
        <form
          className="container"
          onSubmit={(event) => {
            event.preventDefault();

            const formData = new FormData(event.target);

            const search = formData.get("busca");

            searchContext?.doSearch(search);
          }}
        >
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="bi bi-search"></i>
            </span>

            <input
              id="busca"
              type="text"
              name="busca"
              class="form-control"
              placeholder="Buscar pelo nome do produto"
              aria-label="Buscar pelo nome do produto"
              aria-describedby="busca"
            />
            <button class="btn btn-primary" type="submit">
              Buscar
            </button>
          </div>
        </form>
      </header>

      <section className="container">{props.children}</section>
    </>
  );
}
