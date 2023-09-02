import React from 'react'
import { Link} from 'react-router-dom'
const Signup = () => {

    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('')
    // const {signUp} = UserAuth();
    // const navigate = useNavigate();
    // const handleSubmit = async(e) =>{
    //     e.preventDefault();
    //     try {
    //         await signUp(email,password)
    //         navigate('/')
    //     }catch(error){
    //         console.log(error)
    //     }

    // }

    
  return (
    <div className = "w-full h-screen">
        <img className =  "hidden sm:block absolute w-full h-full object-cover"alt = "sign-in"src  = "https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/0b3dc3ab-67fa-49bd-9d78-c6557c01e5b4/US-en-20230703-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
        <div className = "bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className = "fixed w-full px-4 py-24 z-50">
            <div className  = 'max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'> 
                <div className = "max-w-[320px] mx-auto py-16">
                    <h1 className  = "text-3xl font-bold">Sign Up</h1>
                    <form className = 'w-full flex flex-col py-4'>
                        <input  className = "p-3 my-2 bg-gray-700 rounded" type = "email" placeholder = "Email" autoComplete = 'email' />
                        <input className = "p-3 my-2 bg-gray-700 rounded" type = "password" placeholder = 'Password' autoComplete = "current-password" />
                        <button className  = "bg-red-600 py-3 my-6 rounded font-bold"> Sign Up </button>

                        <div className = "flex justify-between items-center text-sm text-gray-600">
                            <p><input className  = "mr-2" type="checkbox" />Remember me </p>
                            <p>Need Help?</p>
                        </div>
                        <p className  ="py-4"><span className  = 'text-gray-600'>Already subscribed to Netflix? </span>
                        <Link to = '/login'>
                            Sign In
                        </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup