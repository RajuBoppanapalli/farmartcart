import { Button } from "react-bootstrap";



export function DeleteCartPopUp(props){
    return(
        <>
          <div>
            <div>Do you want to delete cart iteam?</div>
            <div>
                    <Button style={{width:"50px",backgroundColor:"red"}} className=" btn btn-danger ms-3 mt-3 pb-2" onClick={props.deletecartiteam}>Yes</Button>
                    <Button style={{width:"50px"}} className="btn btn-success ms-3 mt-3" onClick={props.closemodal}>No</Button>
                </div>
        </div>
        </>
    )
}