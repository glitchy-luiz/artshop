import React from 'react'


const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img src="https://images.ecycle.com.br/wp-content/uploads/2022/10/26154048/anna-kolosyuk-D5nh6mCW52c-unsplash-scaled.jpg.webp" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="https://imgs.cursosdeformacao.com.br/img_cursos/prod/img_1230x644/educacao/artes-no-ensino-fundamental.webp" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Anterior</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Próximo</span>
                            </button>
                        </div>
                        
                        <div>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="fw-bold mb-4 navvermelho">Bem-vindo</h1>
                                <hr />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam doloremque illo dolorum possimus, atque molestias assumenda enim veritatis exercitationem, sunt magnam dolor, nostrum labore hic animi sed. Quis, quod?</p>
                                <hr />
                            </div>
                            <div className="col-12 ">
                                <h1 className="navvermelho fw-bold mb-4 text-center">Nosso trabalho</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos accusamus voluptas, dignissimos officiis officia sit quo nam libero optio assumenda, non quia. Rerum voluptatum eius illo dolorum neque, deserunt hic.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio doloribus similique facilis cum dolorem asperiores atque rem rerum labore hic aspernatur molestiae totam voluptatibus odit laboriosam distinctio, ipsa at.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas architecto repellat, inventore delectus omnis esse enim eum. Quas aspernatur quisquam amet. Iure inventore, repellat magnam totam unde nam quibusdam laborum!</p>
                                <hr />
                            </div>
                            <div className="col-12 ">
                                <h1 className="navvermelho fw-bold mb-4 text-center">Nós conheça</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam vitae voluptatem accusantium labore reiciendis et cumque cum facere pariatur molestias esse, ullam sequi id voluptas voluptatum nam? Consequatur, sunt.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa praesentium eum fuga minus aliquam labore illo dicta voluptates iusto. Neque veritatis ex rerum velit sint repellat assumenda, sunt nulla ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                    )
}

                    export default Home