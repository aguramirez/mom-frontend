import { Routes, Route } from "react-router-dom"
import { SilviaRouter } from "./routes/SilviaRouter"

export const App = () => {

  return(
    <>
      <Routes>
        <Route path="/*" element={<SilviaRouter />}> </Route>
      </Routes>
    </>
  )
}