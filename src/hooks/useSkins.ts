import { Skin } from '@/@types'
import { useState, useEffect } from 'react'

export const useSKins = (skins: Skin[], displayIcon: string) => {
  const error =
    'https://media.valorant-api.com/weaponskins/f454efd1-49cb-372f-7096-d394df615308/displayicon.png'

  const skinsQuantity = skins && skins.length
  const [rerender, setRerender] = useState(true)
  const [indexWeaponSkin, setIndexWeaponSkin] = useState(0)
  const [currentSkinImage, setCurrentSkinImage] = useState(displayIcon)

  const rerenderReset = () => {
    setTimeout(() => {
      setRerender(false)
    }, 500)
  }

  useEffect(() => {
    if (skins && skins.length > 0) {
      setCurrentSkinImage(skins[indexWeaponSkin].displayIcon ?? '')
      setRerender(true)
    }
    rerenderReset()
  }, [indexWeaponSkin, skins])

  const handleWeaponNextSkin = () => {
    if (skins && skins.length > 0) {
      setIndexWeaponSkin((prevIndex) => (prevIndex + 1) % skins.length)
      setRerender(true)
    }
    rerenderReset()
  }

  const handleWeaponPrevSkin = () => {
    if (skins && skins.length > 0) {
      setIndexWeaponSkin(
        (prevIndex) => (prevIndex - 1 + skins.length) % skins.length,
      )
      setRerender(true)
    }
    rerenderReset()
  }

  const handleSkinError = () => {
    setCurrentSkinImage(error)
  }

  return {
    rerender,
    skinsQuantity,
    currentSkinImage,
    handleSkinError,
    handleWeaponNextSkin,
    handleWeaponPrevSkin,
  }
}
