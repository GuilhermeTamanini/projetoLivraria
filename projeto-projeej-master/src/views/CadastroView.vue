<template>
  <div id="form-login">
    <form class="form-login">
      <h2>Login</h2>
      <div class="mb-3">
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
        <label class="cadastrarse" for=""
          ><RouterLink to="/entre">Cadastra-se</RouterLink></label
        >
      </div>
      <button type="submit" class="btn btn-primary">login</button>
    </form>
  </div>
</template>
<style>
body {
  background-image: url(https://images2.alphacoders.com/261/thumb-1920-26102.jpg);
}
.cadastrarse {
  padding-left: 600px;
}
h2 {
  display: flex;
  justify-content: center;

}
form {
  background-color: black;
  color: white;
  padding: 15px;
  border-radius: 20px;
  justify-content: center;
}
.form-login {
  color: white;
  width: 850px;
  height: 500px;
}
#form-login {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
