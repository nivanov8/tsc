import '../App.css';
import { Outlet, Link } from "react-router-dom";

export function Homepage(){
    return(
        <>
        <body>
            <div class="main">
                <nav class="navbar navbar-expand-lg content">
                    <div class="container-fluid">
                        <Link class="navbar-brand mx-auto" to="/">
                            <div class="motive-fitness">
                                <span class="header-text">The</span>
                                <span class="header-text">Soccer</span>
                                <span class="header-text">Centre</span>
                            </div>
                        </Link>

                        <div class="collapse navbar-collapse justify-content-center">
                            <span>Serving the Soccer Community since 1997</span>
                        </div>
                        
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <div class="navbar-nav">
                                <Link class="btn btn-primary cancel">
                                    Signup
                                    <i class="bi bi-person"></i>
                                </Link>
                                <Link class="btn btn-primary cancel">
                                    Checkout
                                    <i class="bi bi-cart4"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <footer class="footer">
                <div>
                    <div class="footer-text-left">
                        <p class="footer-text">523 Donald St</p>
                        <p class="footer-text">K1K 2J7</p>
                        <p class="footer-text">Canada, ON</p>
                    </div>
                    <div class="footer-text-right">
                        <span class="footer-text">(613)-974-0982</span>
                        <i class="bi bi-telephone"></i>
                        <br></br>
                        <span class="footer-text">tsc@soccer.com</span>
                        <i class="bi bi-envelope"></i>
                        
                    </div>
                    
                </div>
            </footer>
        </body>
            
           
        </>


    )

}
export default Homepage;
