import React, { useState } from "react";
import axios from "axios";

const AddMembers = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <button className="btn" onClick={handleShow}>Add Members</button>
        </div>
    )

}
export default AddMembers;