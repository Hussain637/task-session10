import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addBook } from '../../services/api';
import { useNavigate } from 'react-router-dom';

function AddBook() {
    const [title,setTitle] = useState('')
    const [coverImage,setCoverImage] = useState('')
    const [author,setAuthor] = useState('')
    const [pages,setPages] = useState(1)
     const [releaseDate,setReleaseDate] = useState('')
     const navigate = useNavigate();

     const onSubmitHandler =(e)=>{
        e.preventDefault();
        console.log(title,coverImage,author,pages,releaseDate);
        addBook({
            title,
           cover_image: coverImage
            ,author
            ,pages,
            releaseDate
        }).then((res)=>{
            console.log(res);
            if(res.status ==200 || res.status ==201 || res.status ==204){
                navigate('/admin');
            }
        })
     }
    return ( 
        <Container>
                <Form onSubmit={onSubmitHandler}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label className='text-light'>Title</Form.Label>
                <Form.Control type="text" placeholder=" Add Book Title" className='bg-dark text-light' value={title} onChange={(e)=>setTitle(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Cover Tmage">
                <Form.Label className='text-light'> Cover Tmage</Form.Label>
                <Form.Control type="text" placeholder="Add cover Image" className='bg-dark text-light' value={coverImage} onChange={(e)=>setCoverImage(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="author">
                <Form.Label className='text-light'>  author</Form.Label>
                <Form.Control type="text" placeholder=" Add author" className='bg-dark text-light' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Pages">
                <Form.Label className='text-light'>Pages</Form.Label>
                <Form.Control type="text" placeholder=" Add Oage" className='bg-dark text-light' value={pages} onChange={(e)=>setPages(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="ReleaseDate">
                <Form.Label className='text-light'>ReleaseDate</Form.Label>
                <Form.Control type="text" placeholder=" Add ReleaseDate" className='bg-dark text-light' value={releaseDate} onChange={(e)=>setReleaseDate(e.target.value)}/>
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
        </Container>

     );
}

export default AddBook;