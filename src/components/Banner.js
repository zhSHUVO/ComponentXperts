import Image from "next/image";

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row ">
                    <Image
                        src="https://i.ibb.co/qjcFYht/daniel-lezuch-I4-Dc-RJ-Evd8-unsplash.jpg"
                        priority={true}
                        alt="hero image"
                        width={640}
                        height={426}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">ComponentXperts!</h1>
                        <p className="py-6">
                            Welcome to{" "}
                            <span className="font-bold">ComponentXperts</span> -
                            Your Ultimate Destination for Cutting-Edge Tech
                            Solutions!
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
