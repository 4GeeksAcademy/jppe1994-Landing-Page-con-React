import React from "react";

const Jumbotron = ()=>{
    return(
    
        
        <div className="container mx-auto fondoJumbotron">
            <div className="position-relative ms-3  ">
                <svg className="bi " width="8" height="8"><use xlinkHref="#check2-circle"></use></svg>
                <h1 className="text-body-emphasis">A Warm Welcome!</h1>
                <p className="col">
                This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
                </p>
                
            </div>
            <button className="btn btn-primary px-5 mb-5 ms-5 " type="button">
                Call to action
                </button>
        </div>
        
    
        
    )
};
export default Jumbotron 