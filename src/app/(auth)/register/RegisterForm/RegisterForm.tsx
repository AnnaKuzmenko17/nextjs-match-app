'use client';

import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import { GiPadlock } from 'react-icons/gi';
import { useRegisterForm } from './useRegisterForm';

const RegisterForm = () => {
  const { register, handleSubmit, errors, isValid, isSubmitting, onSubmit } = useRegisterForm();

  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-2 text-secondary">
          <GiPadlock size={30} />
          <h1 className="text-3xl font-semibold">Register</h1>
        </div>
        <p className="text-neutral-500">Welcome to NextMatch!</p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              defaultValue=""
              label="Name"
              variant="bordered"
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
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
            {errors.root?.serverError && (
              <p className="text-danger text-sm">{errors.root.serverError.message}</p>
            )}
            <Button isLoading={isSubmitting} isDisabled={!isValid} fullWidth color="secondary" type="submit">
              Register
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}

export default RegisterForm;