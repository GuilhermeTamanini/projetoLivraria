<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/cadastros"
        ><img
          src="https://www.intel.com.br/etc.clientlibs/settings/wcm/designs/intel/clientlibs/arkLibs/resources/img/PMP_Partner_Member_Card.png"
          alt=""
      /></RouterLink>
      <RouterLink class="navbar-brand" to="/">Home</RouterLink>
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
              <li>
                <RouterLink class="dropdown-item" to="/livros"
                  >Livros</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/editora"
                  >Editoras</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/categorias"
                  >Categorias</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="autor">autor</RouterLink>
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <RouterLink class="navbar-brand" to="/historico"
            >Histórico</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<style>
  a img {
    width: 120px;
    height: 70px;
  }
  nav div {
    padding-left: 40px;
  }
  a {
    color: white;
    text-decoration: none;
  }
</style>
