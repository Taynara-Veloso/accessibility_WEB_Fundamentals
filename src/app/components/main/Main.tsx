import Image from 'next/image'
import a11y from '@/assets/a11y.png'

export function Main() {
  return (
    <main className="max-w-6xl w-full m-auto text-start mb-20 text-slate-300">
      <div className="flex items-center py-2">
        <Image
        src={a11y}
        alt="Blog da Rocketseat"
        className='max-w-[628px] max-h-[628px]'
        />
        <h1 className="text-6xl text-[#8257e5]">Por que utilizar Acessibilidade?</h1>
      </div>
    </main>
  );
}