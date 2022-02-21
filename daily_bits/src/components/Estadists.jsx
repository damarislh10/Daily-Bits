import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContainerAll } from '../styled/StyleHome'
import { ContainerEstadist, ContainerStadist } from '../styled/styleEstadist'
import { PeticionData } from '../helpers/PeticionData';
import { urlEstadist } from '../helpers/urls';
import { StyleH2 } from '../styled/StyleSignup';

const Estadists = () => {

  const [estadit, setEstadit] = useState({
    nombreS: "",
    idS: 0,
    questionCon: 0,
    questionCorrect: 0,
    questionIncorrect: 0

  })

  useEffect(() => {

    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estadit])


  const getData = async () => {

    let perfilUser = JSON.parse(localStorage.getItem("PerfilUser"));
    perfilUser = perfilUser !== null ? perfilUser : [];
    const data = await PeticionData(urlEstadist);
    perfilUser.forEach(user => {
      const { nombre } = user;
      setEstadit({
        ...estadit,
        nombreS: nombre
      })

    })

    const filterU = data.find(ue => ue.user === estadit.nombreS);

    setEstadit({
      nombreS: filterU.user,
      idS: filterU.id,
      questionCon: filterU.respContestadas,
      questionCorrect: filterU.respCorrectas,
      questionIncorrect: filterU.respIncorrectas
    })



  }

  return (
    <div>
      <ContainerAll>
        <ContainerStadist>

          <StyleH2 className="mb-4">Estadísticas</StyleH2>
          <div>

            <Row>
              <ContainerEstadist className="container-estadist">
                <Col xs={6} style={{ marginTop: "2%" }}>
                  <p> <img className="me-2" src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644686467/DailyBitsSprint2/Property_1_clock_zeobgn.svg" alt="reloj" />Tiempo de estudio (horas)</p>
                </Col>
                <Col>
                  <span>1</span>
                </Col>
              </ContainerEstadist>
              <ContainerEstadist className="container-estadist">
                <Col xs={6} style={{ marginTop: "2%" }}>
                  <p> <img className="me-2" src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644686465/DailyBitsSprint2/Property_1_message-circle_thvndw.svg" alt="mensaje" />Respuestas contestadas</p>
                </Col>
                <Col>
                  <span>{estadit.questionCon}</span>
                </Col>
              </ContainerEstadist>
              <ContainerEstadist className="container-estadist">
                <Col xs={6} style={{ marginTop: "2%" }}>
                  <p> <img className="me-2" src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644686465/DailyBitsSprint2/Property_1_message-circle_thvndw.svg" alt="mensaje" />Respuestas correctas</p>
                </Col>
                <Col>
                  <span style={{color:"var(--green)"}}>{estadit.questionCorrect}</span>
                </Col>
              </ContainerEstadist>
              <ContainerEstadist className="container-estadist">
                <Col xs={6} style={{ marginTop: "2%" }}>
                  <p> <img className="me-2" src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644686465/DailyBitsSprint2/Property_1_message-circle_thvndw.svg" alt="mensaje" />Respuestas incorrectas</p>
                </Col>
                <Col>
                  <span style={{color:"var(--red)"}}>{estadit.questionIncorrect}</span>
                </Col>
              </ContainerEstadist>
            </Row>
          </div>
        </ContainerStadist>
      </ContainerAll>
    </div>
  )
}

export default Estadists