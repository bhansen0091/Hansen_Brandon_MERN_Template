import TemplateForm from '../components/TemplateForm';
import { navigate } from '@reach/router';
import {useState, useEffect} from 'react';
import Axios from 'axios';

const Edit = props => {
    const [template, setTemplate] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/templates/${props.id}`)
            .then(res => setTemplate(res.data.results[0]))
            .catch(err => console.log(err))
    }, [props])

    const [errors, setErrors] = useState({
        itemOne: "",
        itemTwo: ""
    })

    const handleChange = e => {
        setTemplate({
            ...template,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        Axios.put(`http://localhost:8000/api/templates/${props.id}`, template)
        .then(res => navigate('/'))
        .catch(err => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors)
        })
    }

    return(
        <>
            {
                template?
                <TemplateForm 
                    inputs = {template}
                    title = "Edit Template"
                    submitValue = "Edit"
                    handleInputChange = {handleChange}
                    handleSubmit = {handleSubmit}
                    errors = {errors}
                /> :
                <h2>Loading....</h2>
            }   
        </>
    )
}

export default Edit;