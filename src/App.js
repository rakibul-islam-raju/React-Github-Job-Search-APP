import { useState } from 'react';
import Job from './components/Job';
import JobsPagination from './components/JobsPagination';
import SearchJob from './components/SearchJob';
import useFetchJobs from './hooks/useFetchJobs';

function App() {
    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);

    const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

    function handleParamChange(e){
        const param = e.target.name
        const value = e.target.value
        setPage(1)
        setParams(prevParams => {
            return { ...params, [param]: value }
        })
    }

    const loadingMarkup = () => {
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden"></span>
        </div>
    }

    return (
        <div className="App">
            <div className="container">
                <h2 className="py-2">Github Jobs</h2>
                {loading && loadingMarkup}
                {error && <div class="alert alert-danger" role="alert">
                Error. Something went wrong. Please try again...
                </div>}

                {jobs > 0 ? <SearchJob params={params} onParamChange={handleParamChange} /> : null}

                {jobs > 0 ? <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/> : null}
                <div className="">
                    { jobs.length > 0 ? jobs.map(job => (
                        <Job key={job.id} job={job} />
                    )) : null}
                </div>
                {jobs > 0 ? <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/> : null}
            </div>
        </div>
    );
}

export default App;
