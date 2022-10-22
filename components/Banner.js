const Banner = () => {
    return ( 
        <div className="mx-[principal] lgmax:mx-8 flex justify-center items-center mb-16">
            <div className="flex lgmax:flex-col bg-blackcontainer text-white mx-5 py-10">
                <div className="w-1/3 lgmax:w-full lgmax:mb-5 flex justify-center text-xl italic text-center font-semibold">
                    <h1>BUY A <br/> CRYPTO REWARDS</h1>
                </div>
                <div className="w-1/3 lgmax:w-full lgmax:mb-5 lgmax:text-center">
                    <p> Holders will be rewarded with constant airdrops, contests, lotteries, and whitelists to future projects.</p>
                </div>
                <div className="w-1/3 lgmax:w-full flex justify-center items-center">
                    <a className="bg-[#222223] p-5 rounded-full">Buy on Open Sea</a>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;