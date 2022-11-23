import Button from "./components/Button"

function App() {

  const otraCosa = () => {
    console.log('click algo')
  }

  const subirCambios = () => {
    console.log('subir cambios ⬆️')
  }

  return (
    <div className="App container">
      <Button className="btn btn-primary" onClick={otraCosa} primary>Primary</Button>
      <Button className="btn btn-outline btn-warning" onClick={subirCambios} secondary>Daniela</Button>
    </div>
  )
}

export default App
