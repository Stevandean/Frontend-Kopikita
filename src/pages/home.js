// import Footer from '../Components/footer';
function Home() {
    return (
        <div class="body">
            {/* <div class="hello-home">'KopiKita' */}
            <img class="home-head" src="home-head.jpg" alt=""></img>
            <div class="home">KopiKita</div>
            <div class="line">|</div>
            <div class="slider">
            <div class="dariaku">"dari aku, kopi dan kamu menjadi kita"</div>

                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="3000">
                            <img src="1.png" class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <img src="2.png" class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <img src="3.png" class="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                </div>

            <div class="top">
            <h2 id="top-menu">- Top Menu -</h2>
                <div class="card-top">
                <div class="card mx-5 mt-5">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <img src="croisant.jpg" class="card-img-top" alt=""></img>
                                        <h5 class="card-title">Croisant</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="makanan" class="btn btn-primary">Beli Sekarang</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <img src="croisant.jpg" class="card-img-top" alt=""></img>
                                        <h5 class="card-title">Croisant</h5>
                                        <p class="card-text">atau roti sabit adalah sejenis kue kering (pastry) yang berasal dari Prancis, dinamakan demikian karena bentuknya menyerupai bulan sabit.</p>
                                        <a href="/makanan" class="btn btn-primary">Beli Sekarang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>

    )
}
export default Home;