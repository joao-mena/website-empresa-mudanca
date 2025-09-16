# Guia para Rodar o Projeto Localmente

Este é um guia para configurar e rodar o projeto Express Movers localmente em seu computador.

## Pré-requisitos

Antes de começar, você precisa ter o [Node.js](https://nodejs.org/) (que inclui o npm) instalado em sua máquina. Você pode baixar a versão LTS no site oficial.

## Passos para Instalação e Execução

1.  **Baixe o projeto**.

2.  **Abra o terminal** (ou prompt de comando) e navegue até o diretório onde você descompactou os arquivos. Por exemplo:

    ```sh
    cd caminho/para/express-movers-vite-essential
    ```

3.  **Instale as dependências** do projeto. Execute o seguinte comando no terminal:

    ```sh
    npm install
    ```

    Este comando irá baixar e instalar todas as dependências necessárias para o projeto, incluindo o Vite.

4.  **Inicie o servidor de desenvolvimento**. Após a instalação das dependências, execute o seguinte comando:

    ```sh
    npm run dev
    ```

    Este comando iniciará o servidor de desenvolvimento do Vite. Você verá uma saída no terminal semelhante a esta:

    ```
      VITE vX.X.X  ready in XXX ms

      ➜  Local:   http://localhost:5173/
      ➜  Network: use --host to expose
    ```

5.  **Acesse o site** em seu navegador. Abra seu navegador de preferência e acesse a URL fornecida no terminal (geralmente `http://localhost:5173/`).

Pronto! Agora você está rodando o projeto Express Movers localmente em sua máquina. Qualquer alteração que você fizer nos arquivos do projeto será refletida automaticamente no navegador.
