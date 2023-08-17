import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal from './styles'

function App() {
  return (
    <>
      <EstiloGlobal></EstiloGlobal>
      <Sidebar />
      <main>
        <Sobre></Sobre>
        <Projetos></Projetos>
      </main>
    </>
  )
}

export default App
