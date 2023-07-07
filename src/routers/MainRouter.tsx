import { Routes, Route, Navigate } from "react-router-dom"
import { ItemsView } from "../views"

/*
    * Main Router

    This route has a unique virtual route that will be the ItemsView, in case of typing any other route, 
    it will redirect to the main route '/', which is the view of the items.
*/
export const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<ItemsView />}/>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
