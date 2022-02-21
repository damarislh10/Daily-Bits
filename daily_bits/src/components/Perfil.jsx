import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ContainerAll } from '../styled/StyleHome'
import { ContainerSign, StyleH2 } from '../styled/StyleSignup'

export default class Perfil extends Component {
    constructor() {
        super();
        this.state = {
            nombreS: "",
            correoS: ""
        }
    }
    componentDidMount() {
        this.getPerfil()
    }

    getPerfil() {
        let perfilUser = JSON.parse(localStorage.getItem("PerfilUser"));
        perfilUser = perfilUser !== null ? perfilUser : [];

        perfilUser.forEach(perf => {
            const { nombre, correo } = perf;
            this.setState({
                nombreS: nombre,
                correoS: correo,
            })

        });

    }
    render() {


        return (
            <div>
                <ContainerAll>
                    <ContainerSign style={{color:"#fff"}}>
                        <StyleH2>Perfil</StyleH2>
                        <div className="w-5 my-4">
                            <img style={{ width: '35%' }} src="https://res.cloudinary.com/df90q7vvj/image/upload/v1645030877/DailyBitsSprint2/sp-girl_p0qevi.png" alt="avatar" />
                        </div>
                        <div>
                            <h3 style={{color:"#fff"}}>{this.state.nombreS}</h3>
                            <h5 style={{color:"#fff"}}>{this.state.correoS}</h5>
                        </div>
                        <Link to='/login' className="fw-bold fs-5" style={{ color: "var(--red)", textDecoration: "none" }}> Cerrar sesion</Link>
                    </ContainerSign>

                </ContainerAll>
            </div>
        )
    }
}
