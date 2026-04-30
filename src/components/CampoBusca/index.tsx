import { useDispatch, useSelector } from 'react-redux'
import { alterarTermo } from '../../store/reducers/filtro'
import { CampoBusca } from './styles'
import { RootReducer } from '../../store'

const BarraBusca = () => {
  const dispatch = useDispatch()
  const termo = useSelector((state: RootReducer) => state.filtro.termo)

  return (
    <CampoBusca
      type="text"
      placeholder="Buscar"
      value={termo}
      onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
    />
  )
}

export default BarraBusca
