<template>
  <div id="form-cadastro">
    <form class="form-cadastro">
      <h2>Cadastro</h2>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nome</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Nome"
        />
        <label for="exampleInputEmail1" class="form-label">Data de nascimento</label>
        <input
          type="date"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Data de nascimento"
        />
        <label for="exampleInputEmail1" class="form-label">E-mail</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="email"
        />
        <div id="emailHelp" class="form-text">
          Nós nunca compartilharemos seu e-mail com ninguem(Confia)
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Senha</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="senha"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Lembrar-me</label>
        <label class="cadastro1" for=""
          ><RouterLink to="/cadastros">Login</RouterLink></label
        >
      </div>
      <button type="submit" class="btn btn-primary">login</button>
    </form>
  </div>
</template>
<style>
#form-cadastro {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cadastro1 {
  padding-left: 600px;
}
.form-cadastro {
  background-color: black;
  color: white;
  width: 850px;
  height: 500px;
}
</style>
