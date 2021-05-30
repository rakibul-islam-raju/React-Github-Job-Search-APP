
import ReactMarkdown from 'react-markdown'
import {useState} from 'react';

function Job({job}) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="col-lg-8">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <div className="d-flex">
                                    <h4 className="card-title">{job.title}</h4>
                                </div>
                                Company: <span className="text-muted font-weight-light">{job.company}</span>
                                <div className="">
                                    <span class="badge bg-primary text-white mr-2">{job.type}</span>
                                    <span class="badge bg-secondary text-white">{job.location}</span>
                                </div>
                                <ReactMarkdown className="mt-2" children={job.how_to_apply} />
                                <div className="details">
                                    <button onClick={() => setOpen(prevOpen => !prevOpen)} type="button" className="btn btn-primary">
                                        {open ? 'Hide Details' : 'View Details'}
                                    </button>
                                    {open && <ReactMarkdown className="mt-3" children={job.description} />}
                                </div>
                            </div>
                            <div className="">
                                <h6 class="card-subtitle mb-2 text-muted">Date: {new Date(job.created_at).toLocaleDateString()}</h6>
                                <img className="d-none d-md-block" height="50" src={job.company_logo} alt={job.company} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Job
