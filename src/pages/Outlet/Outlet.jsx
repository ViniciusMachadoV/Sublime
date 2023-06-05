import { ProductsHeroSection } from "../../components/commons/ProductsHeroSection/ProductsHeroSection";
import ListaProdutos from "../../components/commons/ListaProdutos/ListaProdutos";
import { ProductsPage } from "../../components/layout/ProductsPage/ProductsPage";
import { produtos } from "../../data/produtos";

function Outlet() {
  return (
    <ProductsPage header={<ProductsHeroSection title="Outlet" />}>
      <div>
        <span className="fs-5">Oferta acaba em: </span>
        <span className="fs-3">10:23:12</span>
      </div>

      <ListaProdutos produtos={produtos} />
    </ProductsPage>
  );
}

export default Outlet;
