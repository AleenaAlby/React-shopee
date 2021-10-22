import React,{Component} from 'react'

export class Footer extends Component{
    render(){
        return(
            <footer>

            <div class="footer-area footer-padding">
                <div class="container">
                    <div class="row d-flex justify-content-between">
                        <div class="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                           <div class="single-footer-caption mb-50">
                             <div class="single-footer-caption mb-30">
                                  {/* <!-- logo --> */}
                                 <div class="footer-logo">
                                     <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""/></a>
                                 </div>
                                 <div class="footer-tittle">
                                     <div class="footer-pera">
                                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                 </div>
                             </div>
                           </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#"> Offers & Discounts</a></li>
                                        <li><a href="#"> Get Coupon</a></li>
                                        <li><a href="#">  Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>New Products</h4>
                                    <ul>
                                        <li><a href="#">Woman Cloth</a></li>
                                        <li><a href="#">Fashion Accessories</a></li>
                                        <li><a href="#"> Man Accessories</a></li>
                                        <li><a href="#"> Rubber made Toys</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>Support</h4>
                                    <ul>
                                     <li><a href="#">Frequently Asked Questions</a></li>
                                     <li><a href="#">Terms & Conditions</a></li>
                                     <li><a href="#">Privacy Policy</a></li>
                                     <li><a href="#">Privacy Policy</a></li>
                                     <li><a href="#">Report a Payment Issue</a></li>
                                 </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Footer bottom --> */}
                    <div class="row">
                     <div class="col-xl-7 col-lg-7 col-md-7">
                         <div class="footer-copy-right">
                       </div>
                     </div>
                      <div class="col-xl-5 col-lg-5 col-md-5">
                         <div class="footer-copy-right f-right">
                             {/* <!-- social --> */}
                             <div class="footer-social">
                                 <a href="#"><i class="fab fa-twitter"></i></a>
                                 <a href="#"><i class="fab fa-facebook-f"></i></a>
                                 <a href="#"><i class="fab fa-behance"></i></a>
                                 <a href="#"><i class="fas fa-globe"></i></a>
                             </div>
                         </div>
                     </div>
                 </div>
                </div>
            </div>
            {/* <!-- Footer End--> */}
     
        </footer>
        )
    }
}

export default Footer