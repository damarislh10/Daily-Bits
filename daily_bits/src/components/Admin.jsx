import React, { useState, useEffect } from 'react'
import { ContainerAll } from '../styled/StyleHome';
import { urlEstadist } from '../helpers/urls'
import { StyleH2 } from '../styled/StyleSignup';
import { ContainerAdmin, TableA } from '../styled/StyleAdmin';
const Admin = () => {
  const [adminUs, setAdminUs] = useState({
    estadistUser: []

  }
  )

  useEffect(() => {
    getAllusers()
    return () => {

    };
  }, [])

  const getAllusers = async () => {
    const resp = await fetch(urlEstadist);
    const result = await resp.json();

    setAdminUs({
      estadistUser: result
    })

  }


  return (
    <div>
      <ContainerAll>
        <ContainerAdmin>
          <StyleH2 style={{ marginBottom: '5%' }}>Estadisticas de los usuarios</StyleH2>
          <TableA striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Usuario</th>
                <th>Respuestas Contestadas</th>
                <th>Respuestas Correctas</th>
                <th>Respuestas Incorrectas</th>

              </tr>
            </thead>
            <tbody>

              {adminUs.estadistUser.map(a => (
                <tr key={a.id}>
                  <td>{a.id}</td>
                  <td>{a.user}</td>
                  <td>{a.respContestadas}</td>
                  <td>{a.respCorrectas}</td>
                  <td>{a.respIncorrectas}</td>
                </tr>
              ))}

            </tbody>
          </TableA>
        </ContainerAdmin>

      </ContainerAll>
    </div>
  )
}

export default Admin
