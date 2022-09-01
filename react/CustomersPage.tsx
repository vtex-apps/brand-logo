import React , { useState, FC } from 'react'
import { Spinner } from 'vtex.styleguide'

const CustomersPage: FC =() => {
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(modifyLoading, 5000) 

    function modifyLoading() {
        setIsLoading(false)
    }
   
    
    return(
    <div>
      <div className="mb5">
      <React.Fragment>
              {isLoading ? (
                <Spinner/>
              ) : (
                'Hello to Admin Page!'
              )}
            </React.Fragment>
      </div>
    </div>
    )
}

export default CustomersPage
