export class Repository {
  constructor() {
    if (new.target === Repository) {
      throw new TypeError(
        "Não é possível instanciar a classe Repository diretamente"
      );
    }
  }

  async getAll() {
    throw new Error("Você precisa implementar o método getAll na classe filha");
  }

  async getById() {
    throw new Error(
      "Você precisa implementar o método getById na classe filha"
    );
  }

  async save() {
    throw new Error("Você precisa implementar o método save na classe filha");
  }

  async deleteById() {
    throw new Error(
      "Você precisa implementar o método deleteById na classe filha"
    );
  }
}
