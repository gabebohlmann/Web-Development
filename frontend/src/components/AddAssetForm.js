import React, { useState } from 'react';
import axios from 'axios';

function AddAssetForm({ setReload }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/assets", { name, description, location })
      .then(response => {
        console.log(response.data);
        setName("");
        setDescription("");
        setLocation("");
        setReload((reload) => !reload);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <input type="submit" value="Add Asset" />
    </form>
  );
}

export default AddAssetForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// function AddAssetForm({ setReload }) {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post("http://localhost:5000/assets", { name, description, location })
//       .then(response => {
//         console.log(response.data);
//         setName("");
//         setDescription("");
//         setLocation("");
//         setReload((reload) => !reload);
//       })
//       .catch(error => {
//         console.error('There was an error!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Description:
//         <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//       </label>
//       <label>
//         Location:
//         <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
//       </label>
//       <input type="submit" value="Add Asset" />
//     </form>
//   );
// }

// export default AddAssetForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// function AddAssetForm() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post("http://localhost:5000/assets", { name, description, location })
//       .then(response => {
//         console.log(response.data);
//         // Here you might want to update your asset list in the parent component or redirect to the asset list page

//         // Refresh the page after a successful post
//         window.location.reload();
//       })
//       .catch(error => {
//         console.error('There was an error!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Description:
//         <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//       </label>
//       <label>
//         Location:
//         <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
//       </label>
//       <input type="submit" value="Add Asset" />
//     </form>
//   );
// }

// export default AddAssetForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// function AddAssetForm() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post("http://localhost:5000/assets", { name, description, location })
//       .then(response => {
//         console.log(response.data);
//         // Here you might want to update your asset list in the parent component or redirect to the asset list page
//       })
//       .catch(error => {
//         console.error('There was an error!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Description:
//         <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//       </label>
//       <label>
//         Location:
//         <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
//       </label>
//       <input type="submit" value="Add Asset" />
//     </form>
//   );
// }

// export default AddAssetForm;
