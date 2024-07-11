import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
  openGuestModal: () => void;
  emailIsToInvite: string[]
  openConfirmTripModal: () => void;
}

export function InviteGuestsStep({
  openGuestModal,
  emailIsToInvite,
  openConfirmTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">
      <button type='button' onClick={openGuestModal} className='flex items-center gap-2 flex-1 text-left'>
        <UserRoundPlus className='size-5 text-zinc-400' />
        {emailIsToInvite.length > 0 ? (
          <span className='text-zinc-100 text-lg flex-1'>
            {emailIsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (

          <span className='text-zinc-400 text-lg flex-1'>Quem estará na viagem?</span>
        )

        }

      </button>

      <div className='w-px h-6  bg-zinc-800' />

      <Button onClick={openConfirmTripModal} variant="primary" >
        Confirmar viagem
        <ArrowRight className='size-5' />
      </Button>
    </div>
  )
}