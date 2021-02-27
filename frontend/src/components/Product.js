import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from './Rating';

//remove style={{width: '18rem'}} from Card container to space out the cards more
const Product =({product}) => {
    return(
        <Card className='my-3 p-3 rounded' style={{ width: '18rem'}}>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'></Card.Img>
            </a>

            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as='div'>
                    <Rating value={product.rating} text={` ${product.numReviews} reviews`}></Rating>
                </Card.Text>

                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Product