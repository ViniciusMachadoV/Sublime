import { masculineProductsRepository } from "../../data/useCases/ProductsRepository";

import { useFetch } from "../../infra/hooks/useFetch";

import { ProductsPage } from "../../components/layout/ProductsPage/ProductsPage";

import { Loader } from "../../components/commons/Loader/Loader";
import ListaProdutos from "../../components/commons/ListaProdutos/ListaProdutos";
import { ProductsHeroSection } from "../../components/commons/ProductsHeroSection/ProductsHeroSection";

function Masculino() {
  const { data: produtos, isFetching } = useFetch(() =>
    masculineProductsRepository.getAll()
  );

  return (
    <ProductsPage header={<ProductsHeroSection title="Masculino" />}>
      {isFetching ? <Loader /> : <ListaProdutos produtos={produtos ?? []} />}
    </ProductsPage>
  );
}

export default Masculino;
