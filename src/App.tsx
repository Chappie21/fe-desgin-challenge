import { MainRouter } from "./routers"
import { NavigationHeader, Footer } from "./components"

export const App = () => {

  return (
    <>
      {/* Navigation */}
      <NavigationHeader />

      {/* Main Content */}
      <MainRouter />

      {/* Footer */}
      <Footer />
    </>
  )
}
