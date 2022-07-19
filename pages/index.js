import React from "react";

const Home = () => {
  return (
    <main>
      <h1>Login blog de receitas</h1>

      <form>
        <input type="email" placeholder="Digite seu email" />
        <p>Digite um email</p>

        <input type="password" placeholder="Digite sua senha" />
        <p>Senha é obrigatória</p>

        <div className="checkbox">
          <input type="checkbox" />
          <label>Manter logado</label>
        </div>

        <input type="submit" value="Logar" />
      </form>
    </main>
  );
};

export default Home;
