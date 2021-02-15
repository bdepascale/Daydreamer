import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';


//className py-3 for padding buffer
const App =() => {
  return (
    <>
    <Header></Header>
    <main className='py-3'>
      <Container>
        <h1>Welcome to Daydreamer</h1>
      </Container>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
