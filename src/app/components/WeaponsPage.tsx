import Title from './Tiltle'
import GridWeapons from './GridWeapons'
import ViewContent from './ViewContent'
import ViewContainer from './ViewContainer'

const WeaponsPage = () => {
  return (
    <ViewContainer>
      <Title title="Armas" />
      <ViewContent>
        <GridWeapons />
      </ViewContent>
    </ViewContainer>
  )
}
export default WeaponsPage
