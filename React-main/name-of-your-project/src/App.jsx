import React, { useState } from 'react';

const App = () => {
  const [exemploGerado, setExemploGerado] = useState(false);

  const gerarExemplo = () => {
    // Aqui você pode adicionar a lógica para gerar o exemplo
    // Por enquanto, vamos apenas definir a flag de exemplo gerado como verdadeira
    setExemploGerado(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">Meu Site com Tailwind CSS</h1>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-xl mb-4">Bem-vindo ao site de exemplo</h2>
        <p className="mb-4">
          Este é um exemplo de site utilizando Tailwind CSS. Veja alguns exemplos de componentes abaixo.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={gerarExemplo}
        >
          Gerar Exemplo
        </button>
        {exemploGerado && (
          <div className="bg-green-200 p-4 rounded shadow">
            <h3 className="text-lg mb-2">Exemplo Gerado</h3>
            <p>Este é um exemplo gerado a partir do botão.</p>
          </div>
        )}
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-4">
        <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
