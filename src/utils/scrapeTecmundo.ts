export async function scrapeTecmundo() {
    // Faz uma requisição HTTP para o site Tecmundo
    const response = await fetch('https://www.tecmundo.com.br/');
    // Lê o conteúdo da resposta como HTML
    const html = await response.text();
    // Cria um elemento HTML temporário para processar o HTML da página
    const template = document.createElement('template');
    // Define o HTML do elemento temporário como o HTML da página
    template.innerHTML = html;
    // Use o método querySelectorAll do elemento temporário para encontrar os elementos HTML que contêm as manchetes de notícias
    const headlines = template.content.querySelectorAll('.tecmundo-card__title a');
    // Transforma a lista de elementos em um array e extrai o texto de cada um deles
    const headlinesText = Array.from(headlines).map(element => element.innerText);
    // Imprime as manchetes de notícias no console
    console.log(headlinesText);
  }