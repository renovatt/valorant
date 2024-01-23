import { Skin } from '@/@types'
import { useState, useEffect } from 'react'

export const useSKins = (skins: Skin[], displayIcon: string) => {
  const error =
    'https://media.valorant-api.com/weaponskins/f454efd1-49cb-372f-7096-d394df615308/displayicon.png'

  const loadingImage =
    'https://media.valorant-api.com/weaponskins/9c134f41-4c29-1bd8-682e-178e7f349c9b/displayicon.png'

  const skinsQuantity = skins && skins.length

  const [rerender, setRerender] = useState(false)
  const [indexWeaponSkin, setIndexWeaponSkin] = useState(0)
  const [currentSkinImage, setCurrentSkinImage] = useState(displayIcon)
  const [imageLoaded, setImageLoaded] = useState(false)

  const rerenderReset = () => {
    setTimeout(() => {
      setRerender(false)
    }, 500)
  }

  useEffect(() => {
    if (skins.length) {
      setCurrentSkinImage(skins[indexWeaponSkin].displayIcon ?? '')
      setRerender(true)
      setImageLoaded(true)
    }
    rerenderReset()
  }, [indexWeaponSkin, skins, imageLoaded])

  const handleWeaponNextSkin = () => {
    if (skins.length) {
      setImageLoaded(false)
      setIndexWeaponSkin((prevIndex) => (prevIndex + 1) % skins.length)
    }
  }

  const handleWeaponPrevSkin = () => {
    if (skins.length) {
      setImageLoaded(false)
      setIndexWeaponSkin(
        (prevIndex) => (prevIndex - 1 + skins.length) % skins.length,
      )
    }
  }

  const handleSkinError = () => {
    setCurrentSkinImage(error)
  }

  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement>,
  ): void => {
    event.currentTarget.style.opacity = '1'
    setImageLoaded(true)
    setRerender(true)
    // rerenderReset()
  }

  return {
    loadingImage,
    imageLoaded,
    rerender,
    skinsQuantity,
    currentSkinImage,
    handleImageLoad,
    handleSkinError,
    handleWeaponNextSkin,
    handleWeaponPrevSkin,
  }
}
