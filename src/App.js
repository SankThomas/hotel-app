import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import Header from "./components/Header"
import Showcase from "./components/Showcase"

// Pages
import Rooms from "./pages/Rooms"

const App = () => {
  return (
    <Router>
      {/* ScrollToTop */}
      <Header />

      <Switch>
        <Route path="/" exact>
          <Showcase />
        </Route>
        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route path="/rooms:id">{/* <Room /> */}</Route>
      </Switch>
    </Router>
  )
}

export default App
