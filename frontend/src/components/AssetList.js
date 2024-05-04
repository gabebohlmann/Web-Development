import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddAssetForm from './AddAssetForm';

function AssetList() {
  const [assets, setAssets] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/assets');
        setAssets(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [reload]);

  const deleteAsset = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/assets/${id}`);
      setReload((reload) => !reload);  // To re-render the component after deleting an asset
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
        <h1>Assets</h1>
        <AddAssetForm setReload={setReload} />
        <ul>
            {assets.map((asset) => (
            <li key={asset._id}>
                {asset.name} - {asset.description} - {asset.location}
                <button onClick={() => deleteAsset(asset._id)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default AssetList;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AssetList() {
//   const [assets, setAssets] = useState([]);
//   const [reload, setReload] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/assets');
//         setAssets(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, [reload]);

//   const deleteAsset = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/assets/${id}`);
//       setReload((reload) => !reload);  // To re-render the component after deleting an asset
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//         <h1>Assets</h1>
//         <ul>
//             {assets.map((asset) => (
//             <li key={asset._id}>
//                 {asset.name} - {asset.description} - {asset.location}
//                 <button onClick={() => deleteAsset(asset._id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//     </div>
    
//   );
// }

// export default AssetList;


