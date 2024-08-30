import './home.css';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import foto from './foto.jpg';
export default function Home() {
  return (
    <main>
      <div className='content'>
        <img src={foto} alt='Foto Gabriel' className='foto' />
        <h1 className='titulo'>Gabrirel Ventura </h1>
        <p className='descricao'>
          Desenvolvedor Full Stack | React | Typescript | node.js | MySQL | SQL
          Server | Git
        </p>
        <div className='links'>
          <button className='github'>
            <BsGithub />
            <a href='https://github.com/slycoder0' target='_blank'>
              Github
            </a>
          </button>
          <button className='linkedin'>
            <BsLinkedin />
            <a
              href='https://www.linkedin.com/in/gabriel-ventura-13028b208/'
              target='_blank'
            >
              Linkedin
            </a>
          </button>
          <button className='instagram'>
            <BsInstagram />
            <a href='' target='_blank'>
              Instagram
            </a>
          </button>
          <button className='email'>
            <SiGmail />
            <a href='' target='_blank'>
              Email
            </a>
          </button>
          <button>
            <a href='' target='_blank'>
              ?
            </a>
          </button>
        </div>
      </div>
      <footer> slycoder &copy; 2024</footer>
    </main>
  );
}
