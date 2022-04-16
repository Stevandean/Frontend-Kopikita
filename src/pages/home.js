function Home() {
    return (
        <div class="body">
            {/* <div class="hello-home">'KopiKita' */}
            <img class="home-head" src="home-head.jpg" alt=""></img>
            <div class="home">KopiKita</div>
            <div class="line">|</div>
            <div class="slider">
            <div class="dariaku">"dari aku, kopi dan kamu menjadi kita"</div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="1.png" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="2.png" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="3.png" class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Home