import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import {addToCart, removeFromCart} from '../actions/cartActions'

const CartScreen = ({match, location, history}) => {

    const dispatch = useDispatch()


    const removeFromCartHandler = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        console.log(cartItems.indexOf(product))
        cartItems.splice(cartItems.indexOf(product), 1)
        localStorage.setItem('cart',JSON.stringify(cartItems));
        window.location.reload();
    }

    const checkoutHanhler = () => {
        history.push('/login?redirect=shipping')
    }

    const dropdownChangeHandler = (event, product) =>{
        console.log(event.target.value);
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        let index = cartItems.findIndex((element) => element.id === product.id)
        console.log(index)
        product.qty = event.target.value;
        cartItems[index] = product;
        localStorage.setItem('cart',JSON.stringify(cartItems));
        window.location.reload();
    }

    let cartItems;
    try{
        cartItems = JSON.parse(localStorage.getItem('cart'));
    }
    catch(ex){
        cartItems = [];
    }
    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems === null || cartItems.length === 0
                    ? <Message>Your cart is empty <Link to='/'>Go Back</Link></Message> 
                    : (
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded></Image>
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>${item.price}</Col>
                                        <Col md={2}>
                                            <Form.Control 
                                            as='select' 
                                            value={item.qty} 
                                            onChange={(e) => dropdownChangeHandler(e, item)}>
                                                {[...Array(item.countInStock).keys()].map(x => (
                                                    <option key = {x + 1} value ={x+1}>{x+1}</option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                        <Col md={2}>
                                           <Button type='button' variant='light' onClick={() => removeFromCartHandler(item)}>
                                               <i className='fas fa-trash'></i>
                                           </Button>
                                        </Col>
                                    </Row>

                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
            </Col>
            <Col md={4}>
            {cartItems === null || cartItems.length === 0
                ? <Card><ListGroup variant='flush'><ListGroup.Item><h2>Subtotal 0</h2></ListGroup.Item></ListGroup></Card> 
                : (
                    <Card>
                        <ListGroup variant='flush'>
                                <ListGroup.Item key={cartItems.product}>
                                    <h2>Subtotal ({cartItems.reduce((acc, currItem) => Number(acc) + Number(currItem.qty), 0)}) items</h2>
                                    ${cartItems.reduce((acc, currItem) => Number(acc) + Number(currItem.qty) * Number(currItem.price), 0).toFixed(2)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button type='button' className='btn-block' onClick={checkoutHanhler}>Proceed To Checkout</Button>
                                </ListGroup.Item>
                        </ListGroup>
                    </Card>
                )}
            </Col>
        </Row>
    )
}

export default CartScreen
