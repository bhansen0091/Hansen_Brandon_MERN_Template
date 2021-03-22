

const TemplateForm = props => {
    const {inputs, handleInputChange, handleSubmit, title, submitValue, errors} = props;

    return(
        <form onSubmit={handleSubmit} className="col-6 mx-auto">
            <h2 className="text-center">{title}</h2>
            <div className="form-group">
                <label htmlFor="itemOne">itemOne</label>
                <input 
                    type="text" 
                    name="itemOne" 
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.itemOne}
                />
                <span className="text-danger">
                    {errors.itemOne ? errors.itemOne.message : ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="itemTwo">itemTwo</label>
                <input 
                    type="text" 
                    name="itemTwo" 
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.itemTwo}
                />
                <span className="text-danger">
                    {errors.itemTwo ? errors.itemTwo.message : ""}
                </span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-primary"/>
        </form>
    )
}

export default TemplateForm;