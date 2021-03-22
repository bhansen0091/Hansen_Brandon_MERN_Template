import { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import Axios from 'axios';

const Main = props => {
    const [templates, setTemplates] = useState(null);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/templates")
            .then(res => setTemplates(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const handleDestroyTemplate = (id) => {
        Axios.delete(`http://localhost:8000/api/templates/${id}`)
            .then(res => setTemplates(res.data.results))
            .catch(err => console.log(err))
    }

    return(
        templates ?
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        templates.map((j,i) => {
                            return <tr key={i}>
                                    <td>{j.itemOne}</td>
                                    <td>
                                        <Link className="btn btn-warning" to={`/edit/${j._id}`}>Edit</Link>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={() => {handleDestroyTemplate(j._id)}}
                                        >Delete</button>
                                        <Link 
                                            to={`/show/${j._id}`}
                                            className="btn btn-success">itemTwo--</Link>
                                    </td>
                            </tr>
                        })
                    }
                </tbody>
            </table> :
            <h2>Loading...</h2>
    )
}

export default Main;