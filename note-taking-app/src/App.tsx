import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import { NewNote } from "./NewNote";

type Note = {
  id: string & NoteData
}

type NoteData = {
  title: string,
  markdown: string,
  tags: Tag[]
}

type Tag = {
  id: string,
  label: string
}

function App() {

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Hi</h1>}></Route>
        <Route path="/new" element={<NewNote />}></Route>
        <Route path="/:id">
          <Route index element={<Navigate to="/" />} />
          <Route path="edit" element={<h1></h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Container>
  )
}

export default App
