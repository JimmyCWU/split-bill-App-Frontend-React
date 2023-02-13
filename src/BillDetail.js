import { useState, useRef } from "react";
import "./BillDetail.css";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

const BillDetail = () => {
     const [show, setShow] = useState(false);
     const [target, setTarget] = useState(null);
     const ref = useRef(null);

     const handleClick = (event) => {
       setShow(!show);
       setTarget(event.target);
     };

    return (
      <div ref={ref}>
        <Button className="BillDetail" onClick={handleClick}>Show Bill Details</Button>

        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Header as="h3">Popover bottom</Popover.Header>
            <Popover.Body>
              
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    );
}
export default BillDetail;