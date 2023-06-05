import { useState } from "react";

import { Tab } from "../../commons/Tabs/Tab";
import { Tabs } from "../../commons/Tabs/Tabs";

import { InputLine } from "../InputLine/InputLine";

import { useForm } from "../../../infra/hooks/useForm";

const PAYMENT_METHODS_ENUM = {
  PIX: "pix",
  BOLETO: "boleto",
  CARD: "cartao-credito",
};

export function CheckoutForm(props) {
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS_ENUM.PIX);

  const { onFormSubmit, registerInput } = useForm({
    nome: "",
    sobrenome: "",
    email: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    "cartao-numero": "",
    "cartao-nome": "",
    "cartao-validade": "",
    "cartao-codigo": "",
    "cartao-nascimento": "",
    "cartao-parcelas": "",
  });

  function doCheckout(formData) {
    const paymentBodyRequest = {
      ...formData,
      paymentMethod,
    };

    console.log({ paymentBodyRequest });
  }

  return (
    <form id={props.id} className="row g-3" onSubmit={onFormSubmit(doCheckout)}>
      <h3>Endereço</h3>

      <InputLine required id="nome" label="Nome" {...registerInput("nome")} />

      <InputLine
        required
        id="sobrenome"
        label="Sobrenome"
        {...registerInput("sobrenome")}
      />

      <InputLine
        required
        id="email"
        label="E-mail"
        type="email"
        cols={12}
        {...registerInput("email")}
      />

      <InputLine
        required
        id="cep"
        label="CEP"
        cols={6}
        {...registerInput("cep")}
      />

      <InputLine
        required
        id="endereco"
        label="Endereço"
        cols={12}
        {...registerInput("endereco")}
      />

      <InputLine
        required
        id="cidade"
        label="Cidade"
        {...registerInput("cidade")}
      />

      <InputLine
        required
        id="estado"
        label="Estado"
        {...registerInput("estado")}
      >
        <select className="form-select">
          <option value="">Escolha um Estado...</option>
          <option value="...">...</option>
        </select>
      </InputLine>

      <h3>Cobrança</h3>

      <Tabs onTabChange={(tab) => setPaymentMethod(tab)}>
        <Tab id={PAYMENT_METHODS_ENUM.PIX} label="Pix">
          Pagar com Pix (15% de desconto)
          <ul>
            <li>Total da Compra: R$ 999,99</li>
            <li>Com desconto: R$ 799,99</li>
          </ul>
        </Tab>

        <Tab id={PAYMENT_METHODS_ENUM.BOLETO} label="Boleto">
          Pagar com Boleto (15% de desconto)
          <ul>
            <li>Total da Compra: R$ 999,99</li>
            <li>Com desconto: R$ 799,99 (Economize: R$ 77,65)</li>
          </ul>
        </Tab>

        <Tab id={PAYMENT_METHODS_ENUM.CARD} label="Cartão de Crédito">
          <div className="row">
            <InputLine
              id="cartao-numero"
              label="Número do Cartão"
              cols={12}
              {...registerInput("cartao-numero")}
            />

            <InputLine
              id="cartao-nome"
              label="Nome Completo"
              description="Como está impresso no cartão"
              cols={12}
              {...registerInput("cartao-nome")}
            />

            <InputLine
              id="cartao-validade"
              label="Validade"
              cols={4}
              {...registerInput("cartao-validade")}
            />

            <InputLine
              id="cartao-codigo"
              label="Código de Segurança"
              cols={4}
              {...registerInput("cartao-codigo")}
            />

            <InputLine
              id="cartao-nascimento"
              label="Data Nascimento"
              cols={4}
              {...registerInput("cartao-nascimento")}
            />

            <InputLine
              id="cartao-parcelas"
              label="Parcelas"
              cols={12}
              {...registerInput("cartao-parcelas")}
            >
              <select className="form-select">
                <option value={1}>À vista - Até 10% de desconto</option>
                <option value={2}>2x sem juros</option>
                <option value={3}>3x sem juros</option>
                <option value={4}>4x sem juros</option>
                <option value={5}>5x sem juros</option>
              </select>
            </InputLine>
          </div>
        </Tab>
      </Tabs>
    </form>
  );
}
