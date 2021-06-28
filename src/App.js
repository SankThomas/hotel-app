import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import Showcase from "./components/Showcase"
import Book from "./components/Book"
import Features from "./components/Features"
import Grid from "./components/Grid"
import Comfy from "./components/Comfy"
import Footer from "./components/Footer"

// Pages
import Rooms from "./pages/Rooms"
import Offers from "./components/Offers"
import BookNow from "./pages/BookNow"

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Switch>
        <Route path="/" exact>
          <Showcase />
          <Book />
          <Features />
          <Grid />
          <Comfy />
          <Offers />
        </Route>
        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route path="/rooms:id">{/* <Room /> */}</Route>
        <Route path="/book-now">
          <BookNow />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
