import { useState } from "react";
import { ArrowRight, PersonPlus } from "react-bootstrap-icons";
import { Button, Form, FormControl, FormLabel } from "react-bootstrap";
import "../Registeration/Registration.component.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export function Registration() {
  let navigate=useNavigate();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: '',
    registrationType: '',
    shop_name: '',
    shop_url: '',
    vendor_phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   const response = await axios.post('http://localhost:4002/register', formData);
   alert("registration completed");
   navigate(`/home`)

       
  }


 

  return (
    <>
      <div className="register-form">
        <div className="register-head">
          <div className="register-icon">
            <span>
              <PersonPlus />
            </span>
          </div>
          <div>
            <h4>Register an Account</h4>
            <p>
              Your personal data will be used to support your experience throughout this website,
              to manage access to your account.
            </p>
          </div>
        </div>

        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <Form.Label htmlFor="full_name">Full Name:</Form.Label>
            <Form.Control
              className="inp"
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Your Full Name"
            />
          </div>

          <div className="form-group">
            <Form.Label htmlFor="email">Email:</Form.Label>
            <Form.Control
              className="inp"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </div>

          <div className="form-group">
            <Form.Label htmlFor="phone">Phone:</Form.Label>
            <Form.Control
              className="inp"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
            />
          </div>

          <div className="form-group">
            <Form.Label htmlFor="password">Password:</Form.Label>
            <Form.Control
              className="inp"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <Form.Label htmlFor="passwordConfirmation">Password Confirmation:</Form.Label>
            <Form.Control
              className="inp"
              type="password"
              name="passwordConfirmation"
              value={formData.passwordConfirmation}
              onChange={handleChange}
              placeholder="Password Confirmation"
            />
          </div>

          <div className="form-radio">
            <Form.Label>Register as:</Form.Label>
            <Form.Check
              type="radio"
              name="registrationType"
              label="I am a customer"
              value="customer"
              checked={formData.registrationType === 'customer'}
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              name="registrationType"
              label="I am a vendor"
              value="vendor"
              checked={formData.registrationType === 'vendor'}
              onChange={handleChange}
            />
          </div>


          {formData.registrationType === 'vendor' && (
            <div className="form-vendor">
              <div className="form-group">
                <Form.Label htmlFor="shop_name">Shop Name:</Form.Label>
                <Form.Control
                  className="inp"
                  type="text"
                  name="shop_name"
                  value={formData.shop_name}
                  onChange={handleChange}
                  placeholder="Shop Name"
                />
              </div>

              <div className="form-group">
                <Form.Label htmlFor="shop_url">Shop URL:</Form.Label>
                <Form.Control
                  className="inp"
                  type="url"
                  name="shop_url"
                  value={formData.shop_url}
                  onChange={handleChange}
                  placeholder="Shop URL"
                />
              </div>

              <div className="form-group">
                <Form.Label htmlFor="vendor_phone">Phone Number:</Form.Label>
                <Form.Control
                  className="inp"
                  type="tel"
                  name="vendor_phone"
                  value={formData.vendor_phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <Form.Check
              type="checkbox"
              id="terms"
              label="I agree to the Terms and Privacy Policy"
              required
            />
          </div>

          <div className="form-group">
            <Button type="submit">
              Register <ArrowRight />
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
