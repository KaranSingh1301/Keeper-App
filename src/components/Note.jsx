import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';



function Note(props) {

//const[list , setList]  = useState({});
 
  function handleClick() {
    props.onDelete(props.id);
  }
function updateList(){
  console.log(props.title);
}

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button onclick={updateList}>
      <EditIcon 
      />
      </button>
      
    </div>
  );
}

export default Note;
