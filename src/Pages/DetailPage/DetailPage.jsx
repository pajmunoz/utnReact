import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getByIdProductos, getByIdDetail } from '../../services/swCharService'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Loader from '../../components/Loader/Loader';
import Slider from '../../components/Slider/Slider';
import './DetailPage.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function DetailPage() {
    const [prod, setProd] = useState([]);
    const [detail, getDetail] = useState([]);
    const [loading, isLoading] = useState(true);
    const { id } = useParams()



    useEffect(() => {
        const result = async () => {
            try {
                const responseData = await getByIdProductos(id);
                setProd(responseData);
                isLoading(false);
            } catch (e) {
                console.log(e);
            }
            try {
                const responseData = await getByIdDetail(id);
                getDetail(responseData);
                isLoading(false);
            } catch (e) {
                console.log(e);
            }
        };

        result();
    }, [id]);
    if (!loading) {

        return (
            <>
                <Breadcrumbs name={id} />
                <div className="row mt-5">
                    <div className="col-12 col-md-8">
                        <Card className="card mb-3">
                            <Slider pictures={prod.pictures} />
                        </Card>
                    </div>
                    <div className="col-12 col-md-4">
                        <Card>
                            <Card.Body>
                                <h1 className='card-title mb-5'>{prod.title}</h1>
                                <p className="card-text"> <strong> Precio:</strong> {prod.price} {prod.currency_id}</p>
                                <p className="card-text"> <strong> Unidades disponibles:</strong> {prod.available_quantity}</p>
                                <p className="card-text"> <strong> Condición:</strong> {prod.condition}</p>
                                <p className="card-text pb-5"> <strong> Ubicación:</strong> {prod.seller_address.city.name}, {prod.seller_address.state.name}</p>
                                <Button variant="primary" className="my-2">Comprar</Button>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col">
                        <h5 className="mt-3">Detalle</h5>
                        <Card className="mt-3">
                            <Card.Body>
                                <p className="card-text">{detail.plain_text}</p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </>
        )
    } else {
        return (<Loader />)
    }
}

export default DetailPage
