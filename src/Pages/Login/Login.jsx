import { useForm } from "react-hook-form";
import { Button, Form, Image, FloatingLabel } from 'react-bootstrap';
import './Login.css';
import firebase from '../../config/firebase';
import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext'
import AlertComp from "../../components/AlertComp/AlertComp";
import { loginMessage } from "../../Utils/errorMessage";



export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const context = useContext(AuthContext)
  const [alert, setAlert] = useState({ variant: '', text: '' })

  const onSubmit = async data => {
    console.log(data)
    try {
      const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
      console.log("responseUser", responseUser.user.uid, data)

      if (responseUser.user.uid) {
        const userDocument = await firebase.firestore().collection('usuarios')
          //pide a firebase la coleccion 'usuarios', busca dentro de 'userId'
          .where('userId', '==', responseUser.user.uid)
          .get()
 
        const user = userDocument.docs[0].data()
        context.handleLogin(user)
        setAlert({ variant: 'success', text: ` ${user?.name} has iniciado sesión ` })

        setTimeout(() => {
          navigate('/profile')
        }, 2000)

      }

    } catch (e) {
      console.log(e)
      setAlert({ variant: 'danger', text: loginMessage[e.code] || 'Ha ocurrido un error' })
    }
  }
  return (

    <>
      <AlertComp {...alert} />
      <div className="row">
        <div className="col-8 position-relative">
          <Image className='w-100' fluid='true' rounded='true' src="https://picsum.photos/1000/500?grayscale&blur=3" />
          <h5 className='text-meli'>Inicia <br /> Sesión</h5>
        </div>
        <div className="col-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FloatingLabel label="E-mail" className="mb-3">
              <Form.Control type="text" placeholder='mail' {...register("email", { required: true })} />
              <Form.Text className="text-muted">
                {errors.email && <span>This field is required</span>}
              </Form.Text>
            </FloatingLabel>
            <FloatingLabel label="Contraseña" className="mb-3">
              <Form.Control type="text" placeholder='contraseña' {...register("password", { required: true, minLength: 6, maxLength: 12 })} />
              <Form.Text className="text-muted">
                {errors.password?.type === "required" && <span>This field is required</span>}
                {errors.password?.type === "minLength" && <span>Debe colocar al menos 6 caracteres</span>}
                {errors.password?.type === "maxLength" && <span>No puede superar 12 caracteres</span>}
              </Form.Text>

            </FloatingLabel>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>

      </div>
    </>
  )
}
