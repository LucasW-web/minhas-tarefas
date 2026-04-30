import ListaDeContatos from '../../containers/ListaDeContatos'
import BarraSuperior from '../../containers/BarraSuperior'
import BotaoNovoContato from '../../components/BotaoFlutuante'

const Home = () => (
  <>
    <ListaDeContatos />
    <BotaoNovoContato />
    <BarraSuperior />
  </>
)

export default Home
