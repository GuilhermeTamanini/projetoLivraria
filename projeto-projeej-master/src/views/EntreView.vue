<template>
  <div class="formulario">
    <form action="login">
      <h2>Entre</h2>
      <input type="email" placeholder="E-mail" />
      <input type="text" placeholder="Senha" />
      <button>Entrar</button>
    </form>
  </div>
</template>
<style>
body {
  background-image: url(https://images2.alphacoders.com/261/thumb-1920-26102.jpg);
}
.formulario {
  display: flex;
  justify-content: center;
  margin: 1px;
  padding-top: 100px;
  color: rgb(212, 212, 212);
}
form h2 {
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
}

form {
  border: solid 1px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: black;
  box-shadow: black;
}
.formulario input {
  margin: 10px;
}
input {
  border: 1px;
  border-radius: 5px;
  padding: 5px;
}
button {
  margin-left: 50px;
  border: 1px;
  border-radius: 10px;
  padding: 5px;
  width: 100px;
}
</style>
