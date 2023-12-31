// import React, { useEffect, useState } from "react";
// import { API_URL } from "../../config";
// import "./Profile.css";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const [userDetails, setUserDetails] = useState({});
//   const [editMode, setEditMode] = useState(false);
//   const [updatedDetails, setUpdatedDetails] = useState({});

//   const navigate = useNavigate();

//   useEffect(() => {
//     const authtoken = sessionStorage.getItem("auth-token");
//     if (!authtoken) {
//       navigate("/login");
//     } else {
//       fetchUserProfile();
//     }
//   }, [navigate]);

//   const fetchUserProfile = () => {
//     try {
//       // const storedName = sessionStorage.getItem("name");
//       const storedEmail = sessionStorage.getItem("email");

//       // if (storedName) {
//               if (storedEmail) {

//         const storedUserDetails = {
//           name: storedEmail,
//           phone: sessionStorage.getItem("phone"),
//           email: sessionStorage.getItem("email"),
//         };

//         setUserDetails(storedUserDetails);
//         setUpdatedDetails(storedUserDetails);
//       } else {
//         // Handle case when user details are not found in session storage
//       }
//     } catch (error) {
//       console.error(error);
//       // Handle error case
//     }
//   };

//   const handleEdit = () => {
//     setEditMode(true);
//   };

//   const handleInputChange = (e) => {
//     setUpdatedDetails({
//       ...updatedDetails,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const username = sessionStorage.getItem("name");
//       const payload = { ...updatedDetails, name: username };
//       const userEmail = sessionStorage.getItem("email"); // Retrieve the user email from session storage
//       // const payload = { ...updatedDetails, email: userEmail, }; // Include the user email in the request payload
//       const response = await fetch(`${API_URL}/api/auth/update`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         // Update the user details in session storage
//         sessionStorage.setItem("name", updatedDetails.name);
//         // sessionStorage.setItem("phone", updatedDetails.phone);
//         sessionStorage.setItem("email", updatedDetails.email);

//         setUserDetails(updatedDetails);
//         setEditMode(false);
//         // Display success message to the user
//         alert(`Profile Updated Successfully!`);
//         navigate("/");
//         window.location.reload(); // You might not need this line, navigate should handle the redirection
//       } else {
//         // Handle error case
//         throw new Error("Failed to update profile");
//       }
//     } catch (error) {
//       console.error(error);
//       // Handle error case
//     }
//   };

//   return (
//     <div className="profile-container">
//       {editMode ? (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={updatedDetails.name}
//               onChange={handleInputChange}
//             />
//           </label> 
//           <label>
//             Phone:
//             <input
//               type="text"
//               name="phone"
//               value={updatedDetails.phone}
//               onChange={handleInputChange}
//             />
//           </label>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={updatedDetails.email}
//               onChange={handleInputChange}
//             />
//           </label> 
//           <button type="submit">Save</button>
//         </form>
//       ) : (
//         <div className="profile-details">
//           <h1>Profile Details</h1>
//           <p>Name: {userDetails.name}</p>
//           <p>Phone: {userDetails.phone}</p>
//           <p>Email: {userDetails.email}</p>
//           <button onClick={handleEdit}>Edit</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;


// import React, { useEffect, useState } from "react";
// import { API_URL } from "../../config";
// import './Profile.css';
// import { useNavigate } from "react-router-dom";
// const Profile = () => {
//   const [userDetails, setUserDetails] = useState({});
//   const [editMode, setEditMode] = useState(false);
//   const [updatedDetails, setUpdatedDetails] = useState({});

//   const navigate = useNavigate();
//   useEffect(() => {
//     fetchUserProfile();
//     const authtoken = sessionStorage.getItem("auth-token");
//         if (!authtoken) {
//             navigate("/login");
//         }
//   }, []);

//   const fetchUserProfile = () => {
//     try {
//       // const storedName = sessionStorage.getItem("name");
//       const storedPhone = sessionStorage.getItem("phone");
//       const storedEmail = sessionStorage.getItem("email");
//       const extractname= storedEmail.substring(0, storedEmail.indexOf('@'));
//       const storedName = extractname;

//       // if (storedName && storedPhone && storedEmail) {
//         if (storedEmail) {

//         const storedUserDetails = {
//           // name: storedName,
//           // phone: storedPhone,
//           name:storedName,
//           email: storedEmail,
//         };

//         setUserDetails(storedUserDetails);
//         setUpdatedDetails(storedUserDetails);
//       } else {
//         // Handle case when user details are not found in session storage
//       }
//     } catch (error) {
//       console.error(error);
//       // Handle error case
//     }
//   };

//   const handleEdit = () => {
//     setEditMode(true);
//   };

//   const handleInputChange = (e) => {
//     setUpdatedDetails({
//       ...updatedDetails,
//       [e.target.name]: e.target.value,
      
//     });
//     console.log('the details are',updatedDetails);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//         const userEmail = sessionStorage.getItem("email"); // Retrieve the user email from session storage
//         const payload = { ...updatedDetails, email: userEmail, }; // Include the user email in the request payload
//         const response = await fetch(`${API_URL}/api/auth/update`, {
//             method: "PUT",
//             headers: {
//             "Content-Type": "application/json",
//             },
//             body: JSON.stringify(payload),
//         });
    
