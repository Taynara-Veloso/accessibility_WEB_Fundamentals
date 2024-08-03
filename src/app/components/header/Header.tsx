import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import Github from '@/assets/logoGithub.svg'

export function Header() {
  return (
    <header className="flex shadow-shape h-20">
      <div className="flex items-center justify-between m-auto max-w-5xl w-full px-4">
        <Image
        src={Logo}
        width={286 / 2}
        alt="Blog da Rocketseat"
        />
        <nav className='flex h-20 items-end content-end flex-wrap gap-4 text-zinc-50'>
          <a href="#" aria-label="Para saber mais sobre acessibilidade acesse o site da W3C">
            <button type='button' 
              aria-label="Página inicial" 
              className='bg-[#8257e5] rounded-t-md pt-4 px-6'>
                Home
            </button>
          </a>
          <a href="https://www.w3.org/WAI/tutorials/" aria-label="Para saber mais sobre acessibilidade acesse o site da W3C">
          <button type='button' 
              aria-label="Página inicial" 
              className='bg-[#8257e5]  rounded-t-md pt-4 px-6'>
                Documentation
            </button>
          </a>
          <a href="https://www.w3.org/WAI/tutorials/" aria-label="Acesse os tutoriais de acessibilidade">
            <button type='button' 
              aria-label="Página inicial" 
              className='bg-[#8257e5]  rounded-t-md pt-4 px-6'>
                Guides
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