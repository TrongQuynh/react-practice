import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { User } from 'src/common/models/User.model';

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user: User | null = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ProtectedRoute",user);
    
    if (user === null) {
      navigate('/auth/sign-in', { replace: true });
    }
  }, [navigate, user]);

  return children;
}
