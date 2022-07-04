import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LivrosView from "../views/LivrosView.vue";
import HistoricoView from "../views/HistoricoView.vue";
import CadastroView from "../views/CadastroView.vue";
import EntreView from "../views/EntreView.vue";
import EditoraView from "../views/EditoraView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import AutorView from "../views/AutorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/autor",
      name:"autor",
      component:AutorView,
    },
    {
      path:"/categorias",
      name:"categorias",
      component: CategoriaView,
    },
    {
      path: "/editora",
      name: "editora",
      component: EditoraView,
    },
    {
      path: "/cadastros",
      name: "cadastros",
      component: CadastroView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
    {
      path: "/historico",
      name: "historico",
      component: HistoricoView,
    },
    {
      path: "/entre",
      name: "entre",
      component: EntreView,
    },
    {
      path: '/nomedolivro',
      name: 'livro1',
      component: () => import('../Livros/Livro1View.vue')
    }
  ],
});

export default router;