//         if (response.ok) {
//             // Update the user details in session storage
//             sessionStorage.setItem("name", updatedDetails.name);
//             sessionStorage.setItem("phone", updatedDetails.phone);
//             sessionStorage.setItem("email", updatedDetails.email);
//             // sessionStorage.setItem("email", updatedDetails.email); //if we are not using 75 line then use this to eshow extracted name from email to store in session

//             setUserDetails(updatedDetails);
//             setEditMode(false);
//             // Display success message to the user
//             alert(`Profile Updated Successfully!`);
//             navigate("/");
//             window.location.reload();
//         } else {
//             // Handle error case
//             throw new Error('Failed to update profile');
//         }
//         } catch (error) {
//         console.error(error);
//         // Handle error case
//         }
//     };
    

//   return (
//     <div className="profile-container">
//       {editMode ? (
//         <form onSubmit={handleSubmit}>
//           {/* <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={updatedDetails.name}
//               readOnly
//             />
//           </label>
//           bvb */}
//          {/*  <label>
//             Phone:
//             <input
//               type="text"
//               name="phone"
//               value={updatedDetails.phone}
//               onChange={handleInputChange}
//             />
//           </label> */}
//           <label>
//             Email1:
//             <input
//               type="email"
//               name="email"
//               value={updatedDetails.email}
//               onChange={handleInputChange}
//             />
//           </label>
//           <button type="submit">Save</button>
//         </form>
//       ) : (
//         <div className="profile-details">
          
//           {/* <h1>Welcome, {userDetails.name}</h1> */}
//         {/*   <p>Phone: {userDetails.phone}</p> */}
//           <p>Email: {userDetails.email}</p>
//           <button onClick={handleEdit}>Edit</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;



import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  // const fetchUserProfile = () => {
  //   try {
  //     const storedName = sessionStorage.getItem("name");
  //     if (storedName) {
  //       const storedUserDetails = {
  //         name: storedName,
  //         // phone: sessionStorage.getItem("phone"),
  //         // email: sessionStorage.getItem("email"),
  //       };

  //       setUserDetails(storedUserDetails);
  //       setUpdatedDetails(storedUserDetails);
  //     } else {
  //       // Handle case when user details are not found in session storage
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     // Handle error case
  //   }
  // };
  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); // Get the email from session storage
  
      if (!authtoken) {
        navigate("/login");
      } else {
        const response = await fetch(`${API_URL}/api/auth/user`, {
          headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Email": email, // Add the email to the headers
          },
        });
  
        if (response.ok) {
          const user = await response.json();
          setUserDetails(user);
          setUpdatedDetails(user);
        } else {
          // Handle error case
          throw new Error("Failed to fetch user profile");
        }
      }
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };
  
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const username = sessionStorage.getItem("name");
  //     const payload = { ...updatedDetails, name: username };
  //     const response = await fetch(`${API_URL}/api/auth/update`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     if (response.ok) {
  //       // Update the user details in session storage
  //       sessionStorage.setItem("name", updatedDetails.name);
  //       // sessionStorage.setItem("phone", updatedDetails.phone);
  //       // sessionStorage.setItem("email", updatedDetails.email);

  //       setUserDetails(updatedDetails);
  //       setEditMode(false);
  //       // Display success message to the user
  //       alert(`Profile Updated Successfully!`);
  //       navigate("/");
  //       window.location.reload(); // You might not need this line, navigate should handle the redirection
  //     } else {
  //       // Handle error case
  //       throw new Error("Failed to update profile");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     // Handle error case
  //   }
  // };
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const authtoken = sessionStorage.getItem("auth-token");
        const email = sessionStorage.getItem("email"); // Get the email from session storage
    
        if (!authtoken || !email) {
          navigate("/login");
          return;
        }
    
        const payload = { ...updatedDetails };
        const response = await fetch(`${API_URL}/api/auth/user`, {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Email": email,
          },
          body: JSON.stringify(payload),
        });
    
        if (response.ok) {
          // Update the user details in session storage
          sessionStorage.setItem("name", updatedDetails.name);
          sessionStorage.setItem("phone", updatedDetails.phone);
    
          setUserDetails(updatedDetails);
          setEditMode(false);
          // Display success message to the user
          alert(`Profile Updated Successfully!`);
          navigate("/");
        } else {
          // Handle error case
          throw new Error("Failed to update profile");
        }
      } catch (error) {
        console.error(error);
        // Handle error case
      }
    };
  
  return (
    <div className="profile-container">
    {editMode ? (
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={userDetails.email}
            disabled // Disable the email field
          />
        </label>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={updatedDetails.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone
          <input
            type="text"
            name="phone"
            value={updatedDetails.phone}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    ) : (
      <div className="profile-details">
        <h1>Welcome, {userDetails.name}</h1>
        <p> <b>Email:</b> {userDetails.email}</p>
        <p><b>Phone:</b> {userDetails.phone}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    )}
  </div>
  );
};

export default Profile;
