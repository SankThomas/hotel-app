import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import Header from "./components/Header"
import Showcase from "./components/Showcase"
import Book from "./components/Book"
import Features from "./components/Features"

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
          <Book />
          <Features />
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
