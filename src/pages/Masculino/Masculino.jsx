import { ProductsPage } from "../../components/layout/ProductsPage/ProductsPage";

import ListaProdutos from "../../components/commons/ListaProdutos/ListaProdutos";
import { ProductsHeroSection } from "../../components/commons/ProductsHeroSection/ProductsHeroSection";

import { produtos } from "../../data/produtos";

function Masculino() {
  return (
    <ProductsPage header={<ProductsHeroSection title="Masculino" />}>
      <ListaProdutos produtos={produtos} />
    </ProductsPage>
  );
}

export default Masculino;
