
import { useContext } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"
import Slider from "../../components/Slider/Slider"
import { AuthContext } from "../../Context/AuthContext"
import { BuyContext } from "../../Context/BuyContext"

export default function BuyDetail() {
  const context = useContext(BuyContext)
  const contextAuth = useContext(AuthContext)
  return (
    <>
    <Breadcrumbs name={context.data.id} />
      <div className="row mt-5">
        <div className="col">
          <h2>Vista previa</h2>
          <Card className="card mb-3">
            <Slider pictures={context.data.pictures} />
          </Card>
        </div>
        <div className="col">
          <h2>Nombre del producto</h2>
          <p>{context.data.title}</p>
          <h2>Cantidad de compra</h2>
          <p>{context.quantity}</p>
          <h2>Cantidad disponible</h2>
          <p>{context.data.available_quantity}</p>

        </div>
        <div className="col">
          <h2>Precio</h2>
          <p>{context.data.price} {context.data.currency_id}</p>
          <h2>Condición del producto</h2>
          <p>{context.data.condition}</p>
          <h2>Ubicación</h2>
          <p>{context.data.seller_address.city.name}, {context.data.seller_address.state.name}</p>
        </div>

      </div>

      {contextAuth.login &&
        <div className="text-center">
          <Button size="lg" variant="primary" type="button">
            <Link className="link-light text-decoration-none " to={`/congrats`}>Confirmar compra</Link>
          </Button>
        </div>
      }
      {!contextAuth.login &&
        <div className="text-center">
          <p>Debes loguearte para continuar</p>
          <Button size="lg" variant="primary" type="button">
            <Link className="link-light text-decoration-none " to={`/login`}>Inicia Sesión</Link>
          </Button>
        </div>
      }
    </>
  )
}
