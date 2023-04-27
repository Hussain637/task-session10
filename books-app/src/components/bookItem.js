import './components.css';
import Card from 'react-bootstrap/Card';
function BookItem({book}) {
    return (  
    <Card className='card'>
      <Card.Img variant="top" src={book.cover_image} className='img_card' style={{  objectFit: 'contain'}}/>
      <Card.Body className='card_body'>
        <Card.Title>Name Book: <p>{book.title}</p></Card.Title>
        <Card.Title>author: <p>{book.author}</p></Card.Title>
        <Card.Title>pages: <span>{book.pages}</span></Card.Title>
        <Card.Title>releaseDate: <span>{book.releaseDate}</span></Card.Title>
      </Card.Body>
    </Card>
  );
}

export default BookItem;