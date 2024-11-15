import { useState } from "react";
import Button from "../components/atoms/Button";
import TextInput from "../components/molecules/TextInput";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    if (!data.username || !data.password) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Username and password must be filled!",
      });
    }

    // add your login logic here
    const dataLogin = JSON.stringify(data);
    localStorage.setItem("dataUser", dataLogin);
    navigate("/pemindahan-barang");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={onLogin}
        className="w-1/4 flex flex-col gap-4 justify-center"
      >
        <TextInput
          name="username"
          text="Username"
          placeholder="username"
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <TextInput
          name="password"
          text="Password"
          placeholder="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Button
          text="Login"
          colorBg="#E5A000"
          type="submit"
          className="mt-4 w-1/3 m-auto text-white"
        />
      </form>
    </div>
  );
};

export default Login;
