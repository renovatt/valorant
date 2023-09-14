import { NextAndPrevButtonsProps } from '@/@types'
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl'

const NextAndPrevButtons = ({
  handleWeaponNextSkin,
  handleWeaponPrevSkin,
}: NextAndPrevButtonsProps) => {
  return (
    <section className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-between">
      <button
        onClick={handleWeaponPrevSkin}
        className="bg-prev-btn h-full px-1 font-bold text-white opacity-20 transition-all ease-in-out hover:opacity-100"
      >
        <SlArrowLeft className="h-full w-7 text-red-500" />
      </button>
      <button
        onClick={handleWeaponNextSkin}
        className="bg-next-btn h-full px-1 font-bold text-white opacity-20 transition-all ease-in-out hover:opacity-100"
      >
        <SlArrowRight className="h-full w-7 text-red-500" />
      </button>
    </section>
  )
}
export default NextAndPrevButtons
