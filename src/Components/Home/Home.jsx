import './home.css';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import foto from './foto.png';
import Portfolio from '../Portfolio/Portfolio';

export default function Home() {
  return (
    <main>
      <div className='content'>
        <img src={foto} alt='Foto Gabriel' className='foto' />
        <h1 className='titulo'>Gabriel Ventura</h1>
        <p className='descricao'>
          Desenvolvedor Full Stack | React | Typescript | node.js | MySQL | SQL
          Server | Git
        </p>
        <div className='links'>
          <a href='https://github.com/slycoder0' target='_blank'>
            <button className='github'>
              <BsGithub />
              Github
            </button>
          </a>
          <a
            href='https://www.linkedin.com/in/gabriel-ventura-13028b208/'
            target='_blank'
          >
            <button className='linkedin'>
              <BsLinkedin />
              Linkedin
            </button>
          </a>
          <a href='#' target='_blank'>
            <button className='instagram'>
              <BsInstagram />
              Instagram
            </button>
          </a>
          <a href='' target='_blank'>
            <button className='email'>
              <SiGmail />
              Email
            </button>
          </a>
          <a href='' target='_blank'>
            <button className='portfolio'>Portfolio</button>
          </a>
        </div>
      </div>
      <Portfolio />
      <footer> slycoder &copy; 2024</footer>
    </main>
  );
}
