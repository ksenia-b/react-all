import Quiz from "./Quiz"
import { jsQuizz } from "./constants";

function App() {

  return (
    <>
      <Quiz questions={jsQuizz} />
    </>
  )
}

export default App
