export default function Breadcrum (props) {
    return (
        <div>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">{props.pageTitle}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}