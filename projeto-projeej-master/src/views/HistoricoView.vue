<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      new_historico: "",
      news_autor: "",
      news_link: "",
      new_date: "",
      historicos: [
        {id:"" ,nome: "livro1",autor:"ronaldo",link:"link1", date:"10/08/2000"},
        {id:"",nome: "livro2",autor:"ronaldo2",link:"link2", date:"10/08/2050"},
        {id:"",nome: "livro3",autor:"ronaldo3",link:"link3", date:"10/08/20283"},
        {id:"",nome: "livro4",autor:"ronaldo4",link:"link4", date:"10/08/9992"},
      ],
    };
  },
  methods: {
    save() {
      const historico_id = uuid();
      this.historicos.push({
        id: historico_id,
        nome: this.new_historico,
        autor: this.news_autor,
        link: this.news_link,
        date: this .new_date,
      });
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Histórico</h2>
    </div>
  </div>
  <div class="form-input">
  </div>
  <div class="list-items">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Livro</th>
          <th>Autor</th>
          <th>Link</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="historico in historicos" :key="historico.id">
          <td>{{ historico.id }}</td>
          <td>{{ historico.nome }}</td>
          <td>{{ historico.autor }}</td>
          <td>{{ historico.link }}</td>
          <td>{{ historico.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
