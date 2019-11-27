import React, { Component } from "react";
import { Row, FormGroup,Form, FormControl, FormLabel, Button, HelpBlock} from 'react-bootstrap';
import './login.sass';
import { isEmpty } from 'validator';
import './login.css';
import {Switch,Route} from 'react-router-dom';
import List from './domainslist.js';

class Login extends Component {
    
    render() {

        return (
            <div className="Login">
                <Row className="row">
                    <div>
                        <FormGroup controlId="domain">
                            <div className="domínio">
                            <Form.Label className="text">Domain</Form.Label>
                            </div>
                            <FormControl type="text" name="Domain" placeholder="Choose your domain" id="domain" />
                        </FormGroup>
                        <FormGroup controlId="IP">
                            <div className="dominiozada">
                            <FormLabel className="text">IP</FormLabel>
                            </div>
                            <FormControl type="number" name="IP" placeholder="Your IP"  />
                            
                        </FormGroup>
                        <div id="BUTTON1">
                        <Button type="submit" className="botao">Save</Button>
                        </div>
                        
                        <div id="BUTTON2">
                        <Switch>
                        <Route path="/list" component={List} />
                            <Button type="submit" className="botao">Domains List</Button>
                            </Switch>
                        </div>
                        <div id="BUTTON3">
                            <Button type="submit" className="botao">Subdomains List</Button>
                        </div>
                    </div>
                    
                </Row>
            </div>
        )
    }

}

export default Login;