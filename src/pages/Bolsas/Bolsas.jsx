import { bagsRepository } from "../../data/useCases/ProductsRepository";

import { useFetch } from "../../infra/hooks/useFetch";

import { ProductsPage } from "../../components/layout/ProductsPage/ProductsPage";

import { Loader } from "../../components/commons/Loader/Loader";
import ListaProdutos from "../../components/commons/ListaProdutos/ListaProdutos";
import { ProductsHeroSection } from "../../components/commons/ProductsHeroSection/ProductsHeroSection";

function Bolsas() {
  const { data: produtos, isFetching } = useFetch(() =>
    bagsRepository.getAll()
  );

  return (
    <ProductsPage
      header={<ProductsHeroSection title="Bolsas" prefixPhoto="bolsas" />}
    >
      {isFetching ? <Loader /> : <ListaProdutos produtos={produtos ?? []} />}
    </ProductsPage>
  );
}

export default Bolsas;
