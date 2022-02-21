import React, { useEffect, useState } from 'react'
import { urlHtml, urlCss, urlJs, urlFigma, urlUx, urlEstadist } from '../helpers/urls';
import { useNavigate, useParams } from "react-router-dom";
import { PeticionData } from '../helpers/PeticionData';
import { Form } from "react-bootstrap";
import Swal from 'sweetalert2'
import 'animate.css';
import 'antd/dist/antd.min.css'
import { Progress } from 'antd';

import {
  DivForm,
  FormStyle,
  Titulo,
  RadioStyled,
  ButtonStyled,
  DivProgress,
  DivRadio,
} from "../styled/StyleQuestion";

let petiH = 0;
const Questions = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [progress, setProgress] = useState({
    progressS: 0
  });
  const [questionstate, setQuestion] = useState({
    numberQuestion: 0,
    question: {
      question: "",
      a: "",
      b: "",
      c: "",
      correct: "",
    },
    score: 0,
    answerIncorrect: 0,
    answerSelect: "",
  }
  );


  useEffect(() => {

    const getData = async () => {
      if (category === "html") {
        petiH = await PeticionData(urlHtml)
        const currentQuizData = petiH[questionstate.numberQuestion]

        setQuestion({
          ...questionstate,
          question: {
            question: currentQuizData.question,
            a: currentQuizData.a,
            b: currentQuizData.b,
            c: currentQuizData.c,
            correct: currentQuizData.correcta,
          },
        })




      } else if (category === "css") {
        petiH = await PeticionData(urlCss)
        const currentQuizData = petiH[questionstate.numberQuestion]
        setQuestion({
          ...questionstate,
          question: {
            question: currentQuizData.question,
            a: currentQuizData.a,
            b: currentQuizData.b,
            c: currentQuizData.c,
            correct: currentQuizData.correcta,
          },
        })
      } else if (category === "js") {
        petiH = await PeticionData(urlJs)
        const currentQuizData = petiH[questionstate.numberQuestion]
        setQuestion({
          ...questionstate,
          question: {
            question: currentQuizData.question,
            a: currentQuizData.a,
            b: currentQuizData.b,
            c: currentQuizData.c,
            correct: currentQuizData.correcta,
          },
        })
      } else if (category === "figma") {
        petiH = await PeticionData(urlFigma)
        const currentQuizData = petiH[questionstate.numberQuestion]
        setQuestion({
          ...questionstate,
          question: {
            question: currentQuizData.question,
            a: currentQuizData.a,
            b: currentQuizData.b,
            c: currentQuizData.c,
            correct: currentQuizData.correcta,
          },
        })
      } else if (category === "ux") {
        petiH = await PeticionData(urlUx)
        const currentQuizData = petiH[questionstate.numberQuestion]
        setQuestion({
          ...questionstate,
          question: {
            question: currentQuizData.question,
            a: currentQuizData.a,
            b: currentQuizData.b,
            c: currentQuizData.c,
            correct: currentQuizData.correcta,
          },
        })
      }
    }

    getData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionstate.numberQuestion])



  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    let puntU = JSON.parse(localStorage.getItem("estadistI"));
    puntU = puntU !== null ? puntU : [];


    setProgress({
      ...progress,
      progressS: questionstate.numberQuestion,
    })


    if (questionstate.answerSelect === questionstate.question.correct) {

      Swal.fire({
        title: '¡Buen trabajo!',
        background: '#ACFFCF',
        confirmButtonColor: 'var(--green)',
        confirmButtonText: 'Continuar',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })


      const EstadistUser = {
        ...puntU,
        score: puntU.score + 1,
      }

      puntU = localStorage.setItem("estadistI", JSON.stringify(EstadistUser));

    } else {
      const EstadistUser = {
        ...puntU,
        aswerIncorrect: puntU.aswerIncorrect + 1,
      }
      puntU = localStorage.setItem("estadistI", JSON.stringify(EstadistUser));

      Swal.fire({
        title: 'La respuesta correcta es:',
        background: '#F9CFD7',
        icon: 'error',
        text: questionstate.question.correct,
        confirmButtonColor: 'var(--red)',
        confirmButtonText: 'Continuar',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }


    if (questionstate.numberQuestion === petiH.length) {
      navigate('/estadists')
    }

    AgregarEstadisticas(petiH.length)
  }

  const AgregarEstadisticas = (totalQuest) => {

    let estadistI = JSON.parse(localStorage.getItem("estadistI"));
    estadistI = estadistI !== null ? estadistI : [];


    let perfilUser = JSON.parse(localStorage.getItem("PerfilUser"));
    perfilUser = perfilUser !== null ? perfilUser : [];


    if (totalQuest === questionstate.numberQuestion) {
      let name = "";
      perfilUser.forEach(element => {
        name = element.nombre
      });
      const { score, aswerIncorrect } = estadistI;
      const EstadisticasUser = {
        user: name,
        respContestadas: totalQuest,
        respCorrectas: score,
        respIncorrectas: aswerIncorrect,

      }
      fetch(urlEstadist, {
        method: "POST",
        body: JSON.stringify(EstadisticasUser),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
    }


  };


  const onChange = (e) => {
    setQuestion({
      ...questionstate,
      answerSelect: e.currentTarget.value,
    })

  }


  return (
    <DivForm>
      <DivProgress className="divProgress mb-3" style={{ width: 500, display: "block" }}>

        <Progress percent={((progress.progressS * 100 / petiH.length))} size="small" />
      </DivProgress>
      <FormStyle className="divform" onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 py-1 px-2"
          controlId="control_radio"
          style={{ padding: "4rem" }}
        >
          <div className="d-flex">
            <img style={{ width: "70px" }} src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644686451/DailyBitsSprint2/Property_1_3_wde9zs.png" alt="img-av" />
            <Titulo>
              {questionstate.question.question}
            </Titulo>
          </div>
          <DivRadio>
            <RadioStyled
              type="radio"
              label={questionstate.question.a}
              value={questionstate.question.a}
              name={"Respuestas"}
              id={"Respuesta1"}
              onChange={onChange}
            /></DivRadio>
          <DivRadio>
            <RadioStyled
              type="radio"
              label={questionstate.question.b}
              value={questionstate.question.b}
              name={"Respuestas"}
              id={"Respuesta2"}
              onChange={onChange}
            />
          </DivRadio>
          <DivRadio>
            <RadioStyled
              type="radio"
              label={questionstate.question.c}
              value={questionstate.question.c}
              name={"Respuestas"}
              id={"Respuesta3"}
              onChange={onChange}
            />
          </DivRadio>
        </Form.Group>
        <ButtonStyled
          variant="primary"
          type="submit"
          onClick={() =>
            setQuestion({
              ...questionstate,
              numberQuestion: questionstate.numberQuestion + 1
            })
          }
        >
          Comprobar
        </ButtonStyled>


      </FormStyle>


    </DivForm>
  )

}
export default Questions
