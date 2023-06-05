import { ProductsPage } from "../../components/layout/ProductsPage/ProductsPage";

import ListaProdutos from "../../components/commons/ListaProdutos/ListaProdutos";
import { ProductsHeroSection } from "../../components/commons/ProductsHeroSection/ProductsHeroSection";

import { produtos } from "../../data/produtos";

function Bolsas() {
  return (
    <ProductsPage header={<ProductsHeroSection title="Bolsas" />}>
      <ListaProdutos produtos={produtos} />
    </ProductsPage>
  );
}

export default Bolsas;
