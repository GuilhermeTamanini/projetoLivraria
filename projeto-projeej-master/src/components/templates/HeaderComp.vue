<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/cadastros"
        ><img
          src="https://play-lh.googleusercontent.com/PM1Ig_PtVUrhmgnwqnl8zBBeg02HeELpihzMHXQ44ZObjfGgVwkwxsBF26EWTV9_Unk"
          alt=""
      /></a>
      <a class="navbar-brand" href="/">Home</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDarkDropdown"
        aria-controls="navbarNavDarkDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Cadastros
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDarkDropdownMenuLink"
            >
              <li><a class="dropdown-item" href="/livros">Livros</a></li>
              <li><a class="dropdown-item" href="/editora">Editoras</a></li>
              <li><a class="dropdown-item" href="">Categorias</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <header class="menu-superior">
    <RouterLink to="/cadastros">
      <span>
        <img
          src="https://play-lh.googleusercontent.com/PM1Ig_PtVUrhmgnwqnl8zBBeg02HeELpihzMHXQ44ZObjfGgVwkwxsBF26EWTV9_Unk"
          alt="Imagem"
        />
      </span>
    </RouterLink>
    <div class="menu-esquerdo">
      <span> <RouterLink to="/"> Home</RouterLink></span>
      <span>|</span>

      <span><RouterLink to="/livros"> Cadastro de Livros</RouterLink> </span>

      <span>|</span>

      <span><RouterLink to="/historico">Histórico</RouterLink> </span>
      <span>|</span>
    </div>
    <div class="menu-direito">
    <input type="text" placeholder="pesquisar">
    </div>
  </header> -->
</template>
<style>
a img {
  width: 70px;
  height: 70px;
}
/* header span {
  padding: 0 20px;
}

.menu-superior {
  text-decoration: none;
  color: white;
}
.menu-superior img {
  width: 60px;
  height: 60px;
}

.menu-esquerdo .botao {
  text-decoration: none;
  color: white;
}
.menu-direito {
  padding-right: 40px;
} */
</style>
