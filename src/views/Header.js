import logo from "../logo.svg";
import './styles.css';
import {Button} from '@material-ui/core';
function Header() {
    return (
        <div className="App-header">
            <header>
                <div className="icon">
                    <img src="logo.jpg" className="logo"></img>
                </div>
                <div className="header-login-signin">
                    <p className="header-login-signin-p">
                        <a href="login">Login</a> | <a href="sign-in">Sing in
                    </a>
                    </p>
                </div>
            </header>
        </div>

    );
}

export default Header