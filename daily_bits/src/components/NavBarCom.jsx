import React, { useEffect } from 'react'
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { ContainerNav, LabelStyled } from "../styled/StyleNavBar";
import { urlUser } from "../helpers/urls"
import { PeticionData } from '../helpers/PeticionData';
const NavBarCom = () => {
  const [admin, setAdmin] = useState({
    isadminis: "",
    name: ""
  })
  const { isadminis, name } = admin;
  useEffect(() => {

    accesoApp()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin])



  const accesoApp = async () => {

    let petU = await PeticionData(urlUser)
    let perfilUser = JSON.parse(localStorage.getItem("PerfilUser"));
    perfilUser = perfilUser !== null ? perfilUser : [];

    perfilUser.forEach(user => {
      const { isAdmin, nombre } = user;
      setAdmin({
        isadminis: isAdmin,
        name: nombre
      })

    })
    petU.forEach(element => {
      if (name === element.nombre) {
        if (element.isAdmin === true) {
          setAdmin({
            ...admin,
            isadminis: element.isAdmin
          })
        }
      }

    });
  }
  return (
    <div>
      <ContainerNav>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Link to="/home" className="nav-link" ><img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644705254/DailyBitsSprint2/Component_1_ytkhrz.png" alt="home" /><LabelStyled>Home</LabelStyled></Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/estadists" className="nav-link"><img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644705330/DailyBitsSprint2/Union_1_r3i3u5.png" alt="estadistica" /><LabelStyled>Estadisticas</LabelStyled></Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/perfil" className="nav-link"><img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644705337/DailyBitsSprint2/Component_2_v0a53s.png" alt="perfil" /><LabelStyled>Perfil</LabelStyled></Link>
          </Nav.Item>

          <Nav.Item>
            {isadminis === true ? <Link to="/admin" className="nav-link"><img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644705337/DailyBitsSprint2/Component_2_v0a53s.png" alt="perfil" /><LabelStyled>Admin</LabelStyled></Link> : ""}

          </Nav.Item>


        </Nav>
      </ContainerNav>

    </div>
  )
}

export default NavBarCom