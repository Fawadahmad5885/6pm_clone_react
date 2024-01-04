import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='footer_line'>
            </div>
            <div class="footer_contents">
                <div class="footerItem1">
                    <a href="" class="footerItems">Terms of use</a>
                    <a href="" class="footerItems">Privacy Policy</a>
                </div>
                <p class="footer_paragraph">
                    © 2009-2023 Zappos LLC or its affiliates, 400 East Stewart Avenue. Las
                    Vegas NV 89101<br />6pm.com is operated by Zappos IP LLC. Products on
                    6pm.com are sold by 6pm.com, LLC.<br />e-Gift Cards on 6pm.com are sold
                    by ACI Gift Cards LLC.<br />For premier service, selection, and
                    shipping, visit Zappos.com — your one-stop shop for the latest in Shoes,
                    Sandals, Dresses, Jeans and more!
                </p>
            </div>
        </div>
    )
}
export default Footer;
