import { outletRepository } from "../../data/useCases/ProductsRepository";

import { useFetch } from "../../infra/hooks/useFetch";

import { ProductsPage } from "../../components/layout/ProductsPage/ProductsPage";

import { Loader } from "../../components/commons/Loader/Loader";
import ListaProdutos from "../../components/commons/ListaProdutos/ListaProdutos";
import { ProductsHeroSection } from "../../components/commons/ProductsHeroSection/ProductsHeroSection";
import Temporizador from "../../components/commons/ContagemRegressiva/Timer.jsx";

function Outlet() {
  const { data: produtos, isFetching } = useFetch(() =>
    outletRepository.getAll()
  );

  return (
    <ProductsPage
      header={<ProductsHeroSection title="Outlet" prefixPhoto="outlet" />}
    >
      <div>
        <span className="fs-5">Oferta acaba em: </span>
        <span className="fs-4">{<Temporizador />} minutos</span>
      </div>

      {isFetching ? <Loader /> : <ListaProdutos produtos={produtos ?? []} />}
    </ProductsPage>
  );
}

export default Outlet;
