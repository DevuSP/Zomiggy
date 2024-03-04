import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div
            className="flex flex-col h-96 items-center bg-slate-200 border-4 border-black">
            <div
                className="flex justify-between w-3/5 mt-16 border-4 border-red-300">
                <div>
                    <h1 className="mb-2">ABOUT ZOMIGGY</h1>
                    <Link to="" className='block w-fit'>
                        <p>Who We Are</p>
                    </Link>
                    <Link to="" className='block w-fit'>
                        <p>Blog</p>
                    </Link>
                    <Link to="" className='block w-fit'>
                        <p> Work With Us</p>
                    </Link>
                    <Link to="" className='block w-fit'>
                        <p> Investor Relations </p>
                    </Link>
                    <Link to="" className='block w-fit'>
                        <p>Report Fraud </p>
                    </Link>
                    <Link to="" className='block w-fit'>
                        <p>Press Kit</p>
                    </Link>
                    <Link to="" className='block w-fit'>
                        <p> Contact Us </p>
                    </Link>
                </div>

                <div>
                    <h1 className="mb-2">LEARN MORE</h1>
                    <Link to="" className='block w-fit'>
                        <p>Privacy</p>
                    </Link>
                    <Link to="" className='block w-fit'>
                        <p> Security </p>
                    </Link>
                    <Link to="" className='block w-fit'>
                        <p>Terms </p>
                    </Link>
                </div>

                <div>
                    <h1 className="mb-2">FOR RESTAURANTS</h1>
                    <Link to="" className='block w-fit'>
                        <p>Partner With Us</p>
                    </Link>
                    <Link to="" className='block w-fit'>
                        <p>Apps For You</p>
                    </Link>
                </div>

                <div>
                    <h1 className="mb-2">SOCIAL LINKS</h1>
                    <div
                        className='flex flex-wrap w-32'>
                        <Link>
                            <img src="images/facebook.png" alt="facebook link" className='h-8 mr-2' />
                        </Link>
                        <Link>
                            <img src="images/instagram.png" alt="instagram link" className='h-8 mx-2' />
                        </Link>
                        <Link>
                            <img src="images/x.png" alt="x link" className='h-8 ml-2' />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;
