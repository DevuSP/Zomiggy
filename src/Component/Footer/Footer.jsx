import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div
            className="flex flex-col h-80 items-center bg-slate-200">
            <div
                className="flex justify-between w-4/5 mt-16">
                <div>
                    <h1 className="mb-2">ABOUT ZOMIGGY</h1>
                    <Link to="/about/whoweare" className='block w-fit'>
                        <p>Who We Are</p>
                    </Link>
                    <Link to="/about/blog" className='block w-fit'>
                        <p>Blog</p>
                    </Link>
                    <Link to="/about/workwithus" className='block w-fit'>
                        <p> Work With Us</p>
                    </Link>
                    <Link to="/about/investorrelations" className='block w-fit'>
                        <p> Investor Relations </p>
                    </Link>
                    <Link to="/about/reportfraud" className='block w-fit'>
                        <p>Report Fraud </p>
                    </Link>
                    <Link to="/about/presskit" className='block w-fit'>
                        <p>Press Kit</p>
                    </Link>
                    <Link to="/about/contactus" className='block w-fit'>
                        <p> Contact Us </p>
                    </Link>
                </div>

                <div>
                    <h1 className="mb-2">LEARN MORE</h1>
                    <Link to="/learn/privacy" className='block w-fit'>
                        <p>Privacy</p>
                    </Link>
                    <Link to="/learn/security" className='block w-fit'>
                        <p> Security </p>
                    </Link>
                    <Link to="/learn/terms" className='block w-fit'>
                        <p>Terms </p>
                    </Link>
                </div>

                <div>
                    <h1 className="mb-2">FOR RESTAURANTS</h1>
                    <Link to="/forrestuarants/partnerwithus" className='block w-fit'>
                        <p>Partner With Us</p>
                    </Link>
                    <Link to="/forrestuarants/appsforyou" className='block w-fit'>
                        <p>Apps For You</p>
                    </Link>
                </div>

                <div>
                    <h1 className="mb-2">SOCIAL LINKS</h1>
                    <div
                        className='flex flex-wrap w-32'>
                        <Link to="/social/facebook">
                            <img src="./Zomiggy/images/facebook.png" alt="facebook link" className='h-8 mr-2' />
                        </Link>
                        <Link to="/instagram">
                            <img src="./Zomiggy/images/instagram.png" alt="instagram link" className='h-8 mx-2' />
                        </Link>
                        <Link to="/x"> 
                            <img src="./Zomiggy/images/x.png" alt="x link" className='h-8 ml-2' />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;
