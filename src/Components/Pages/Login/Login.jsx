
import { Link } from 'react-router-dom';
import login from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(res=>{
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left mx-auto w-1/2 mr-6">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center m-3'>New member? <Link className='text-red-500' to='/register'>Register</Link> here</p>
                </div>
            </div>
        </div>
    );
};

export default Login;