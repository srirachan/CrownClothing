import { signInWithGooglePopup } from "../../utils/firebase/firebaseutils";

const SignIn = () => {
  const logInGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logInGoogleUser}>Sign in with google account</button>
    </div>
  );
};

export default SignIn;
