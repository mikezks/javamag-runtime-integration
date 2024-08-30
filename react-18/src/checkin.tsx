import React from "@esm/react"
import './index.css'


function Checkin() {
    const [passenger, setPassenger] = React.useState({
      firstname: 'Emma',
      lastname: 'Smith'
    });

    const updatePassenger = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassenger(passenger => ({
        ...passenger,
        [event.target.name]: event.target.value
      }))
    };

    const sendForm = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const passengers = await (await fetch(
        'https://demo.angulararchitects.io/api/passenger'
        + '?firstName=' + passenger.firstname
        + '&lastName=' + passenger.lastname
      )).json();
      console.log(passengers)
    };
    
    return (
      <>
        <div className="card">
          <div className="card-header">
            <img src="mfe-checkin/react.svg" className="logo-image" alt="React Logo" />
            <h2 className="card-title logo-title">Passenger Search</h2>
          </div>

          <div className="card-body">
            <form onSubmit={sendForm}>
              <div className="form-group">
                <label>Firstname:</label>
                <input
                  name="firstname"
                  className="form-control"
                  value={passenger.firstname}
                  onChange={updatePassenger}
                />
              </div>

              <div className="form-group">
                <label>Lastname:</label>
                <input
                  name="lastname"
                  className="form-control"
                  value={passenger.lastname}
                  onChange={updatePassenger}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-default" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  
  export default Checkin