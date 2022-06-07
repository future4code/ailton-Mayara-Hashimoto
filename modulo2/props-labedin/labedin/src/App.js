import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          // imagem={"https://i.ibb.co/xSyLRdk/ima.jpg"} 
          // nome="Mayara Costa" 
          // descricao="Hi, I'm Mayara. I am studying to become a Fullstack Web Developer. I like to listen to music, one of my favourite genres is Kpop. I also deeply love the Harry Potter series (movies and books). My favourite book is Pride and Prejudice."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
      <CardPequeno
        imagem=""
        nome="E-mail:"
        descricao="fakeemail@gmail.com"
      />
      </div>
      <div className="page-section-container">
         <CardPequeno
        imagem=""
        nome="Address:"
        descricao="São Paulo - SP, Brazil."
      />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQFAxyLjs-xinA/profile-displayphoto-shrink_100_100/0/1613745263782?e=1660176000&v=beta&t=g0LZ_njIv1wYVc9ODu2TQl9vCATF76Znm4b9s4s0mwY" 
          nome="I now study at Labenu but..." 
          descricao="I have a large experience working with sales, having worked at palces like 'Livraria Cultura', 'MASP', 'Tenman-Ya', I also her experience in the comunications field, having work as spokesperson at 'A3 Comunications', and clipping with 'Top Clip'." 
        />
        
        <CardGrande 
          imagem="https://i.ibb.co/D4hkRBZ/img.jpg" 
          nome="My Study Background..." 
          descricao="I have studied at Universidade Nassau, Communications in Journalism. And before I started at Labenu, I was studying IT Manegement at UNIP." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
