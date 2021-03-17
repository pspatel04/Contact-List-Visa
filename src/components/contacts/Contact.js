import React, {useState} from "react";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";
import DeleteConfirmation from "../elements/DeleteConfirmation"
import { Alert } from "react-bootstrap";


const Contact = ({ contact}) => {
  const dispatch = useDispatch();
  const { name, lname, phone, email, id } = contact;
  const [show, setshow] = useState(false)

  const [dlid, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null)
  const [successdeleteMessage, setsuccessdeleteMessage] = useState(null);



const handleShow = ()=>
{
 setshow(show ? false : true)

 
}
const showDeleteModal = (deid) => {
setId(deid);
setsuccessdeleteMessage(null);
setDeleteMessage(`Are you sure you want to delete the contact?`);
setDisplayConfirmationModal(true);
};

const hideConfirmationModal = () => {
setDisplayConfirmationModal(false);
};

const submitDelete = (delid) => {
  setsuccessdeleteMessage(`Contact was deleted successfully.`);
  setDisplayConfirmationModal(false);
  dispatch(deleteContact(delid))
  
};



  return (

   
        
          <div className="col-lg-4 col-md-6 mb-4" key={id}>
           {successdeleteMessage && <Alert variant="success">{successdeleteMessage}</Alert>}
              <div className="card-body">
              
                <h5 className="card-title">{name} {lname}</h5>
                <span className="actionButtons">
                <span className="actions">
         <Link to={`/contacts/edit/${id}`}>
         <button type="button" class="btn btn-warning btn-sm">Edit</button>

        </Link></span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => showDeleteModal(id)}
                >
                Delete
                </button>
                
                </span>
              
               
                <p className="text-muted md"><i class="fa fa-phone"></i>  {phone}</p>
                {
                  show && (<p className="text-muted md"><i class="fa fa-envelope"></i> {email}</p>)
                }
                <button onClick= {handleShow}
                  
                  className="btn btn-primary btn-sm"
                >
                 {show ? 'Hide' : 'View More'}
                </button>
                </div>
                
        <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal}  id={id} message={deleteMessage}  />

            </div>
           
            
  )
};

export default Contact;
