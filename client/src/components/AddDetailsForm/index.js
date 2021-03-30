import React, { useRef } from 'react';
import API from '../../utils/API';

function AddDetailsForm(props) {
  
  const setRef = useRef();
  const repRef = useRef();
  const weightRef = useRef();

  const handleSubmit = async e => {
      e.preventDefault();

      const set = setRef.current.value;
      const rep = repRef.current.value;
      const weight = weightRef.current.value;

      try {

        API.addDetail({
          sets: set,
          reps: rep,
          weight: weight,
          userId: props.id
        }).then(res => {
          props.setAddDetail();
        })

      } catch(err) {

           // Handle error responses from the API. This will include
           if( err.response && err.response.data ) console.log(err.response.data);

      }

  }

  return(

<div className="card card-signup flex-row my-5">
                        <div className="card-body" >
                        <form className="form-signin">
                            <div className="form-label-group">
                            <input type="text" ref={setRef} id="inputUserame" className="form-control" placeholder="Sets" required autoFocus/>
                            <label htmlFor="inputUserame"></label>
                            </div>
            
                            <div className="form-label-group">
                            <input type="text" ref={repRef} id="inputEmail" className="form-control" placeholder="Reps" />
                            <label htmlFor="inputEmail"></label>
                            </div>
                            
                            <hr/>
            
                            <div className="form-label-group">
                            <input type="text" ref={weightRef} id="inputPassword" className="form-control" placeholder="Weight" required/>
                            <label htmlFor="inputPassword"></label>
                            </div>
            
                            <button className="btn btn-lg btn-dark btn-block text-uppercase" 
                            type="submit" onClick={handleSubmit}>Add Detail</button>
                            <button className="d-block text-center mt-2 small" onClick={props.setAddDetail}>Nevermind</button>
                        </form>
                        </div>
                    </div>
  )
}

export default AddDetailsForm;