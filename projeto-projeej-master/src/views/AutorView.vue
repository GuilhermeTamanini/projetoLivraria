<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_autor: "",
      cadastros: [
        {
          autor: "Thomas",
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
          autor: this.novo_autor,
        });
        this.novo_autor = "";
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
    <input type="text" placeholder="Nome do autor" v-model="novo_autor" />
    <button @click="salvar">salvar</button>
  </div>
  <div class="list-items">
    <table id="table-editora" class="table table-striped">
      <thead>
        <tr>
          <!-- <th scope="col">ID</th> -->
          <th scope="col">autor</th>
          <th id="excluir-editora" scope="col">Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cadastro in cadastros" :key="cadastro.id">
          <!-- <td scope="row">{{ cadastro.id }}</td> -->
          <td>{{ cadastro.autor }}</td>
          <td>
            <button @click="excluir(cadastro)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
