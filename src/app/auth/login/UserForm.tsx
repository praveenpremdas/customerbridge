import { CreateAccount, DontHaveAccount, EmailAddressLogIn, OrSignInWith, Password, RememberPassword, SignIn, SignInToAccount } from "@/Constant";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import imageOne from "../../../../public/assets/images/logo/cb-logo.png";
import imageTwo from "../../../../public/assets/images/logo/logo_dark.png";
import UserSocialApp from "./UserSocialApp";
import { authAxiosInstance } from "@/utils/axiosInstance"


const UserForm = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const formSubmitHandle = async () => {
    try {
      if (email && password) {
        const authResponse = await authAxiosInstance.post('/authenticate',{username: email, password: password});
        if (authResponse.status == 200 && authResponse.data.status == "Success") {
          Cookies.set("auth_barrer_token", authResponse.data.message);
          // router.push(`/customers`);
          window.location.href = '/customers';
        } else {
          alert("Login Failed")
        }
      } else {
        alert("Please Enter Valid Email Or Password");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };




  return (
    <div>
      <div>
        <Link className="logo" href={`/dashboard/default_dashboard`}>
          <img className="img-fluid w-50 me-4 img-thumbnail text-bg-dark" src={imageOne.src} alt="login page" />
          {/* <img className="img-fluid for-dark" src={imageTwo.src} alt="login page" /> */}
        </Link>
      </div>
      <div className="login-main border border-dark">
        <Form className="theme-form">
          <h6>Enter your email & password to login</h6>
          <FormGroup>
            <Label className="col-form-label text-dark">{EmailAddressLogIn}</Label>
            <Input type="email" defaultValue={email} onChange={(event) => setEmail(event.target.value)} placeholder="example@gmail.com" />
          </FormGroup>
          <FormGroup>
            <Label className="col-form-label text-dark">{Password}</Label>
            <div className="position-relative">
              <Input type={show ? "text" : "password"} defaultValue={password} onChange={(event) => setPassword(event.target.value)} placeholder="******" />
              <div className="show-hide" onClick={() => setShow(!show)}><span className="show"> </span></div>
            </div>
          </FormGroup>
          <FormGroup className="mb-0">
            <div className="checkbox p-0">
              <Input id="checkbox1" type="checkbox" />
              <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
            </div>
            <div className="text-end mt-3">
              <Button color="primary" block className="w-100" onClick={formSubmitHandle}>{SignIn}</Button>
            </div>
          </FormGroup>
          {/* <h6 className="text-muted mt-4 or">{OrSignInWith}</h6>
          <UserSocialApp />
          <p className="mt-4 mb-0 text-center">{DontHaveAccount}
            <Link className="ms-2" href={`/authentication/registersimple`}>{CreateAccount}</Link>
          </p> */}
        </Form>
      </div>
    </div>
  );
};
export default UserForm;

