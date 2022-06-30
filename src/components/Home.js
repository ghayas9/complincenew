import {useState} from 'react';

import { Button,Modal } from 'react-bootstrap';
 
function Home() {
 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
  return (
 
       <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div className="row ">
           <div class="col-md-4 mb-3 text-gred">
              <div className="search">
                <form className="form-inline">
                 <input className="form-control mr-sm-2" type="search" placeholder="Employ" aria-label="Search"/>
                </form>
              </div>    
              </div>  
              <div className="col-md-4 mb-3 text-gred" style={{color:"green"}}><h2><b>All Employies</b></h2></div>
              <div class="col-md-4 mb-3 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Invite
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Join</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>    
                        <tr>
                            <td>1</td>
                            <td>Image</td>
                            <td>Name</td>
                            <td>01/01/0101</td>
                            <td>
                                <button className='btn btn-secondary ml-1'><i className="material-icons" style={{color:'#10ab80'}}>&#xE417;</i></button>
                                <button className='btn btn-secondary ml-1'><i className="material-icons" style={{color:'red'}}>&#xE872;</i> 
                               </button>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </div>  
 
        {/* <!--- Model Box ---> */}
        <div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Invite New User</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form>
                <div className="form-group">
                    <input type="email" 
                    className="form-control" 
                    placeholder="Enter Name" 
                    value={name}  onChange = {(e)=>{
                        setName(e.target.value)
                    }}/>
                </div>
                <div className="form-group mt-3">
                    <input type="email" className="form-control"  
                    placeholder="Enter Email" 
                    value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    />
                </div>
                  <button type="submit" class="btn btn-success mt-4">Send Invitation</button>
                </form>
            </Modal.Body>
 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  
       {/* Model Box Finsihs */}
       </div>  
      </div>    
      </div>  
  );
}
 
export default Home;