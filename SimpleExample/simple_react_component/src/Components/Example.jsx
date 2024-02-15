import React from 'react'

const Example = () => {
    return (
        
        <div class="alert alert-danger alert-dismissible fade show" role='alert'>
            <strong>Oh snap! You get an error</strong>
            <p>Change this and that and try again.</p>
            <button
            type='button'
            class='close'
            data-dismiss='alert'
            aria-label='Close'
            >
                {/* this need bootstrap.js file to work */}
                <span aria-hidden="true">&times;</span>
            </button>
            
        </div>
      
    )
}

export default Example
