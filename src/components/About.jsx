import React from 'react'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">

                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-dark fw-bold mb-4">Sobre nós</h1>                   
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta doloribus non sunt culpa sapiente qui quaerat, deleniti sint reprehenderit. Vitae odio, itaque asperiores animi iure ipsa et obcaecati? Molestias!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt reiciendis dolorem illo sint eligendi doloribus consectetur totam libero voluptatum! Cumque exercitationem dolorem amet ut dolores saepe neque voluptas molestias perferendis!</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>

                <div className="row"> 
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/719956666254098446/1104604037384515625/timeempresa.jpg" alt="About Us" height="250px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit dolorem totam libero impedit accusantium quis maxime, minus optio ea error modi quos atque similique, velit delectus assumenda. Deleniti, enim.</p>                      
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About
