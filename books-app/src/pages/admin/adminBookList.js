import Table from 'react-bootstrap/Table';
import './admin.css';
import { deleteBook, getAllBooks } from '../../services/api';
import { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function BookList() {
    const [books,setBooks] = useState([]);
    const renderBookRows = books.map((book) =>(
            <tr key={book.id}>
                <td>{book.id}</td>
                <td width={'15%'}><Image src={book.cover_image}alt="" width={'50%'}/></td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
                <td>{book.releaseDate}</td>
                <td><Button className='btnStyle_book'variant onClick={()=>deleteItimeBook(book.id)}>Delete</Button></td>
            </tr>
    ))

    const deleteItimeBook= (id)=>{
      deleteBook(id).then((res)=>{
        if(res.status == 200){
          getAllBooks().then((res)=>{
            setBooks(res.data);
          });
        }
      })
    }

    const getAll_in_table = async ()=>{
        try{
            const res =await getAllBooks();
            setBooks(res.data);
        }catch (error){
        console.log(error);
        }
    }

    useEffect(()=>{ 
        getAll_in_table();
    },[])

      return (
   <div>
        <Button as={Link} to={'add_book'} className='mt-3 btnStyle_book'>Add New book</Button>
        <Table striped bordered hover variant="dark" className='style_admin_BookList'>
          <thead >
            <tr>
              <th>id</th>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>author</th>
              <th>pages</th>
              <th>releaseDate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
        {renderBookRows}
          </tbody>
        </Table>
   </div>
      );
}

export default BookList;