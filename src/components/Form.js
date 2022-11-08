import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicForm() {
    return (
        <Form>
            <Form.Group className="mb-3" >
                <Form.Control type="fio" placeholder="Введите ФИО" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Введите e-mail" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Control type="phone" placeholder="Введите номер телефона" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Купить
            </Button>
        </Form>
    );
}

export default BasicForm;