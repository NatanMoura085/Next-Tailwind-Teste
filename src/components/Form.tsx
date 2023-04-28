import { useState } from "react";
export default function Form() {
  const [form, setForm] = useState({
    nome: "",
    senha: "",
  });

  const Env = () => {
    if (form.nome && form.senha) {
      const nome = form.nome;
      const senha = form.senha;
      console.log(nome);
      console.log(senha);
    }
  };
  return (
    <form className=" border-2 border-red-200 flex flex-col w-64 p-6 gap-1">
      <label htmlFor="nome">Nome:</label>
      <input
        value={form.nome}
        onChange={({ target }) => setForm({ ...form, nome: target.value })}
        className=" rounded"
        id="nome"
        type="text"
      />
      <label htmlFor="senha">Senha</label>
      <input
        value={form.senha}
        onChange={({ target }) => setForm({ ...form, senha: target.value })}
        id="senha"
        type="password"
      />
      <button
        onClick={Env}
        className=" bg-cyan-500 shadow-lg shadow-cyan-500/50 m-1 p-1 rounded hover:bg-button-color"
        type="button"
      >
        Env
      </button>
    </form>
  );
}
