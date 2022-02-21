import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ContainerAll } from '../styled/StyleHome';
import queryString from 'query-string'
import Swal from 'sweetalert2'
import { Containerlogin } from '../styled/StyleLogin';

const Login = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search);
  const [login, setLogin] = useState({
    correo: q
  })

  const { correo } = login;

  const handleChanged = ({ target }) => {
    setLogin({
      ...login,
      [target.name]: target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${correo}`)
    getLocal()
  }

  const getLocal = () => {
    let datosUser = JSON.parse(localStorage.getItem("userRegistro"));
    datosUser = datosUser !== null ? datosUser : [];

    const datFilter = datosUser.filter(d => d.correo.toLocaleLowerCase() === login.correo.toLocaleLowerCase())
    if (datFilter.length === 1) {
      navigate('/home')
      localStorage.setItem("PerfilUser", JSON.stringify(datFilter));
    } else if (login.correo === "") {
      Swal.fire({
        icon: 'warning',
        title: 'Debes ingresar un correo'
      })
    } else if (datFilter.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Cuenta no registrada'
      })
    }

  }



  return (
    <div>
      <ContainerAll>
        <Containerlogin>
          <img style={{ width: '100px', objectFit: 'cover' }} src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644686451/DailyBitsSprint2/Color_Purple_Container_Yes_dpghxn.png" alt="logoDaily" />
          <h1 style={{ margin: '10% 0' }}>Iniciar sesion</h1>
          <hr></hr>
          <form onSubmit={handleSubmit}>
            <label>Correo electrónico</label>
            <input
              style={{ margin: '4% 0' }}
              type="email"
              placeholder="Ingrese su correo electrónico"
              className="form-control"
              name="correo"
              value={correo}
              onChange={handleChanged}

            />

          </form>

          <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10% 0' }}>
            <p>¿Aùn no tienes una cuenta?</p>
            <Link to='/signup' style={{ color: "var(--green)" }}> Inscribirse</Link>
          </div>

        </Containerlogin>
      </ContainerAll>
    </div>
  )
}

export default Login