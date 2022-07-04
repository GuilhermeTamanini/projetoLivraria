<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_cadastro: "",
      nova_categoria: "",
      novo_autor: "",
      novo_preco: "",
      nova_editora: "",
      capa_traz: "",
      capa_frente: "",
      cadastros: [
        {
          id: "64df1589-8bad-4083-9c44-618774ee3a9f",
          nome: "cadastro 1",
          categoria: "Isekai",
          autor: "douglas",
          editora: "Jefferson",
          preco: "10pila",
          frente: "",
          traz: "",
        },
        {
          id: "567e5f7a-7676-4c5f-a36b-5a766927e81a",
          nome: "cadastro 2",
          categoria: "Fantasia",
          autor: "geraldo",
          editora: "Jefferson",
          preco: "10pila",
          frente: "",
          traz: "",
        },
        {
          id: "cb663175-1350-4d40-a57e-ca2adb42e643",
          nome: "cadastro 3",
          categoria: "Game",
          autor: "lucas",
          editora: "Jefferson",
          preco: "10pila",
          frente: "",
          traz: "",
        },
        {
          id: "54d12bf6-b2c8-4f30-9b1d-0b3ab4e3b2c7",
          nome: "cadastro 4",
          categoria: "???",
          autor: "antony",
          editora: "Jefferson",
          preco: "10pila",
          frente: "",
          traz: "",
        },
      ],
    };
  },
  methods: {
    salvar() {
      if (this.novo_cadastro !== "") {
        const novo_id = uuid();
        this.cadastros.push({
          id: novo_id,
          nome: this.novo_cadastro,
          categoria: this.nova_categoria,
          autor: this.novo_autor,
          preco: this.novo_preco,
          editora: this.nova_editora,
          traz: this.capa_traz,
          frente: this.capa_frente,
        });
        this.novo_cadastro = "";
        this.nova_categoria = "";
        this.novo_autor = "";
        this.novo_preco = "";
        this.nova_editora ="";
        this.capa_traz = "";
        this.capa_frente = "";
      }
    },
    excluir(cadastro) {
      const indice = this.cadastros.indexOf(cadastro);
      this.cadastros.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title"></div>
  </div>
  <div class="form-input">
    <input
      type="text"
      placeholder="Insira o nome dos livros"
      v-model="novo_cadastro"
    />
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="nova_categoria"
    >
      <option selected>Categoria</option>
      <option value="Categoria1">Categoria1</option>
      <option value="Categoria2">Categoria2</option>
      <option value="Categoria3">Categoria3</option>
    </select>
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="novo_autor"
    >
      <option selected>Autor</option>
      <option value="Autor1">Autor1</option>
      <option value="Autor2">Autor2</option>
      <option value="Autor3">Autor3</option>
    </select>
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="nova_editora"
    >
      <option selected>Editora</option>
      <option value="Editora 1">Editora1</option>
      <option value="Editora 2">Editora2</option>
      <option value="Editora 3">Editora3</option>
    </select>
    <input type="text" placeholder="Insira o preço" v-model="novo_preco" />
    <input
      type="text"
      placeholder="Insira a imagem da capa da frente"
      v-model="capa_frente"
    />
    <input
      type="img"
      placeholder="Insira a imagem da capa de traz"
      v-model="capa_traz"
    />
    <button @click="salvar">salvar</button>
  </div>
  <div class="list-items">
    <table class="table table-striped">
      <thead>
        <tr>
          <!-- <th scope="col">ID</th> -->
          <th scope="col">Livro</th>
          <th scope="col">Categoria</th>
          <th scope="col">Autor</th>
          <th scope="col">Editora</th>
          <th scope="col">Preço</th>
          <th scope="col">Img traz</th>
          <th scope="col">Img da frente</th>
          <th id="excluir" scope="col">Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cadastro in cadastros" :key="cadastro.id">
          <!-- <td scope="row">{{ cadastro.id }}</td> -->
          <td>{{ cadastro.nome }}</td>
          <td>{{ cadastro.categoria }}</td>
          <td>{{ cadastro.autor }}</td>
          <td>{{ cadastro.editora }}</td>
          <td>{{ cadastro.preco }}</td>
          <td>{{ cadastro.traz }}</td>
          <td>{{ cadastro.frente }}</td>
          <td>
            <button @click="excluir(cadastro)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
#excluir {
  padding-left: 15px;
}
.table {
  background-color: white;
}
td button{
  background-color: rgb(221, 220, 220);
  border-radius: 20px;
}
</style>
