import { Link , useNavigate ,useLocation} from "react-router-dom";
import Nav from "../../components/shared/nav/Nav";
import { useContext } from "react";
import { AuthContext } from "../../components/authProvider/AuthProvider";

const Login = () => {

    const location = useLocation();

    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handelLogin = e =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        console.log(e.currentTarget)

        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        loginUser(email, password)
        .then(result =>{
            console.log(result.user);
            {location.state ? navigate(location.state) : navigate('/')}
            
        })
        .catch(error =>{
            console.log(error);
        })
        
    }
    return (
        <div className="bg-base-200 p-4 min-h-screen">
            <div>
                <Nav></Nav>
            </div>
            <div>
                <div className="hero ">
                    <div className="hero-content flex-col w-1/2 p-4">
                        <div className="card rounded-sm shrink-0 w-full  shadow-2xl bg-base-100">
                            <form onSubmit={handelLogin} className="card-body p-6">
                                <h1 className="my-6 text-3xl font-bold text-gray-500 mx-auto">Login your account</h1>
                                <hr />
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#403F3F] text-white font-semibold">Login</button>
                                </div>
                            </form>
                            <p className="mx-auto my-4">Do not Have An Account ? <Link className="text-red-500 font-bold" to = '/register'>Register</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;