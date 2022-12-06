import { Action } from "./components/Action"
import { Activity } from "./components/Activity"
import { ActivitySelection } from "./components/ActivitySelection"


function App() {


  return (
    <>
      <div className="p-20 my-9 mx-20 rounded-lg bg-[url('./img/camping4.jpeg')] bg-fixed items-center justify-center">
        <Activity />
        <ActivitySelection />
        <Action />
      </div>
    </>
  )
}

export default App
