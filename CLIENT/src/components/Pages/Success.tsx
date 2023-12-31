// --------------- IMPORTS ---------------
import { Link } from "react-router-dom";



// --------------- COMPONENT ---------------
function Success() {


    // COMPONENT:
    return (
        <main className="min-w-full min-h-screen flex justify-center items-center bg-white dark:bg-softBlack">
            <div className="w-[50%] xs:w-[80%] sm:w-[80%] md:w-[60%] lg:w-[50%] h-[70%] flex flex-col justify-center items-center text-black dark:text-white transition-all">
                <span className="relative w-full">
                    <h1 className="flex justify-between items-center w-full text-[clamp(0.5rem,calc(0.5rem+2.5vw+1vh),2.5rem)]">
                        {/* <span><div className="flex w-8 sm:w-6 xs:w-6 h-8 sm:h-6 xs:h-6 rounded-full bg-black dark:bg-white text-white dark:text-black font-[ultrabold] select-none transition-all duration-500 hover:rotate-0">I</div>NPUT</span><span>IT</span> */}
                        <div className="flex row items-center">
                            <div className="flex justify-center items-center w-[calc(0.5rem+4vw+1vh)] max-w-[3rem] h-[calc(0.5rem+4vw+1vh)] max-h-[3rem] rotate-[-30deg] rounded-full bg-black dark:bg-white text-white dark:text-black font-[ultrabold] select-none transition-all duration-500 hover:rotate-0">
                                <span className="translate-y-1 xs:translate-y-[0.17rem] transition-transform">
                                    I
                                </span>
                            </div>
                            <span className="translate-y-1 xs:translate-y-[0.17rem] transition-transform">NPUT</span>
                        </div>
                        <span className="translate-y-1 xs:translate-y-[0.17rem] transition-transform">IT</span>
                    </h1>
                </span>
                <h2 className="flex text-center items-center justify-between w-full text-[clamp(2rem,calc(1rem+12vw+1vh),8rem)] xs:text-[clamp(2rem,calc(1rem+10vw+1vh),8rem)] md:text-[clamp(2rem,calc(1rem+10vw+1vh),8rem)] lg:text-[clamp(2rem,calc(1rem+9vw+1vh),8rem)] transition-all duration-100">
                    <span>THANKS</span><span>!</span>
                </h2>
                <p className="w-full text-[calc(.5rem+1vw+.5vh)] text-right">
                    for your answer.
                </p>
                <Link
                    to="/results"
                    className="mt-4 block w-full pt-[1rem] pb-[.6rem] px-4 text-center text-[clamp(1rem,calc(.5rem+5vw+0.5vh),3rem)] transition-all duration-200 bg-flame hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                    {/* <a
                        className="block w-full pt-[1rem] pb-[.6rem] px-4 text-center text-[clamp(1rem,calc(.5rem+5vw+0.5vh),3rem)] transition-all duration-200 bg-flame hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                    > */}
                    Review other inputs
                    {/* </a> */}
                </Link>
                <p className="mt-4 text-[calc(.5rem+1vw+.5vh)] text-justify px-[.5rem]">
                    You're on time to change your answer. <u>Click above</u>.
                </p>
            </div>
        </main>
    );
};


// --------------- EXPORTS ---------------
export default Success;