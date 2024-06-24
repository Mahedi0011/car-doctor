
import img1 from '../../../../assets/images/banner/1.jpg'
import img2 from '../../../../assets/images/banner/2.jpg'
import img3 from '../../../../assets/images/banner/3.jpg'
import img4 from '../../../../assets/images/banner/4.jpg'
// import img5 from '../../../../assets/images/banner/5.jpg'
// import img6 from '../../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full s">
                <img src={img1} className="w-full md: rounded-xl " />
                <div className="h-full rounded-xl flex bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  top-0 left-0 right-5 bottom-0 ">
                    <div className='text-white w-1/3 pl-20 pt-28 items-center space-y-6'>
                        <h6 className='text-5xl font-bold '>Affordable price for car servicing</h6>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque nihil dicta quae,  omnis ducimus obcaecati eos mollitia laborum quaerat.</p>
                        <div className='sm:grid grid-cols-1   md:grid-cols-2'>
                            <button className="btn btn-error mr-4 text-white">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Project view</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="h-full rounded-xl flex bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  top-0 left-0 right-5 bottom-0 ">
                    <div className='text-white w-1/3 pl-20 pt-28 items-center space-y-6'>
                        <h6 className='text-5xl font-bold '>Affordable price for car servicing</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque nihil dicta quae,  omnis ducimus obcaecati eos mollitia laborum quaerat.</p>
                        <div>
                            <button className="btn btn-error mr-4">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Project view</button>
                        </div>
                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                        <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                            <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="h-full rounded-xl flex bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  top-0 left-0 right-5 bottom-0 ">
                    <div className='text-white w-1/3 pl-20 pt-28 items-center space-y-6'>
                        <h6 className='text-5xl font-bold '>Affordable price for car servicing</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque nihil dicta quae,  omnis ducimus obcaecati eos mollitia laborum quaerat.</p>
                        <div>
                            <button className="btn btn-error mr-4">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Project view</button>
                        </div>
                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="h-full rounded-xl flex bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  top-0 left-0 right-5 bottom-0 ">
                    <div className='text-white w-1/3 pl-20 pt-28 items-center space-y-6'>
                        <h6 className='text-5xl font-bold '>Affordable price for car servicing</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque nihil dicta quae,  omnis ducimus obcaecati eos mollitia laborum quaerat.</p>
                        <div>
                            <button className="btn btn-error mr-4">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Project view</button>
                        </div>
                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;