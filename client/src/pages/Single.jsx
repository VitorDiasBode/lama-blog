import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

function Single() {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/14205102/pexels-photo-14205102.jpeg" alt='post image' />

        <div className="user">
          <img src='https://images.pexels.com/photos/31368398/pexels-photo-31368398.jpeg' alt='user image' />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit icon" />
            </Link>
            <img src={Delete} alt="delete icon" />
          </div>
        </div>

        <h1>Explorando Novos Horizontes</h1>
        <p><p>
          Viajar vai muito além de mudar de lugar — é também mudar de perspectiva. Cada nova estrada percorrida
          nos apresenta a versões diferentes de nós mesmos, que talvez nunca surgissem se permanecêssemos no mesmo ponto.
          Ao pisar em um solo desconhecido, nos deparamos com culturas, cheiros, sabores e sons que expandem nossa visão de mundo.
        </p>

          <p>
            Mas nem todo horizonte é geográfico. Às vezes, os maiores saltos acontecem quando decidimos sair da zona de conforto:
            mudar de carreira, iniciar um projeto, começar uma nova relação ou simplesmente pensar diferente.
            O desconhecido assusta, mas também nos chama. E é nesse chamado que mora o crescimento.
          </p>

          <p>
            Cada viagem, seja externa ou interna, carrega consigo a promessa de transformação.
            Conhecer pessoas com histórias tão diferentes das nossas nos ensina empatia.
            Lidar com imprevistos desenvolve resiliência. Aprender a escutar mais do que falar
            é um exercício que o novo nos exige constantemente.
          </p>

          <p>
            Muitas vezes, esperamos pelo “momento certo” para explorar novos horizontes.
            Mas a verdade é que a maioria dos momentos certos se constrói no caminho.
            O primeiro passo nem sempre é claro, e isso faz parte da jornada.
            O importante é seguir, mesmo com incertezas — elas são o tempero da descoberta.
          </p>

          <p>
            Portanto, olhe além da linha do que é familiar. O mundo é vasto, e dentro de você também há um universo inteiro
            esperando para ser descoberto. A cada novo horizonte explorado, você retorna um pouco mais completo.
            E talvez, no fim das contas, seja essa a verdadeira viagem.
          </p>
          </p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>

  )
}

export default Single


