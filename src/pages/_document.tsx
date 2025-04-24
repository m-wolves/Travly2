// Importando os componentes necessários do Next.js para personalizar o documento HTML.
import Document, { Html, Head, Main, NextScript } from 'next/document';

// Aqui é onde você vai personalizar a estrutura do HTML da sua aplicação.
class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          {/* Importando fontes do Google Fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=League+Spartan:wght@300;400;500&display=swap"
          />
        </Head>
        
        {/* A tag <body> contém o conteúdo principal da página. */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
