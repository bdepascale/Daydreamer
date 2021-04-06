import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import MissionScreen from './screens/MissionScreen'
import ContactScreen from './screens/ContactScreen'
const App =() => {
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/shoppingCart/:id?' component={CartScreen}></Route>
          <Route path='/mission/:id?' component={MissionScreen}></Route>
          <Route path='/contact/:id?' component={ContactScreen}></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  )
}
export default App
