import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "../Contact/Contact.component.css"

export function Contact() {

    return (
        <>
            <div className="breadcrumb">
                <span><a href="#">Homes</a> / <a href="#">Stores</a></span>
            </div>
            <div className="contact-head">
                <h1>Contact</h1>
            </div>
            <div className="map" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.472332567752!2d78.39170797439017!3d17.437092783458617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb935b5300edb3%3A0xd7d90723be396126!2sSynergy%20Universal!5e0!3m2!1sen!2sin!4v1714474139122!5m2!1sen!2sin"
                    width="1100"
                    height="500"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
            <div className="contact-details">
                <div className='contact-info'>
                    <h3>Contact Info</h3>
                    <div>
                        <span>Location</span>
                        <p></p>
                        <p><b>STORE</b>  <br />
                            68 Atlantic Ave St, Brooklyn, NY 90002, USA <br />

                            (+005) 5896 72 78 79 <br />

                            support@farmart.com</p>
                        <p><b>WAREHOUSE</b>  <br />
                            172 Richmond Hill Ave St, Stamford, NY 90002,
                            USA <br />

                            (+005) 5896 03 04 05</p>


                    </div>
                </div>
                <div className='drop-line'>
                    <h2>Drop Us A Line</h2>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                               
                                <Form.Control placeholder='Your Name *'   className='p-3' />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                               
                                <Form.Control type="email" placeholder="Enter email *"    className='p-3'/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                              
                                <Form.Control type='tel' placeholder='Enter Phone number'  className='p-3'   />
                            </Form.Group>
                        </Row>


                        <Form.Group className="mb-3" controlId="formGridAddress1">
                          
                            <Form.Control placeholder="Subject(optional)"    className='p-4'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                         
                          
                            <Form.Control
                                as="textarea"
                                placeholder="Write Your Message here"
                                style={{ height: '100px' }}
                              
                            />
                        </Form.Group>





                        <Button variant="warning" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}