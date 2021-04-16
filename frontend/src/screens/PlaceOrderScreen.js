import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button, Row, Col, ListGroup, Image, Card} from "react-bootstrap"
import {useDispatch, useSelector} from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import Message from '../components/Message'

const PlaceOrderScreen = () => {
    const cart = useSelector(state => state.cart)

    const placeOrderHandler = () => {
        console.log('order')
    }
    let cartItems;
    try{
        cartItems = JSON.parse(localStorage.getItem('cart'));
    }
    catch(ex){
        cartItems = [];
    }
    return (<>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <Row>
            <Col md={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Shipping</h2>
                        <p>
                            <strong>Address: </strong>
                            {cart.shippingAddress.address},
                            {cart.shippingAddress.city},
                            {cart.shippingAddress.postalCode},
                            {cart.shippingAddress.country}
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <strong>Method: </strong>
                        {cart.paymentMethod}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Order Items</h2>
                        {cartItems === null || cartItems.length === 0
                            ? <Message>Your cart is empty <Link to='/'>Go Back</Link></Message> 
                            : (
                                <ListGroup variant='flush'>
                                    {cartItems.map(item => (
                                        <ListGroup.Item key={item.product}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded></Image>
                                                </Col>
                                                <Col>
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </Col>
                                                <Col md={4}>{item.qty} x ${item.price} = ${(item.qty * item.price).toFixed(2)}</Col>
                                            </Row>

                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={4}>
            {cartItems === null || cartItems.length === 0
                ? <Card><ListGroup variant='flush'><ListGroup.Item><h2>Subtotal 0</h2></ListGroup.Item></ListGroup></Card> 
                : (
                    <Card>
                        <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h2>Order Summary</h2>
                                </ListGroup.Item>
                                <ListGroup.Item key={cartItems.product}>
                                    <Row>
                                        <Col>Items</Col>
                                        <Col>${cartItems.reduce((acc, currItem) => Number(acc) + Number(currItem.qty) * Number(currItem.price), 0).toFixed(2)}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item key={cartItems.product}>
                                    <Row>
                                        <Col>Shipping</Col>
                                        <Col>${cartItems.reduce((acc, currItem) => Number(acc) + Number(currItem.qty) * Number(currItem.price), 0).toFixed(2) > 100 ? 29.99 : 19.99}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item key={cartItems.product}>
                                    <Row>
                                        <Col>Tax</Col>
                                        <Col>${cartItems.reduce((acc, currItem) => Number(acc) + Number(currItem.qty) * Number(currItem.price) *0.07, 0).toFixed(2)}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item key={cartItems.product}>
                                    <Row>
                                        <Col>Total</Col>
                                        <Col>${cartItems.reduce((acc, currItem) => (Number(acc) + Number(currItem.qty) * Number(currItem.price) *0.07) + (Number(acc) + Number(currItem.qty) * Number(currItem.price)), 0).toFixed(2)}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <form id="order-form"  action="/orderplaced">
                                    <input type="submit" id ="order-submit" class="form-control" value="Place Order"></input>
                                </form>
                        </ListGroup>
                    </Card>
                )}
            </Col>
        </Row>
        </>
    )
}

export default PlaceOrderScreen
