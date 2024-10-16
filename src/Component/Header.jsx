import logoImg from "../assets/Images/logo.svg"
import menuBar from "../assets/Images/menubar.png";
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <header className= "header">
                <div className= "logoNav">
                    <img src={logoImg} alt="logoImg" id="logo"/>
                    <div className="navigation">
                        <nav>Features</nav>
                        <nav>Company</nav>
                        <nav>Career</nav>
                        <nav>About</nav>
                    </div>
                    <div id="menu">
                        <img src={menuBar} alt="Menu" id="menu" width="20px"/>
                    </div> 
                    <div className="loginBtn">
                        <nav>Login</nav>
                        <button>Register</button>
                    
                    </div>

                </div>
            
            </header>
        </div>
    );
};

export default Header