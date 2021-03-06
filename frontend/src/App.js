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
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import MessageSent from './screens/MessageSent'
import OrderPlaced from './screens/OrderPlaced'
import SearchScreen from './screens/SearchScreen'

const App =() => {
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <Route path='/shipping' component={ShippingScreen}></Route>
          <Route path='/payment' component={PaymentScreen}></Route>
          <Route path='/placeorder' component={PlaceOrderScreen}></Route>
          <Route path='/login' component={LoginScreen}></Route>
          <Route path='/register' component={RegisterScreen}></Route>
          <Route path='/profile' component={ProfileScreen}></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/shoppingCart/:id?' component={CartScreen}></Route>
          <Route path='/mission/:id?' component={MissionScreen}></Route>
          <Route path='/contact/:id?' component={ContactScreen}></Route>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/:keyword' component={SearchScreen} exact></Route>
          <Route path='/MessageSent' component={MessageSent}></Route>
          <Route path='/orderplaced' component={OrderPlaced}></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  )
}
export default App
