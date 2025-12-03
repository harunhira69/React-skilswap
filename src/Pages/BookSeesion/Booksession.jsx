// Pages/BookSession.jsx
import React, { useContext } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const BookSession = () => {
  const skills = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // get user from context

  const skill = skills.find((s) => s.skillId === parseInt(id));
  if (!skill) return <p className="text-center mt-10 text-gray-500">Skill not found</p>;

  const handleBooking = (e) => {
    e.preventDefault();

    if (!user) {
      // Redirect to login if user is not logged in
      navigate("/auth/login");
      return;
    }

    // If user is logged in, proceed with booking
    toast.success(`Session booked for "${skill.skillName}" at $${skill.price} by ${user.name || user.email}`);
  };

  return (
    <div className="px-6 lg:px-24 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Book Session for "{skill.skillName}"</h1>
      <p className="text-gray-700 mb-4"><strong>Instructor:</strong> {skill.providerName}</p>
      <p className="text-gray-700 mb-4"><strong>Price:</strong> ${skill.price}</p>

      <form onSubmit={handleBooking} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          defaultValue={user?.name || ""}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          defaultValue={user?.email || ""}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="date"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
        <button
  type="button"
  onClick={() => navigate(-1)}
  className="w-full md:w-auto py-3 px-6 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-300"
>
  Cancel Booking
</button>


          <button
            type="submit"
            className="w-full md:w-auto py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl text-lg transition-colors duration-300"
          >
            Confirm Booking - ${skill.price}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookSession;
