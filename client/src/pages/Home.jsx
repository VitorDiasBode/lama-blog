import React from 'react'
import { Link } from 'react-router-dom';

function Home() {

  const posts = [
    {
      id: 1,
      title: "Explorando Novos Horizontes",
      desc: "Conheça lugares incríveis e culturas fascinantes em uma jornada inesquecível. \nDas montanhas geladas aos desertos dourados, cada destino guarda um segredo. \nViajar é expandir a mente e o coração. \nPrepare sua mochila e venha descobrir o que há além do mapa.",
      img: "https://images.pexels.com/photos/14205102/pexels-photo-14205102.jpeg"
    },
    {
      id: 2,
      title: "A Beleza do Cotidiano",
      desc: "Entre os detalhes da rotina, mora uma beleza silenciosa e profunda. \nUm raio de sol pela janela, o vapor do café, a brisa no fim da tarde. \nNem sempre é preciso ir longe para se encantar. \nAprenda a enxergar a poesia nas pequenas coisas.",
      img: "https://images.pexels.com/photos/15401700/pexels-photo-15401700.jpeg"
    },
    {
      id: 3,
      title: "Histórias Esquecidas",
      desc: "Antigas construções, objetos empoeirados, fotos desbotadas. \nCada um guarda uma história que o tempo tentou apagar. \nNeste post, vamos mergulhar em memórias esquecidas. \nE dar voz àqueles que já não podem contá-las.",
      img: "https://images.pexels.com/photos/11870766/pexels-photo-11870766.jpeg"
    },
    {
      id: 4,
      title: "Conexão com a Natureza",
      desc: "Em meio ao caos da cidade, a natureza chama em silêncio. \nOuvir o vento, sentir a terra, observar os ciclos da vida. \nMais do que um refúgio, ela é um retorno ao essencial. \nReconectar-se é um ato de equilíbrio e cura.",
      img: "https://images.pexels.com/photos/7853221/pexels-photo-7853221.jpeg"
    }
  ];


  return (
    <div className='home'>
      <div className="posts">
        {posts.map( (post) =>(
          <div className='post' id={post.id}>
            <div className="img">
              <img src={post.img} alt="image" />
            </div>

            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Home