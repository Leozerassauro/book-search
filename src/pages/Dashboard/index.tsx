import React from 'react';

import { HomePageImage } from './styles';
import homeImg from '../../assets/homeImg.png';

import Header from '../../components/Header';

const Container: React.FC = () => (
  <>
    <Header />
    <HomePageImage>
      <div>
        <h1>Qual livro você quer ler hoje?</h1>
        <p>Encontre os livros que você procura digitando o <strong>nome do livro</strong>, <strong>autor</strong> ou <strong>editora</strong>.</p>
        <a href="">Pesquisar</a>
      </div>
      <img src={homeImg} alt="Home Page Image" />
    </HomePageImage>
  </>
);

export default Container;
