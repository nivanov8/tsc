import '../App.css';
import { Outlet, Link } from "react-router-dom";

export function Checkout(){
    return(
        <>
            <body>
                <div class="main">
                    <nav class="navbar navbar-expand-lg content">
                        <div class="container-fluid">
                            <Link class="navbar-brand mx-auto" to="/">
                                <div class="tsc">
                                    <span class="header-text">The</span>
                                    <span class="header-text">Soccer</span>
                                    <span class="header-text">Centre</span>
                                </div>
                            </Link>

                            <div class="collapse navbar-collapse middle">
                                <span>Serving the Soccer Community since 1997</span>
                            </div>
                            
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <div className="navbar-nav">
                                    <Link to="/signin" className="btn btn-primary top" style={{ marginRight: "0.5em" }}>
                                    <span style={{ display: "flex", alignItems: "center" }}>
                                        Sign in&nbsp;
                                        <i className="bi bi-person" style={{ marginLeft: "0.25em" }}></i>
                                    </span>
                                    </Link>
                                    <Link to="/mycart" className="btn btn-primary top">
                                    <span style={{ display: "flex", alignItems: "center" }}>
                                        Checkout&nbsp;
                                        <i className="bi bi-cart4" style={{ marginLeft: "0.25em" }}></i>
                                    </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div class="mb-3 row mt-3">
                        <label for="inputUsername" class="col-sm-2 col-form-label" style={{margin: "0em 0em 0em 3em"}}>Sign in or continue as guest</label>
                        <div class="col-sm-4">
                            <Link to="/myaccount" class="btn btn-primary submit">Sign in</Link>
                        </div>
                    </div>

                    <hr></hr>
                    

                    <div class="row" style={{margin: "3em 0em 0em 3em"}}>
                        <label for="inputUsername" class="col-sm-1 col-form-label">Delivery: </label>
                        <div class="col-sm-2">
                            <div class="form-check mt-2 form-check-reverse">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked></input>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    In-Store Pickup
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-2" style={{margin: "0em 0em 2em 3em"}}>
                            <div class="form-check mt-2 form-check-reverse">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Delivery
                                </label>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div class="row" style={{margin: "0em 0em 2em 3em"}}>
                        <label for="email" class="col-sm-2 col-form-label">Email:</label>
                        <div class="col-sm-2">
                            <input type="text" class="form-control" id="email" placeholder="Email"></input>
                        </div>
                        <label for="address" class="col-sm-2 col-form-label" style={{marginLeft: "4em"}}>Address:</label>
                        <div class="col-sm-2">
                            <input type="text" class="form-control" id="address" placeholder="Address"></input>
                        </div>
                    </div>
                    <div class="row" style={{margin: "0em 0em 2em 3em"}}>
                        <label for="card" class="col-sm-2 col-form-label">Card Number:</label>
                        <div class="col-sm-2">
                            <input type="text" class="form-control" id="card" placeholder="Card Number"></input>
                        </div>
                        <label for="city" class="col-sm-2 col-form-label" style={{marginLeft: "4em"}}>City:</label>
                        <div class="col-sm-2">
                            <input type="text" class="form-control" id="city" placeholder="City"></input>
                        </div>
                    </div>
                    <div class="row" style={{margin: "0em 0em 2em 3em"}}>
                        <label for="exp-date" class="col-sm-2 col-form-label">Expiry Date: </label>
                        <div class="col-sm-2">
                            <input type="text" class="form-control" id="exp-date" placeholder="Expiry Date"></input>
                        </div>
                        <label for="postal" class="col-sm-2 col-form-label" style={{marginLeft: "4em"}}>Postal Code: </label>
                        <div class="col-sm-2">
                            <input type="text" class="form-control" id="postal" placeholder="Postal Code"></input>
                        </div>
                    </div>
                    <div class="row" style={{margin: "0em 0em 2em 3em"}}>
                        <label for="cvv" class="col-sm-2 col-form-label">CVV: </label>
                        <div class="col-sm-2">
                            <input type="text" class="form-control" id="cvv" placeholder="CVV"></input>
                        </div>
                    </div>

                    <Link to="/pickuporder" class="btn btn-primary btn-lg" style={{margin: "2em 0em 0em 3em"}}>Confirm</Link>



                </div>

                <footer class="footer">
                    <div>
                        <div class="footer-text-left">
                            <p class="footer-text">523 Donald St</p>
                            <p class="footer-text">K1K 2J7</p>
                            <p class="footer-text">Canada, ON</p>
                        </div>
                        <div class="footer-text-right">
                            <div class="row" style={{marginRight: "0"}}>
                                <div class="col-sm-5" style={{marginRight: "1em"}}>
                                    <Link to="/chat" style={{color: "white"}}>Live Chat</Link>
                                </div>
                                <div class="col-sm-4" style={{padding: "0", marginLeft: "2em"}}>
                                    <span class="footer-text">(613)-974-0982</span>
                                </div>
                                <div class="col-sm-1" style={{padding: "0"}}>
                                    <i class="bi bi-telephone"></i>
                                </div>
                                
                                
                            </div>
                            <div class="row" style={{marginRight: "0"}}>
                                <div class="col-sm-5" style={{marginRight: "1em"}}>
                                    <Link to="/aboutus" style={{color: "white"}}>About Us</Link>
                                </div>
                                <div class="col-sm-4" style={{padding: "0", marginLeft: "2em"}}>
                                    <span class="footer-text">tsc@soccer.com</span>
                                </div>
                                <div class="col-sm-1" style={{padding: "0"}}>
                                    <i class="bi bi-envelope"></i>
                                </div>
                                
                            </div>
                            
                            
                            
                            
                        </div>
                        
                    </div>
                </footer>
            </body>
        </>

    )

}

export default Checkout;