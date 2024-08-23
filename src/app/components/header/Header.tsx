import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import Github from '@/assets/logoGithub.svg'
import { useEffect, useRef, useState } from 'react';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  function handleIsModalOpen(){
    setIsModalOpen(true)
  }

  function handleIsModalClose(){
    setIsModalOpen(false)
  }

  useEffect(() => {
    if(isModalOpen){
      modalRef?.current?.focus()
    }
  },[isModalOpen])

  return (
    <header className="flex shadow-shape h-20">
      <div className="flex items-center justify-between m-auto max-w-5xl w-full px-4">
        {/* <Image
        src={Logo}
        width={286 / 2}
        alt="Blog da Rocketseat"
        /> */}
        <button type='button' 
          onClick={handleIsModalOpen} 
          aria-controls='modalA11y' 
          className="text-2xl text-[#8257e5] font-extrabold"
        >
          BLOG A11y
        </button>

        {isModalOpen && (
          <div ref={modalRef}
            id='modalA11y'
            role="dialog" 
            aria-labelledby='modalWEB' 
            aria-describedby='modalDescription'
            tabIndex={-1}
            className="fixed top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 p-32 bg-[#1a1a1b] text-white rounded-lg">
            
            <h2 id='modalWEB'>Bem vindos ao site Acessibilidade WEB</h2>
            <p id='modalDescription'>Eu sou um modal com acessibilidade.</p>
          </div>
        )}

        <nav className='flex h-20 items-end content-end flex-wrap gap-4 text-zinc-50'>
          <a href="/" aria-label="Para saber mais sobre acessibilidade acesse o site da W3C">
            <button type='button' 
              aria-label="Página inicial" 
              className='bg-[#8257e5] text-2xl rounded-t-md pt-4 px-6'>
                Inicio
            </button>
          </a>
          <a href="https://www.w3.org/WAI/fundamentals/" target='blank' aria-label="Para saber mais sobre acessibilidade acesse o site da W3C">
          <button type='button' 
              aria-label="Página inicial" 
              className='bg-[#8257e5] text-2xl  rounded-t-md pt-4 px-6'>
                Documentação
            </button>
          </a>
          <a href="./Tutorials" aria-label="Acesse os tutoriais de acessibilidade">
            <button type='button' 
              aria-label="Página inicial" 
              className='bg-[#8257e5] text-2xl  rounded-t-md pt-4 px-6'>
                Guias
            </button>
          </a>
        </nav>
        <div>
          <a href="https://github.com/Taynara-Veloso/accessibility_WEB_Fundamentals" aria-label="Para saber mais acesse o GitHub da aplicação">
            <Image
              src={Github}
              width={35}
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  );
}