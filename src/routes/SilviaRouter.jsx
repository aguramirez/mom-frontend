import { SilviaProvider } from "../context/SilviaProvider"
import { Route, Routes } from "react-router-dom"
import { SilviaPage } from "../components/SilviaPage"
import { NavBar } from "../components/NavBar"

export const SilviaRouter = () => {

    return(
        <>
            <SilviaProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<SilviaPage />}></Route>
                </Routes>
            </SilviaProvider>
        </>
    )
}