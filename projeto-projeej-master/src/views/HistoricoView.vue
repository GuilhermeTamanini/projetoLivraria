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
      link: "",
      data: "",
      cadastros: [
        {
          id: "64df1589-8bad-4083-9c44-618774ee3a9f",
          nome: "livro 1",
          categoria: "Isekai",
          autor: "douglas",
          editora: "Jefferson",
          preco: "10pila",
          link: "https://livroex1312",
          data: "01/07/2022 - 06:57",
        },
        {
          id: "567e5f7a-7676-4c5f-a36b-5a766927e81a",
          nome: "livro 2",
          categoria: "Fantasia",
          autor: "geraldo",
          editora: "Jefferson",
          preco: "10pila",
          link: "https://livroex1312",
          data: "01/07/2022 - 06:57",
        },
        {
          id: "cb663175-1350-4d40-a57e-ca2adb42e643",
          nome: "livro 3",
          categoria: "Game",
          autor: "lucas",
          editora: "Jefferson",
          preco: "10pila",
          link: "https://livroex1312",
          data: "01/07/2022 - 06:57",
        },
        {
          id: "54d12bf6-b2c8-4f30-9b1d-0b3ab4e3b2c7",
          nome: "livro 4",
          categoria: "???",
          autor: "antony",
          editora: "Jefferson",
          preco: "10pila",
          link: "https://livroex1312",
          data: "01/07/2022 - 06:57",
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
          link: this.link,
          data: this.data,
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
          <th scope="col">Link</th>
          <th scope="col">Data</th>
          <th id="excluir" scope="col">Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cadastro in cadastros" :key="cadastro.id">
          <td>{{ cadastro.nome }}</td>
          <td>{{ cadastro.categoria }}</td>
          <td>{{ cadastro.autor }}</td>
          <td>{{ cadastro.editora }}</td>
          <td>{{ cadastro.preco }}</td>
          <td>{{ cadastro.link }}</td>
          <td>{{ cadastro.data }}</td>
          <td>
            <button @click="excluir(cadastro)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>