import React from 'react';

export default ({ post, id }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    Title here {id}
                </h5>
            </div>
        </div>
    )
}