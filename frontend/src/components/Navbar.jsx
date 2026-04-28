import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Task SaaS</h1>

      <div className="flex items-center gap-4">
        {user && <span>{user.name}</span>}

        <button
          onClick={logoutHandler}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;