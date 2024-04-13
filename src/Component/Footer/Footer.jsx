import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div
            className="flex flex-col h-80 items-center bg-slate-200">
            <div
                className="flex justify-between w-4/5 mt-16 italic">
                <div>
                    <h1 className="mb-2 text-lg font-medium underline">ABOUT</h1>
                    <a href='/Zomiggy' className='block w-fit h-7 hover:underline hover:text-lg'>
                        <p>Home</p>
                    </a>
                    <Link to="/about/whoweare" className='block w-fit h-7 hover:underline hover:text-lg'>
                        <p>Who We Are</p>
                    </Link>
                    <Link to="/about/blog" className='block w-fit h-7 hover:underline hover:text-lg'>
                        <p>Blog</p>
                    </Link>
                    <Link to="/about/workwithus" className='block w-fit h-7 hover:underline hover:text-lg'>
                        <p> Work With Us</p>
                    </Link>
                    <Link to="/about/investorrelations" className='block w-fit h-7 hover:underline hover:text-lg'>
                        <p> Investor Relations </p>
                    </Link>
                    <Link to="/about/reportfraud" className='block w-fit h-7 hover:underline hover:text-lg'>
                        <p>Report Fraud </p>
                    </Link>
                    <Link to="/about/presskit" className='block w-fit h-7 hover:underline hover:text-lg'>
                        <p>Press Kit</p>
                    </Link>
                    <Link to="/about/contactus" className='block w-fit h-7 hover:underline hover:text-lg'>
                        <p> Contact Us </p>
                    </Link>
                </div>

                <div>
                    <h1 className="mb-2 text-lg font-medium underline truncate">LEARN MORE</h1>
                    <Link to="/learn/privacy" className='block w-fit h-7 hover:underline hover:text-lg'>
                        <p>Privacy</p>
                    </Link>
                    <Link to="/learn/security" className='block w-fit h-7 hover:underline hover:text-lg'>
                        <p> Security </p>
                    </Link>
                    <Link to="/learn/terms" className='block w-fit h-7 hover:underline hover:text-lg'>
                        <p>Terms </p>
                    </Link>
                </div>

                <div>
                    <h1 className="mb-2 text-lg font-medium underline truncate">FOR RESTAURANTS</h1>
                    <Link to="/forrestuarants/partnerwithus" className='block w-fit h-7 hover:underline hover:text-lg'>
                        <p>Partner With Us</p>
                    </Link>
                    <Link to="/forrestuarants/appsforyou" className='block w-fit h-7 hover:underline hover:text-lg'>
                        <p>Apps For You</p>
                    </Link>
                </div>

                <div>
                    <h1 className="mb-2 text-lg font-medium underline truncate">SOCIAL LINKS</h1>
                    <div
                        className='flex flex-wrap w-32'>
                        <Link to="/social/facebook" className='flex flex-row mb-2 hover:underline hover:text-lg'>
                            <img src="./Zomiggy/images/facebook.png" alt="facebook link" className='h-8 mr-1' />
                            Facebook
                        </Link>
                        <Link to="/instagram" className='flex flex-row mb-2 hover:underline hover:text-lg'>
                            <img src="./Zomiggy/images/instagram.png" alt="instagram link" className='h-8 mx-2' />
                            Instagram
                        </Link>
                        <Link to="/x" className='flex flex-row hover:underline hover:text-lg'> 
                            <img src="./Zomiggy/images/x.png" alt="x link" className='h-8 ml-2 mr-1' />
                            X(Twitter)
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;
