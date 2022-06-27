<template>
  <header class="menu-superior">
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
  </header>
</template>
<style>
header span {
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
}
</style>
