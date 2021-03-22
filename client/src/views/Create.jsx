import TemplateForm from '../components/TemplateForm';
import { navigate } from '@reach/router';
import {useState} from 'react';
import Axios from 'axios';


const Create = props => {
    const [template, setTemplate] = useState({
        itemOne:"",
        itemTwo:""
    })

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

        Axios.post("http://localhost:8000/api/templates", template)
        .then(res => navigate('/'))
        .catch(err => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors)
        })
    }


    return(
        <>
            <TemplateForm 
                inputs = {template}
                title = "Create Template"
                submitValue = "Create"
                handleInputChange = {handleChange}
                handleSubmit = {handleSubmit}
                errors = {errors}
            />
        </>
    )
}

export default Create;