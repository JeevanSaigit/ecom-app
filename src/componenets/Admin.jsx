import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user || user.type !== "Admin") {
      navigate("/login");
    }
  }, [navigate]);

  return <h1>Welcome Admin 👑</h1>;
}

export default AdminPage;