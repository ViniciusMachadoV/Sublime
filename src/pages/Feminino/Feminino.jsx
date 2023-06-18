import { feminineProductsRepository } from "../../data/useCases/ProductsRepository";

import { useFetch } from "../../infra/hooks/useFetch";

import { ProductsPage } from "../../components/layout/ProductsPage/ProductsPage";

import { Loader } from "../../components/commons/Loader/Loader";
import ListaProdutos from "../../components/commons/ListaProdutos/ListaProdutos";
import { ProductsHeroSection } from "../../components/commons/ProductsHeroSection/ProductsHeroSection";

function Feminino() {
  const { data: produtos, isFetching } = useFetch(() =>
    feminineProductsRepository.getAll()
  );

  return (
    <ProductsPage header={<ProductsHeroSection title="Feminino" />}>
      {isFetching ? <Loader /> : <ListaProdutos produtos={produtos ?? []} />}
    </ProductsPage>
  );
}

export default Feminino;
