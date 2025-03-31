import { useState } from "react";
import { FaGithub, FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function UpdateProfile() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    profileImageUrl: "",
    contactNo: "",
    skills: [],
    link: "",
  });
  const [newSkill, setNewSkill] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const addSkill = () => {
    if (newSkill && !profileData.skills.includes(newSkill)) {
      setProfileData((prev) => ({ ...prev, skills: [...prev.skills, newSkill] }));
      setNewSkill("");
    }
  };

  const removeSkill = (skill) => {
    setProfileData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/update/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profileData),
      });
      const data = await response.json();
      if (data.success) {
        alert("Profile updated successfully!");
        navigate("/profile");
      } else {
        alert("Profile update failed");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl text-blue-400 font-semibold mb-4">Update Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Profile Image Upload */}
        <div className="mb-4 flex items-center">
          <input
            type="text"
            name="profileImageUrl"
            value={profileData.profileImageUrl}
            onChange={handleChange}
            placeholder="Profile Image URL"
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
          <FaUpload className="ml-2 text-blue-400" />
        </div>
        {/* Contact Number */}
        <input
          type="text"
          name="contactNo"
          value={profileData.contactNo}
          onChange={handleChange}
          placeholder="Contact Number"
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
        />
        {/* Skills Input */}
        <div className="mb-4">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add Skill"
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
          <button
            type="button"
            onClick={addSkill}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Skill
          </button>
          <div className="mt-2 flex flex-wrap gap-2">
            {profileData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-400 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-red-500"
                onClick={() => removeSkill(skill)}
              >
                {skill} ✖
              </span>
            ))}
          </div>
        </div>
        {/* GitHub / Link */}
        <div className="mb-4 flex items-center">
          <input
            type="text"
            name="link"
            value={profileData.link}
            onChange={handleChange}
            placeholder="GitHub / Portfolio Link"
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
          <FaGithub className="ml-2 text-blue-400" />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;