import React from 'react'

function SearchJob({params, onParamChange}) {
    return (
        <div>
            <div className="form mb-4">
                <div className="row">
                    <div className="col-md-5">
                        <input onChange={onParamChange} value={params.description} name="description" type="text" className="form-control" placeholder="Description" />
                    </div>
                    <div className="col-md-5">
                        <input onChange={onParamChange} value={params.location} name="location" type="text" className="form-control" placeholder="Location" />
                    </div>
                    <div className="col mt-1">
                        <input onChange={onParamChange} value={params.full_time} name="full_time" type="checkbox" class="form-check-input" id="full_time" />
                        <label class="form-check-label" for="full_time">Only Full Time</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchJob
