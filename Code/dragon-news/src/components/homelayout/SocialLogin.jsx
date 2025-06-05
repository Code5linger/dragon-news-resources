import { FcGoogle } from 'react-icons/fc';
import { FaGithubSquare } from 'react-icons/fa';

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With </h2>
      <div className="space-y-3">
        <button className="btn btn-outline btn-secondary w-full">
          <FcGoogle size={24} />
          Login With Google
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <FaGithubSquare size={24} />
          Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
