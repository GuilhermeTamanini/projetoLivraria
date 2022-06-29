<template>
  <h2 id="title-livros">Livros a venda</h2>
  <div class="livros">
    <div class="livro1">
      <RouterLink to="/nomedolivro"
        ><img
          src="https://images-na.ssl-images-amazon.com/images/I/51ZcM8p4oWL._SX342_SY445_QL70_ML2_.jpg "
          alt=""
        />
        <p>Dois Mundos Um Herói</p>
        <p>R$9999999999999,00</p>
      </RouterLink>
    </div>
    <div class="livro2">
      <img
        src="https://cdn.maioresemelhores.com/imagens/maiores-e-melhores-o-pequeno-principe-cke.jpg"
        alt=""
      />
      <p>O Pequeno Principe</p>
      <p>R$ 20,00</p>
    </div>
    <div class="livro3">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/91GKx52xnVS.jpg"
        alt=""
      />
      <p>O Livro da Filosofia</p>
        <p>R$ 0,-50</p>
    </div>
    <div class="livro4">
      <img
        src="https://www.editorajuspodivm.com.br/cdn/imagens/produtos/original/matematica-basica-definitiva-para-concursos-2021-006f.png"
        alt=""
      />
      <p>Matemática  básica definitiva</p>
        <p>R$ 20,00</p>
    </div>
    <div class="livro5">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81f4JuVe6uL.jpg"
        alt=""
      />
      <p>O incrível</p>
        <p>R$ 20,00</p>
    </div>
    <div class="livro6">
      <img
        src="https://img.travessa.com.br/livro/BA/53/534bc13c-1315-48f5-9bc7-a1e8eaf82b00.jpg"
        alt=""
      />
    </div>
  </div>
  <div class="livros7">
    <div class="livro6">
      <img src="https://br.web.img2.acsta.net/pictures/14/11/14/13/47/211678.jpg" alt="" />
    </div>

    <div class="livro8">
      <img src="https://static3.tcdn.com.br/img/img_prod/400550/biblia_minecraft_1404_1_e32c79b0b4488cfd10ffb705de84f499.jpg" alt="" />
    </div>
  </div>
</template>

<style>
.livros {
  color: white;
  padding: 10px;
  display: flex;
  text-align: center;
}
.livros img {
  width: 300px;
  height: 350px;
  display: inline-block;
  padding-left: 30px;
}
#title-livros {
  text-align: center;
  color: white;
  font-size: 40px;
  transition: 0.25s;
}
.livro1:hover {
  transform: scale(1.1);
}
.livro2:hover {
  transform: scale(1.1);
}
.livro3:hover {
  transform: scale(1.1);
}
.livro4:hover {
  transform: scale(1.1);
}
.livro5:hover {
  transform: scale(1.1);
}
.livro6:hover {
  transform: scale(1.1);
}
</style>
