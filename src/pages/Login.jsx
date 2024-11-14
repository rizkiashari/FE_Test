import Button from "../components/atoms/Button";
import TextInput from "../components/molecules/TextInput";

const Login = () => {
  return (
    <div className="bg-[#F0F2F5] min-h-screen flex items-center justify-center">
      <form className="w-1/4 flex flex-col gap-4 justify-center">
        <TextInput name="username" text="Username" placeholder="username" />
        <TextInput name="password" text="Password" placeholder="password" />
        <Button text="Login" type="submit" className="mt-4 w-1/3 m-auto" />
      </form>
    </div>
  );
};

export default Login;
