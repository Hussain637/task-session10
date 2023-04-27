import { Button } from 'react-bootstrap';
import './layouts.css'
import { Link, Outlet } from 'react-router-dom';
function AdminLayout() {
    return (  
        <>
        <div className='nav_admin'>
            <h2>admin Area</h2>
        <Button as={Link} to={'/'} className='btn_back_home'>HomePage</Button>
        <Button as={Link} to={'/admin'} className='btn_back_admin'>Admin</Button>
        </div>
        <Outlet/>
        </>
    );
}

export default AdminLayout;