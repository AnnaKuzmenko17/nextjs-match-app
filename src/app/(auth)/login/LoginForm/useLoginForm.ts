import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchema } from '@/lib/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInUser } from '@/app/actions/authActions';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export const useLoginForm = () => {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched'
  });

  const onSubmit = async (values: LoginSchema) => {
    const result = await signInUser(values);
    console.log('Sign-in result:', result);

    if (result.status === 'success') {
      router.push('/members')
      router.refresh()
    } else {
      toast.error(result.error as string)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    onSubmit
  }
}