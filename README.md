# Projeto Geolocalização
Este projeto permite a obtenção das coordenadas geográficas do usuário (latitude e longitude) usando a API de Geolocalização do navegador.

## Tecnologias utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML** – Estruturação da página ([https://html.com](https://html.com))
- **CSS** – Estilização da interface ([https://css.com](https://css.com))
- **JavaScript** – Lógica de geolocalização e manipulação de DOM ([https://www.javascript.com](https://www.javascript.com))

## Visualização do Projeto
https://heitordalla.github.io/API-geolocation/

## Funcionalidades
- Obtém a latitude e longitude do usuário, exibindo em tempo real na página.
- Caso o navegador não ofereça suporte à geolocalização, o sistema informa o usuário.
- Se ocorrer algum erro ao obter a localização, é mostrado um erro na tela.

## Como Usar
1. Abra o arquivo `index.html` em seu navegador.
2. A página solicitará acesso à sua geolocalização. Caso aceite, os dados de latitude e longitude serão exibidos na tela.
3. Caso a geolocalização não seja suportada ou ocorra algum erro, o sistema exibirá uma mensagem informando o problema.

## Lógica de Funcionamento
- **Verificação de suporte**: A função `navigator.geolocation.getCurrentPosition` é chamada para tentar obter a localização atual do usuário.
- **Sucesso**: Se a localização for obtida, as coordenadas de latitude e longitude são mostradas na página.
- **Erro**: Se houver falha, uma mensagem de erro é exibida e o status "Erro ao obter localização!" aparece.

## Pré-requisitos
- Navegador moderno com suporte a JavaScript e geolocalização (Chrome, Firefox, Edge, Safari, etc.)
- Conexão ativa com a internet.

## Contribuindo
Este é um projeto de código aberto. Contribuições são bem-vindas! Se você encontrar algum erro ou tiver uma sugestão de melhoria, fique à vontade para abrir uma **issue** ou enviar um **pull request**.

## Contato
- Criado por **Heitor Giussani Dalla Villa**  
- E-mail: [heitorvillavilla@gmail.com](mailto:heitorvillavilla@gmail.com)  
- LinkedIn: [https://www.linkedin.com/in/heitordallavilla](https://www.linkedin.com/in/heitordallavilla)

## Observações Finais
- Este projeto é apenas uma demonstração de como capturar e exibir dados de geolocalização utilizando a API de Geolocalização do navegador.