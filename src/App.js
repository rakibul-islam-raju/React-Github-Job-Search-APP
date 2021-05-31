import { useState } from 'react';
import Job from './components/Job';
import JobsPagination from './components/JobsPagination';
import SearchJob from './components/SearchJob';
import useFetchJobs from './hooks/useFetchJobs';

function App() {
    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);

    const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

    function handleParamChange(e) {
        const param = e.target.name;
        const { value } = e.target;
        setPage(1);
        // eslint-disable-next-line no-unused-vars
        setParams((prevParams) => ({ ...params, [param]: value }));
    }

    return (
        <div className="App">
            <div className="container">
                <h2 className="py-2">Github Jobs</h2>

                {error && (
                    <div className="alert alert-danger" role="alert">
                        Error. Something went wrong. Please try again.
                        <br />
                    </div>
                )}

                {/* Serch form */}
                {jobs.length > 0 ? (
                    <SearchJob params={params} onParamChange={handleParamChange} />
                ) : null}

                {/* pagination */}
                {jobs.length > 0 ? (
                    <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
                ) : null}

                {/* Loding markup */}
                {loading === true ? (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden" />
                        </div>
                    </div>
                ) : null}

                {/* Job list */}
                <div className="">
                    {jobs.length > 0 ? jobs.map((job) => <Job key={job.id} job={job} />) : null}
                </div>
                {jobs.length > 0 ? (
                    <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
                ) : null}
            </div>
        </div>
    );
}

export default App;
