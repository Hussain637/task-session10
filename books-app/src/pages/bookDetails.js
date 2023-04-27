 import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { getBookById } from '../services/api';
import { useEffect, useState } from 'react';
import './page.css';
function BookDetails() {
const {id} = useParams();
const [book,setBook] = useState({});
const getBook =async ()=>{
    try{
    const res =await getBookById(id);
    console.log(res.data);
    setBook(res.data);
    }catch(err){
        console.log(err);
    };

};
useEffect(()=>{
    getBook();
},[]);

return (
        <Card className="bg-dark text-white">
          <Card.Img src={book.cover_image} alt="Card image" className='img_card_content' />
          <Card.ImgOverlay className='Card_ImgOverlay_content'>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
            author: {book.author}
            </Card.Text>
            <Card.Text>pages: {book.pages}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      );
    }

export default BookDetails;