function Service(props) {
    const { title, description } = props.service;
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                    <p>{description}</p>
                </div>
                <button className="btn btn-primary btn-lg active">Añadir</button>
            </div>
        </div>
    );
}

export default Service;