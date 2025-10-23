import React, {  useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import GlobalLoader from './GlobalLoader';
import { AuthContext } from '../Context/AuthContext';

const Profile = () => {
  const {user, loading, setUser, updateProfiles} = useContext(AuthContext);
  const [showForm,setShowForm] = useState(false)

  const [name,setName] = useState(user?.displayName||'')
  const [photoURL,setPhotoURL] = useState(user?.photoURL||'')


  const [contactNo,setContactNo]=useState(user?.contactNo||'');
    const [occupation,setOccupation]=useState(user?.occupation||'');
      const [gender,setGender]=useState(user?.gender||'');

      const[updating,setUpdating] = useState(false)
useEffect(() => {
  if (!user) toast.info("No user found! Showing guest profile.");
}, [user]);

      const handleUpdateProfile = async e=>{
        e.preventDefault()
          if (!user) {
    toast.error("You must be logged in to update your profile!");
    return; 
  }
          if (!name.trim()) {
    toast.error("Full name is required!");
    return;
  }
  if (!contactNo.trim()) {
    toast.error("Contact number is required!");
    return;
  }
  if (!/^\d{10,15}$/.test(contactNo)) {
    toast.error("Enter a valid contact number (10–15 digits).");
    return;
  }
  if (!occupation.trim()) {
    toast.error("Please select your occupation!");
    return;
  }
  if (!gender.trim()) {
    toast.error("Please select your gender!");
    return;
  }
    
        try{
          setUpdating(true)
          setUser({
            ...user,
             displayName: name,
             photoURL,
             contactNo,
             occupation,
             gender
          });
      toast.success("Profile updated successfully!");
      setShowForm(false);
        }catch(error){
          toast.error(error.message)

        }finally{
          setUpdating(false)
        }

      };
    if(loading) return <GlobalLoader />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-gray-50 to-gray-100 px-4 py-10">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8 text-center border border-gray-100 transition-all duration-300 hover:shadow-blue-200">
        {/* User Image */}
        <div className="flex justify-center">
          <img
            src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
            alt="User Avatar"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* User Info */}
        {!showForm && (
          <div className="mt-6 space-y-2 text-left px-6">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              {user?.displayName || "Anonymous User"}
            </h2>
            <p className="text-gray-500 text-center">{user?.email}</p>
            <hr className="my-3" />
            <p className="text-gray-700">
              <strong>Contact No:</strong> {user?.contactNo || "Not provided"}
            </p>
            <p className="text-gray-700">
              <strong>Occupation:</strong> {user?.occupation || "Not provided"}
            </p>
            <p className="text-gray-700">
              <strong>Gender:</strong> {user?.gender || "Not specified"}
            </p>
          </div>
        )}

        {/* Update Profile Button */}
        <div className="mt-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
          >
            {showForm ? "Cancel" : "Update Profile"}
          </button>
        </div>

        {/* Update Form */}
        {showForm && (
          <form onSubmit={handleUpdateProfile} className="mt-6 space-y-4 text-left px-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 outline-none"
              required
            />
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Photo URL"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 outline-none"
            />
            <input
              type="tel"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              placeholder="Contact Number"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 outline-none"
            />
            {/* occupation */}
         <select
  value={occupation}
  onChange={(e) => setOccupation(e.target.value)}
  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 outline-none"
>
  <option value="">Select Occupation</option>
  <option value="Student">Student</option>
  <option value="Software Engineer">Software Engineer</option>
  <option value="Designer">Designer</option>
  <option value="Teacher">Teacher</option>
  <option value="Doctor">Doctor</option>
  <option value="Businessperson">Businessperson</option>
  <option value="Freelancer">Freelancer</option>
  <option value="Other">Other</option>
</select>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 outline-none"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <button
              type="submit"
              disabled={updating}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
            >
              {updating ? "Saving..." : "Save Changes"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;