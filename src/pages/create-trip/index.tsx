import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'

export function CreateTripPage() {
  const navigate = useNavigate()

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [emailIsToInvite, setEmailIsToInvite] = useState([
    'pablorossoni@gmail.com'
  ])

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestModal() {
    setIsGuestsModalOpen(false)
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }


  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    //Pegando o email do input
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()
    if (!email) {
      return
    }

    if (emailIsToInvite.includes(email)) {
      return
    }
    //Adicionando no array existente
    setEmailIsToInvite([
      ...emailIsToInvite,
      email
    ])

    //Limpando o input
    event.currentTarget.reset()
  }

  function removeEmailFromInvite(emailToRemove: string) {
    const newEmailList = emailIsToInvite.filter((email) => email !== emailToRemove)
    setEmailIsToInvite(newEmailList)
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault
    navigate('/trips/123')
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center box bg-pattern bg-no-repeat bg-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <div className=' flex flex-col items-center gap-3'>
            <img src="/logo.svg" alt="" />
            <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>

          </div>

          <div className='space-y-4'>
            <DestinationAndDateStep
              closeGuestsInput={closeGuestsInput}
              isGuestsInputOpen={isGuestsInputOpen}
              openGuestsInput={openGuestsInput}
            />

            {
              isGuestsInputOpen && (
                <InviteGuestsStep
                  emailIsToInvite={emailIsToInvite}
                  openConfirmTripModal={openConfirmTripModal}
                  openGuestModal={openGuestModal}
                />
              )
            }
          </div>

          <p className="text-sm text-zinc-500">
            Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
            com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>
          </p>
        </div>

        {isGuestsModalOpen && (
          <InviteGuestsModal
            emailIsToInvite={emailIsToInvite}
            addNewEmailToInvite={addNewEmailToInvite}
            closeGuestModal={closeGuestModal}
            removeEmailFromInvite={removeEmailFromInvite}
          />
        )}

        {isConfirmTripModalOpen && (
          <ConfirmTripModal
            closeConfirmTripModal={closeConfirmTripModal}
            createTrip={createTrip}
          />
        )}
      </div >
    </>
  )
}

