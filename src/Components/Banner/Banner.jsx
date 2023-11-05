

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[85vh]">

                <div id="slide1" className="carousel-item relative w-full" style={{
                    backgroundImage: 'url(https://dslv9ilpbe7p1.cloudfront.net/e_jjybKM_6sIvSuNqoeS9Q_store_banner_image.jpeg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'}}>

                    <div className="hero-overlay absolute bg-opacity-70"></div>
                    <div className="ml-40 max-w-xl  my-auto z-10">
                        <h1 className="font-bold text-white text-4xl pb-4 ease-in">Fire Safety Plan</h1>
                        <p className="text-white text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis saepe quasi similique consectetur at a, consequuntur quam mollitia assumenda maxime.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item text-center relative w-full" style={{
                    backgroundImage: 'url(https://www.shutterstock.com/image-photo/firefighter-man-stop-burning-flame-260nw-1494846074.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    <h1 className="text-center font-bold text-white">Hello</h1>
                    <div className="hero-overlay absolute"></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={'https://img.freepik.com/premium-photo/fireman-using-water-extinguisher-fighting_327072-8650.jpg'} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img src={'https://primlink.com/wp-content/uploads/2023/03/what-are-the-advantages-1024x576-1-1024x480.jpg'} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;