import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createTodoApiById, reteriveTodoApiById, updateTodoApiById } from "./api/TodoApiSevice"
import { useAuth } from "./security/AuthContext"
import { ErrorMessage, Field, Form, Formik } from 'formik'

export default function TodoComponent() {

    const { id } = useParams()
    const authContext = useAuth()
    const username = authContext.userName
    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')
    const navigate = useNavigate()


    useEffect(
        () =>
            reteriveTodos(), [id]

    )

    function reteriveTodos() {
        if (id != -1) {
            reteriveTodoApiById(username, id).then(
                response => {
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)
                }
            ).catch(
                error => console.log(error)
            )
        }
    }

    function onSubmit(values) {
        console.log(values)
        const todo = {
            id: id,
            userName: username,
            targetDate: values.targetDate,
            description: values.description,
            done: false
        }
        if (id == -1) {
            
            createTodoApiById(username, todo).then(
                response => {
                    console.log(response)
                    navigate('/todos')
                }
            ).catch(
                error => console.error(error)
            )
        }
        else {
            updateTodoApiById(username, id, todo).then(
                response => {
                    console.log(response)
                    navigate('/todos')
                }
            ).catch(
                error => console.error(error)
            )
        }
        console.log(todo)
    }

    function validate(values) {
        let errors = {
        }
        if (values.description.length < 5) {
            errors.description = 'Enter at least 5 characters'
        }
        if (values.targetDate == null || values.targetDate == '') {
            errors.targetDate = 'Enter a valid date'

        }
        console.log(values)
        return errors
    }

    return (
        <div className="container">
            <h1>Enter TodoDetails</h1>
            <div>
                <Formik initialValues={{ description, targetDate }} enableReinitialize={true}
                    onSubmit={onSubmit} validate={validate}
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description"
                                    component="div"
                                    className="alert alert-warning">
                                </ErrorMessage>
                                <ErrorMessage name="targetDate"
                                    component="div"
                                    className="alert alert-warning">
                                </ErrorMessage>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Date</label>
                                    <Field type="date" className="form-control" name="targetDate"></Field>
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}