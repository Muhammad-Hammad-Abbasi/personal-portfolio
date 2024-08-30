import Header from "../header/header";
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';


function Footer() {
  return (
    <div>
     
    <div className="text-center text-white mt-32 border border-cyan-50 h-42">
    
      <h1 className="mt-6">Follow Me</h1>
      <div>
      <div className="text-center justify-center flex items-center py-4 mt-3">
        <a href="https://www.linkedin.com/in/hammad-abbasi-95388628b/" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px', color: '#fff' }}>
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100068906216007" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/mr_hammad.abbasi/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
          <FaInstagram size={30} />
        </a>
      </div>
      </div>
      <Header/>
      </div>
      
    </div>
   
  )
}
export default Footer;