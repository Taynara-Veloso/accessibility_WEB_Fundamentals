import Image from 'next/image'
import a11y from '@/assets/a11y.png'
import social from '@/assets/Social.png'
import reading from '@/assets/ReadinGlasses.png'

export function Main() {
  return (
    <main className="max-w-6xl w-full m-auto text-start mb-20 text-gray-50">
      <div className="flex items-center py-1">
        <Image
        src={a11y}
        alt="Blog da Rocketseat"
        className='max-w-[628px] max-h-[628px]'
        />
        <div className="space-y-5">
          <h1 className="text-6xl text-[#8257e5] font-bold">Por que utilizar Acessibilidade?</h1>
          <div className="w-[420px] bg-[rgba(113,74,205,0.46)] shadow-shape p-5 mx-4 rounded-2xl">
            <p className="text-xl text-center font-semibold">
              Promover a acessibilidade significa assegurar às pessoas com deficiência o acesso, 
              em igualdade de oportunidades, ao meio físico, ao transporte, à informação e 
              comunicação, inclusive aos sistemas e tecnologias da informação e comunicação, 
              bem como a outros serviços e instalações abertos ao público ou de uso público.
            </p>
          </div>
        </div>

      </div>
      <div className="max-w-6xl m-auto">
        <div className="flex items-center justify-between">
          <Image
            src={social}
            alt="Blog da Rocketseat"
            className='max-w-[550px] max-h-[550px]'
          />
          <div className="w-[500px]">
            <p className="text-xl text-justify">
              Na Web, o termo <span className="text-3xl text-[#8257e5] font-bold">acessibilidade</span> se refere à quanto um Website é acessível para 
              todos os tipos de público, principalmente para que pessoas com deficiência 
              consigam utilizá-lo. Isso significa que, mesmo que o usuário seja portador de 
              qualquer doenças, transtornos ou deficiências de fala, visual, auditiva, cognitiva, 
              neurológica ou física, ele deve ser capaz de entender, navegar, interagir e contribuir 
              com a Web.
            </p>
          </div> 
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[500px]">
            <p className="text-xl text-justify">
              Mas acessibilidade não se refere exclusivamente a pessoas com deficiências ou necessidades 
              especiais. É sobre tornar <span className="text-3xl text-[#8257e5] font-bold"> a experiência da Web melhor para todos os usuários</span>, 
              desde a forma como as cores são usadas para tratar o contraste e legibilidade da página; 
              atalhos de teclado; ou até a legenda em um vídeo, que não só ajuda deficientes auditivos 
              a entender sobre o que o vídeo se trata, mas também para quem possui dificuldades temporárias, 
              como, por exemplo, um ambiente barulhento, um óculos quebrado, vídeo em outro idioma, onde existe 
              dificuldade para entender o que é dito, ou até mesmo a utilização dessa funcionalidade por preferência.
            </p>
          </div>
          <Image
            src={reading}
            alt="Blog da Rocketseat"
            className='max-w-[500px] max-h-[500px]'
          />
        </div>
      </div>
    </main>
  );
}