import { useForm } from "react-hook-form";
import { Image, FloatingLabel, Form, Button } from "react-bootstrap";
import firebase from '../../config/firebase';
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { registroMessage } from "../../Utils/errorMessage";
import AlertComp from "../../components/AlertComp/AlertComp";


export default function Registro() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [alert, setAlert] = useState({ variant: '', text: '' })
  const navigate = useNavigate()

  const onSubmit = async data => {
    //console.log(data)
    try {
      const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
      console.log("responseUser", responseUser.user.uid)
      if (responseUser.user.uid) {
        const document = await firebase.firestore().collection("usuarios")
          .add({
            name: data.name,
            lastname: data.lastname,
            userId: responseUser.user.uid
          })
        console.log(document)
        if (document) {
          setAlert({ variant: 'success', text: 'Gracias por registrarse' })
          setTimeout(() => {
            navigate("/ingresar")
          }, 1000)
        }
      }
    } catch (e) {
      console.log(e)
      setAlert({ variant: 'danger', text: registroMessage[e.code] || 'Ha ocurrido un error' })
    }
  }

  return (
    <>
      <AlertComp {...alert} />
      <div className="row">
        <div className="col-8 position-relative">
          <Image className='w-100' fluid='true' rounded='true' src="https://picsum.photos/1000/500?grayscale&blur=2" />
          <h5 className='text-meli'>Página de registro</h5>
        </div>
        <div className="col-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FloatingLabel label="Nombre" className="mb-3">
              <Form.Control type="text" placeholder='nombre' {...register("name", { required: true })} />
              <Form.Text className="text-muted">
                {errors.name && <span>This field is required</span>}
              </Form.Text>
            </FloatingLabel>
            <FloatingLabel label="Apellido" className="mb-3">
              <Form.Control type="text" placeholder='apellido' {...register("lastname")} />
            </FloatingLabel>
            <FloatingLabel label="Email" className="mb-3">
              <Form.Control type="text" placeholder='mail' {...register("email", { required: true })} />
              <Form.Text className="text-muted">
                {errors.email && <span>This field is required</span>}
              </Form.Text>
            </FloatingLabel>
            <FloatingLabel label="Contraseña" className="mb-3">
              <Form.Control type="password" placeholder='contraseña' {...register("password", { required: true, minLength: 6, maxLength: 12 })} />
              <Form.Text className="text-muted">
                {errors.password?.type === "required" && <span>This field is required</span>}
                {errors.password?.type === "minLength" && <span>Debe colocar al menos 6 caracteres</span>}
                {errors.password?.type === "maxLength" && <span>No puede superar 12 caracteres</span>}
              </Form.Text>
            </FloatingLabel>
            <Button variant="primary" type="submit">
              Registro
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}
