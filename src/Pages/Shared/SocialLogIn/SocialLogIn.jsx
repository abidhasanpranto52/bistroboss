import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
// import { AiOutlineGoogle } from "react-icons/ai";
import gLogo from "../../../assets/icon/Google.png";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogIn = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const saveUser = { name: loggedUser.displayName, email: loggedUser.email}
          fetch("https://bistro-boss-server-psi-black.vercel.app/users", {
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then(() => {
                navigate(from, { replace: true });
            });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="divider">Or</div>
      <div className="text-center">
        {/* <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'><AiOutlineGoogle className="text-3xl"/></button> */}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <img src={gLogo} />
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
