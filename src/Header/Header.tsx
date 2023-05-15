import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <h1>
            Header
        </h1>
         <ul>
        <li>
            <Link to ="/home">Home</Link>    
        </li>
        <li>
            <Link to ="/show"> ShowData </Link>    
        </li>
        
       </ul> 
      </div>
    )
};

export default Header;