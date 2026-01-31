import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
     localStorage.setItem('formdata',JSON.stringify(formData)) // stored data
  };
 
 const dataaJson= localStorage.getItem('formdata')
 const dataa=JSON.parse(dataaJson)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <h3>Live Preview</h3>
      <p>Name: {dataa.name}</p>
      <p>Email: {dataa.email}</p>
    </>
  );
}

export default App;
