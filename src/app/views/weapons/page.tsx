import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridWeapons from '@/app/components/GridWeapons'
import Title from '@/app/components/Tiltle'

export default function Weapons() {
  return (
    <ViewContainer>
      <Title title="Armas" />
      <ViewContent>
        <GridWeapons />
      </ViewContent>
    </ViewContainer>
  )
}
