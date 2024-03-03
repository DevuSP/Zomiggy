
function Footer() {
    return (
        <div
            className="h-56 flex flex-col items-center bg-slate-200 border-4 border-black">
            <div
                className="flex justify-between w-1/2 border-4 border-red-300">
                <div>
                    <h1 className="mb-2">ABOUT ZOMIGGY</h1>
                    <Link href="">
                        <p>Who We Are</p>
                    </Link>
                    <Link href="">
                        <p>Blog</p>
                    </Link>
                    <Link href="">
                        <p> Work With Us</p>
                    </Link>
                    <Link href="">
                        <p> Investor Relations </p>
                    </Link>
                    <Link href="">
                        <p>Report Fraud </p>
                    </Link>
                    <Link href="">
                        <p>Press Kit</p>
                    </Link>
                    <Link href="">
                        <p> Contact Us </p>
                    </Link>
                </div>

                <div>
                    <h1 className="mb-2">LEARN MORE</h1>
                    <Link href="">
                        <p>Privacy</p>
                    </Link>
                    <Link href="">
                        <p> Security </p>
                    </Link>
                    <Link href="">
                        <p>Terms </p>
                    </Link>
                </div>

                <div>
                    <h1 className="mb-2">FOR RESTAURANTS</h1>
                    <Link href="">
                        <p>Partner With Us</p>
                    </Link>
                    <Link href="">
                        <p>Apps For You</p>
                    </Link>
                </div>

                <div>
                    <h1  className="mb-2">SOCIAL LINKS</h1>
                    <Link><img src="images/facebook.png" alt="facebook link" />Facebook</Link>
                    <Link><img src="images/instagram.png" alt="instagram link" />Instagram</Link>
                    <Link><img src="images/x.png" alt="x link" />X(Twitter)</Link>
                </div>

            </div>
        </div>
    )
}
export default Footer;
