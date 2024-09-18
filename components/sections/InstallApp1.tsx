import Link from "next/link"

export default function InstallApp1() {
    return (
        <>

            <section className="section-box box-install-app background-body">
                <div className="container">
                    <div className="block-install-apps">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-40 wow fadeInLeft"><span className="btn btn-tag">Install APP  Get discount
                                code</span>
                                <h2 className="title-why neutral-1000">Discover Seamless Travel with Lenz Trav</h2>
                                <p className="text-xl-medium neutral-500">Embark on a journey like never before with Lenz Trav –
                                    your ultimate travel companion.</p>
                                <div className="download-apps"> <Link href="#"><img src="/assets/imgs/template/googleplay.png" alt="Lenz Trav" /></Link><Link href="#"><img src="/assets/imgs/template/appstore.png" alt="Lenz Trav" /></Link></div>
                            </div>
                            <div className="col-lg-6 mb-40 text-end wow fadeInRight">
                                <div className="box-images-apps"> <img className="img-phone" src="/assets/imgs/page/homepage4/phone.png" alt="Lenz Trav" /><img className="img-laptop" src="/assets/imgs/page/homepage4/laptop.png" alt="Lenz Trav" />
                                    <div className="shape"> <img className="ml-40 mb-10" src="/assets/imgs/page/homepage4/arrow-big.png" alt="Lenz Trav" /><img src="/assets/imgs/page/homepage4/arrow-sm.png" alt="Lenz Trav" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
