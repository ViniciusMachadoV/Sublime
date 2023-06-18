import { apiHttpRequest } from "./ApiHttpRequest";

import { ProductCategories } from "../../domain/models/ProductCategories";

import { Repository } from "../protocols/Repository";

class ProductsRepository extends Repository {
  constructor(category, httpRequest) {
    super();

    if (!Object.values(ProductCategories).includes(category)) {
      throw new Error("Categoria escolhida não disponível");
    }

    this.category = category;
    this.httpRequest = httpRequest;
  }

  /**
   *
   * Buscar lista de Produtos
   * @async
   * @param {Object|null} search Objeto com uma chave que exista no objeto do item pesquisado e valor que está buscando
   * @param {int} page Número inteiro da página
   * @param {int} itemsPerPage Quantos resultados estarão presentes em cada página
   * @returns Resultado da requisição HTTP
   */
  async getAll(search = null, page = 1, itemsPerPage = 20) {
    const queryParams = {
      _page: page,
      _limit: itemsPerPage,
    };

    if (search != null && typeof search === "object") {
      Object.assign(queryParams, search);
    }

    if (search != null && typeof search === "string") {
      Object.assign(queryParams, { q: search });
    }

    const response = await this.httpRequest.get(
      `/${this.category}`,
      queryParams
    );

    return response;
  }

  /**
   *
   * Buscar Produto pelo Id
   * @async
   * @param {int} id Id do recurso
   * @returns Resultado da requisição HTTP
   */
  async getById(id) {
    const response = await this.httpRequest.get(`/${this.category}/${id}`);

    return response;
  }

  /**
   *
   * Criar novo Produto
   * @async
   * @param {{nome: string, img: string, preco: float}} newProduct Objeto do novo produto
   * @returns Resultado da requisição HTTP
   */
  async save(newProduct) {
    const response = await this.httpRequest.post(
      `/${this.category}`,
      newProduct
    );

    return response;
  }

  /**
   *
   * Excluir Produto pelo Id
   * @async
   * @param {int} id Id do recurso
   * @returns Resultado da requisição HTTP
   */
  async deleteById(id) {
    const response = await this.httpRequest.delete(`/${this.category}/${id}`);

    return response;
  }
}

export const feminineProductsRepository = new ProductsRepository(
  ProductCategories.FEMININE,
  apiHttpRequest
);

export const masculineProductsRepository = new ProductsRepository(
  ProductCategories.MASCULINE,
  apiHttpRequest
);

export const bagsRepository = new ProductsRepository(
  ProductCategories.BAGS,
  apiHttpRequest
);

export const outletRepository = new ProductsRepository(
  ProductCategories.OUTLET,
  apiHttpRequest
);
