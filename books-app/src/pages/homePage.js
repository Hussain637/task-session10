import { Col, Container, Row } from "react-bootstrap";
import BookItem from "../components/bookItem";
import { useEffect, useState } from "react";
import { getAllBooks } from "../services/api";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const [books,setBooks] = useState([]);
    const navigate = useNavigate();
const BookList = books.map((book)=>(
    <Col lg={4} key={book.id} onClick={()=> navigate(`/book/${book.id}`)}>
     <BookItem book={book} />
    </Col>
))
    const getAll = async ()=>{
        try{
            const res =await getAllBooks();
            setBooks(res.data);
        }catch (error){
        console.log(error);
        }
    }

    useEffect(()=>{ 
        getAll();
    },[])

    return (  
    <Container>
    <Row>
    { BookList.length > 0 ? BookList : <Loading/>}
    </Row>
    </Container>
    );
}
export default HomePage;