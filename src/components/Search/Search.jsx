import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
export default function Search({ value, onChange }) {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Búsqueda</InputGroup.Text>
            <Form.Control
                placeholder="Haz tu búsqueda aquí"
                aria-label="Haz tu búsqueda aquí"
                aria-describedby="basic-addon1"
                value={value} onChange={onChange}
            />
        </InputGroup>

    )
}
