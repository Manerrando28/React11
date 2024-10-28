# Instalando a dependencia de rotas
npm install react-router-dom

# Instalando a dependencia de isntalação do tailwind

npm install -D tailwindcss postcss autoprefixer


# Instalando os arquivos do tailwind

npx tailwindcss init -p
# adicionar no arquivo tailwind.config os comandos abaixo

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

# adicionando as 3 linhas de base, utilidade e components

@tailwind base;
@tailwind components;
@tailwind utilities;

# adicionando o cdn no index.html

<script src="https://cdn.tailwindcss.com"></script>

# Instalando a dependencia de 