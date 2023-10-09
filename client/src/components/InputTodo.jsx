import { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  
  const onSubmitFrom = async (e) => {
    e.preventDefault()
    try {
      const body ={description}
      const res=fetch("http://localhost:5000/",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
      })
    } catch (error) {
      console.error(error)
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">PERN todo List</h1>
      <form className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
