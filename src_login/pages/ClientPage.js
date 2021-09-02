// External imports
import React, { useState, useEffect, Fragment } from "react"
import { connect } from 'react-redux'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { DataTable } from 'react-data-components';
import LineIcon from 'react-lineicons'
import PropTypes from 'prop-types'

// Local imports
// import { fetchData } from '../actions/appdata/addDataActions'
import { addClient, editClient } from '../actions/client/clientActions'

const ClientPage = ({ dispatch, clients, hasErrors }) => {
    // State variables
    const initialState = { id: null, clientName: "", clientDescription: "", status: "Active" }
    const [show, setShow] = useState(false)
    const [client, setClient] = useState(initialState)
    const [dummyClient, setDummyClient] = useState(initialState)
    const [disable, setDisable] = useState(true)
    const [addDisable, setAddDisabled] = useState(true)
    const [editing, setEditing] = useState(false)
    const [clientNameErr, setClientNameErr] = useState(false)
    const [clientDescriptionErr, setClientDescriptionErr] = useState(false)
    const [updateErr, setUpdateErr] = useState(false)
    
    useEffect(() => {
        // dispatch(fetchData());
    });

    // Table
    const tableActions = (val, client) => {
        return (
            <Fragment>
                <Button variant="outline-primary" className="table-action-btn" onClick={() => editClientRow(client)}><LineIcon name="pencil" /></Button>
            </Fragment>
        );
    }
    const tableStatus = (val, client) => {
        if(client.status === "Inactive"){
            return <span className="red-txt fw-medium">Inactive</span>
        } else{
            return <span className="green-txt fw-medium">Active</span>
        }
    }
    let columns = [
        { title: 'Client Name', prop: "clientName" },
        { title: 'Client Description', prop: "clientDescription" },
        { title: 'Status', render: tableStatus },
        { title: 'Action', render: tableActions }
    ];

    
    // Trim values
    const trimValue = event => {
        const { name, value } = event.target
        setClient({ ...client, [name]: value.trim() });
        // alert(client.clientName.length)
    }

    // Add fn
    const addClientHandle = () => {
        setShow(true)
    }
    const handleInputChange = event => {
        const { name, value } = event.target

        setClient({ ...client, [name]: value });

        if (client.clientName.length > 0 && client.clientDescription.length > 0) {
            setAddDisabled(false)
        }else {
            setAddDisabled(true)
        }
    }
    const submitAddClient = (e) => {
        e.preventDefault();
        if (client.clientName.length === 0) {
            setClientNameErr(true)
        } else if (client.clientDescription.length === 0) {
            setClientDescriptionErr(true)
        } else {
            client.id = clients.length + 1
            dispatch(addClient(client))

            setShow(false)
            setEditing(false)
            setClient(initialState)
            setClientNameErr(false)
            setClientDescriptionErr(false)
            setAddDisabled(true)
        }
    }

    // Edit fn
    // For values display in the form
    const editClientRow = (client) => {
        setShow(true)
        setEditing(true)

        setClient({ id: client.id, clientName: client.clientName, clientDescription: client.clientDescription, status: client.status });
        setDummyClient({ id: client.id, clientName: client.clientName, clientDescription: client.clientDescription, status: client.status });
    }

    // Update fn
    const handleEditInputChange = event => {
        setDisable(false);
        const { name, value } = event.target

        setClient({ ...client, [name]: value });
        setUpdateErr(false)
    }
    const updateRow = (id, updatedClient) => {
            setEditing(false)
            dispatch(editClient(updatedClient))
            
            setDisable(true)
            setUpdateErr(false)
            cancelHandle()
    }

    const updatedClient = event => {
        event.preventDefault();
        if(client.clientName !== dummyClient.clientName || client.clientDescription !== dummyClient.clientDescription || client.status !== dummyClient.status){
            updateRow(client.id, client)
            
            setDisable(true)
            setUpdateErr(false)
        }else {
            setEditing(true)
            setUpdateErr(true)
            setDisable(true)
        }
    }

    // Cancel fn
    const cancelHandle = () => {
        setShow(false)
        setEditing(false)
        setClient(initialState)
    }

    return (
        <React.Fragment>
            <div className="page-wrap">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="page-heading mb-3">
                                <h2 className="h2 mb-0 pb-0">Client</h2>
                                <Button variant="warning" onClick={() => addClientHandle()}><LineIcon name="plus" /> Add Client</Button>
                            </div>
                            {show ?
                                <div className="client-form">
                                    <Form className="form" onSubmit={editing ? updatedClient : submitAddClient}>
                                        <h3 className="h3 text-center mb-4">{editing ? "Edit Client" : "Add Client"}</h3>
                                        { updateErr ? <p className="text-center err-msg">Plase update Name or Description or Status.</p> : null}
                                        <Form.Group>
                                            <Form.Label>Client Name{editing ? null : <span className="required">*</span>}</Form.Label>
                                            <Form.Control type="text" required autoFocus name="clientName" onBlur={trimValue} onChange={editing ? handleEditInputChange : handleInputChange} value={client.clientName} />
                                            {clientNameErr ? <span className="err-msg">Please enter name</span> : null}
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Client Description{editing ? null : <span className="required">*</span>}</Form.Label>
                                            <Form.Control type="text" required name="clientDescription" onBlur={trimValue} onChange={editing ? handleEditInputChange : handleInputChange} value={client.clientDescription} />
                                            {clientDescriptionErr ? <span className="err-msg">Please enter name</span> : null}
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Status</Form.Label>
                                            <Form.Control as="select" name="status" value={client.status} onChange={editing ? handleEditInputChange : handleInputChange}>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <div className="form-footer text-right mt-4">
                                            {editing ?
                                                <Fragment>
                                                    <Button variant="warning" className="btn-sm" type="submit" disabled={disable}>
                                                        <LineIcon name={hasErrors ? "spinner" : "pencil"} /> Update</Button>
                                                    <Button variant="danger" className="btn-sm ml-3" onClick={cancelHandle}>
                                                        <LineIcon name={hasErrors ? "spinner" : "close"} /> Cancel</Button>
                                                </Fragment>
                                                :
                                                <Fragment>
                                                    <Button variant="warning" className="btn-sm" type="submit" disabled={addDisable}>
                                                        <LineIcon name={hasErrors ? "spinner" : "plus"} /> Add</Button>
                                                    <Button variant="danger" className="btn-sm ml-3" onClick={cancelHandle}>
                                                        <LineIcon name={hasErrors ? "spinner" : "close"} /> Cancel</Button>
                                                </Fragment>
                                            }
                                        </div>
                                    </Form>
                                </div>
                                :
                                <div className="client-table data-table mt-0">
                                    <DataTable
                                        keys="id"
                                        columns={columns}
                                        initialData={clients}
                                        initialPageLength={5}
                                        initialSortBy={{ prop: 'clientName', order: 'ascending' }}
                                    />
                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

ClientPage.propTypes = {
    clients: PropTypes.array.isRequired,
    hasErrors: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    clients: state.clients.clients,
    hasErrors: state.clients.hasErrors
})

export default connect(mapStateToProps)(ClientPage)