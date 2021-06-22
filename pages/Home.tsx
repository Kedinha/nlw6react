import illustrationImg from '../src/assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

export function Home() {
  return (
    <>
    <aside>
      <img src={illustrationImg} alt="ilustração simboliza perguntas e respostas " />
      <strong>Crie salas do Q&amp;A ao vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo-real</p>
    </aside>
    <main>
      <div>
        <img src={logoImg} alt="Letmeask" />
      </div>
    </main>

     </> 
  )
}
