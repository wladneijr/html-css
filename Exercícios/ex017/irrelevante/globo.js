// Seleciona elementos do DOM
const header = document.querySelector('header');
const nav = header.querySelector('nav');
const navToggle = header.querySelector('.nav-toggle');
const newsList = document.querySelector('.news-list');

// Adiciona evento de clique ao botão de menu
navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Faz uma requisição AJAX para obter as notícias
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.globo.com/v1/noticias/geral');
xhr.onload = () => {
  const newsData = JSON.parse(xhr.responseText);
  // Itera sobre as notícias e cria os elementos HTML correspondentes
  for (let news of newsData) {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    const newsLink = document.createElement('a');
    newsLink.href = news.url;
    const newsImage = document.createElement('img');
    newsImage.src = news.imagens[0].url;
    const newsTitle = document.createElement('h2');
    newsTitle.textContent = news.titulo;
    const newsSummary = document.createElement('p');
    newsSummary.textContent = news.subtitulo;
    // Adiciona os elementos HTML criados à lista de notícias
    newsLink.appendChild(newsImage);
    newsLink.appendChild(newsTitle);
    newsLink.appendChild(newsSummary);
    newsItem.appendChild(newsLink);
    newsList.appendChild(newsItem);
  }
};
xhr.send();
