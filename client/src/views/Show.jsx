import {useState, useEffect} from 'react';
import Axios from 'axios';


const Show = props => {
    const [template, setTemplate] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/templates/${props.id}`)
        .then(res => setTemplate(res.data.results[0]))
        .catch(err => console.log(err))
    }, [props])

    return(

        <div className="card col-4 mx-auto">
            <div className="card-body">
                <h2 className="card-title">{template.itemOne}</h2>
                <p className="card-text">{template.itemTwo}</p>
            </div>
        </div>
    )
}

export default Show;