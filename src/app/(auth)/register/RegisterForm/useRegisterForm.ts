import { useForm } from 'react-hook-form';
import { registerSchema, RegisterSchema } from '@/lib/schemas/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUser } from '@/app/actions/authActions';
import { toast } from 'react-toastify';

export const useRegisterForm = () => {
  const { register, handleSubmit, setError, formState: { errors, isValid, isSubmitting } } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched'
  });

  const onSubmit = async (values: RegisterSchema) => {
    const result = await registerUser(values);

    if (result.status === 'success') {
      toast.info('Successfully registered')
    } else {
      if (Array.isArray(result.error)) {
        result.error.forEach((e) => {
          const fieldName = e.path.join('.') as 'name' | 'email' | 'password';
          setError(fieldName, { message: e.message })
        })
      } else {
        setError('root.serverError', { message: result.error })
      }

    }
    console.log(result);
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