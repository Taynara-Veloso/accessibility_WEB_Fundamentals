import * as Dialog from '@radix-ui/react-dialog';

export function DialogContent() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-[rgba(0,0,0,0.75)]"/>
      <Dialog.Content className="fixed top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 p-32 bg-[#1a1a1b] text-white rounded-lg">
        <Dialog.Title>
          Bem vindos ao site Acessibilidade WEB
        </Dialog.Title>
        <Dialog.Description>
          Eu sou um modal com acessibilidade.
        </Dialog.Description>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  )
}