import Signin from "./users/singin";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Project() {
  return (
    <div className="row">
      <h1>Assignment 6</h1>

      <p>Please signup if you have not already!</p>
      <Link to={"/Labs/a6/signup"}>
        <button>Sign Up</button>
      </Link>
      <br />
      <br />
      <p>Please signin to view your details!</p>
      <br />
      <br />
      <Link to={"/Labs/a6/signin"}>
        <button>Sign In</button>
      </Link>
      <br />
      <br />

      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/Labs/a6/" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/account/:id" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;
