'use client';

import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import { GiPadlock } from 'react-icons/gi';
import { useLoginForm } from './useLoginForm';


const LoginForm = () => {
  const { register, handleSubmit, errors, isValid, isSubmitting, onSubmit } = useLoginForm();

  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-2 text-secondary">
          <GiPadlock size={30} />
          <h1 className="text-3xl font-semibold">Login</h1>
        </div>
        <p className="text-neutral-500">Welcome back to NextMatch!</p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              defaultValue=""
              label="Email"
              variant="bordered"
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
            <Input
              defaultValue=""
              label="Password"
              variant="bordered"
              type="password"
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
            />
            <Button
              isLoading={isSubmitting}
              isDisabled={!isValid}
              fullWidth
              color="secondary"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}

export default LoginForm;