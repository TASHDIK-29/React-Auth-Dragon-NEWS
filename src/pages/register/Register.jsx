import { Link } from "react-router-dom";
import Nav from "../../components/shared/nav/Nav";
import { useContext } from "react";
import { AuthContext } from "../../components/authProvider/AuthProvider";

const Register = () => {

    const {registerUser} = useContext(AuthContext);

    const handelRegister = e =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        console.log(e.currentTarget)

        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        registerUser(email, password)
        .then(result =>{
            console.log(result.user);
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
                    <div className="hero-content flex-col w-1/2 p-3">
                        <div className="card rounded-sm shrink-0 w-full shadow-2xl bg-base-100">
                            <form onSubmit={handelRegister} className="card-body p-6">
                                <h1 className="my-6 text-3xl font-bold text-gray-500 mx-auto">Register your account</h1>
                                <hr />
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Enter your photo" className="input input-bordered" required />
                                </div>
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
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#403F3F] text-white font-semibold">Register</button>
                                </div>
                            </form>
                            <p className="mx-auto my-4">Already Have An Account ? please <Link className="text-red-500 font-bold" to = '/login'>Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;