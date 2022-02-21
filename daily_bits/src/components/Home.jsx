import { Link } from 'react-router-dom';
import React from 'react';
import { ContainerComp, ContainerQuest, ContainerAll, BtnCircle } from '../styled/StyleHome';


const Home = () => {

    const estadiIni = {
        score: 0,
        aswerIncorrect: 0,
    }

    localStorage.setItem("estadistI", JSON.stringify(estadiIni));

    return (
        <div>
            <div>
                <ContainerAll>
                    <ContainerComp>
                        <p style={{ fontSize: "20px" }}>Practica tus conocimientos en la categoría que prefieras.</p>
                        <ContainerQuest>
                            <div>
                                <BtnCircle>
                                    <Link to="/question/html" ><img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644708212/DailyBitsSprint2/Ellipse_9_2_erhriq.png" alt='html' />
                                    </Link>
                                </BtnCircle>
                                <div>
                                    <label>HTML</label>
                                </div>
                            </div>


                            <div style={{ marginLeft: "3%" }}>
                                <BtnCircle >
                                    <Link to="/question/css" >
                                        <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644709703/DailyBitsSprint2/Ellipse_9_3_cgldjt.png" alt="css" />
                                    </Link>
                                </BtnCircle>
                                <div>
                                    <label>CSS</label>
                                </div>
                            </div>

                            <div>
                                <BtnCircle>
                                    <Link to="/question/js" >
                                        <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644709697/DailyBitsSprint2/Ellipse_9_4_lzuoib.png" alt="js" />
                                    </Link>
                                </BtnCircle>
                                <div>
                                    <label>JAVASCRIPT</label>
                                </div>
                            </div>

                            <div style={{ marginLeft: "3%" }}>
                                <BtnCircle>
                                    <Link to="/question/figma" >

                                        <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644709690/DailyBitsSprint2/Ellipse_9_5_aahohj.png" alt="figma" />
                                    </Link>

                                </BtnCircle>
                                <div>
                                    <label>FIGMA</label>
                                </div>
                            </div>

                            <div>
                                <BtnCircle>
                                    <Link to="/question/ux" >

                                        <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644709679/DailyBitsSprint2/Ellipse_9_6_fkcw5g.png" alt="ux" />
                                    </Link>
                                </BtnCircle>
                                <div>
                                    <label>UX</label>
                                </div>
                            </div>


                        </ContainerQuest>
                    </ContainerComp>
                </ContainerAll>
            </div>

        </div>
    )
}

export default Home

