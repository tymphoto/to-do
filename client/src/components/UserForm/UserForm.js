import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { userAuthThunk } from '../../redux/actions/AuthAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserForm.css';

function UserForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [loginToggle, setLoginToggle] = useState(true);

  const handleForm = () => {
    setLoginToggle(!loginToggle);
  };

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userAuthThunk(loginToggle, form));
    setForm({});
    navigate('/');
  };

  return (
    <div className="userForm">

      <Form onSubmit={handleSubmit}>
        {loginToggle ? '' : (
          <div>
            <div className="container">
              <Form.Group className="mt-3 mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={form.name || ''} name="name" disabled={loginToggle} onChange={handleChange} placeholder="Name" />
              </Form.Group>
            </div>
          </div>
        ) }

        <div className="container">
          <Form.Group className={loginToggle ? 'mt-3 mb-3' : 'mb-3'} controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" value={form.email || ''} name="email" onChange={handleChange} placeholder="Email" />
            <Form.Text className="text-muted">
              Our company never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </div>

        <div className="container">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={form.password || ''} name="password" onChange={handleChange} placeholder="Password" />
          </Form.Group>
        </div>

        <div className="container">
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <input type="checkbox" onChange={handleForm} />
            <span>{loginToggle ? 'Back to registration' : 'To login'}</span>
          </Form.Group>
        </div>

        <div className="container">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>

      </Form>

    </div>
  );
}

export default UserForm;
