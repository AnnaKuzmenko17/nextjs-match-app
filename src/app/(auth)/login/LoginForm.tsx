import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import { GiPadlock } from 'react-icons/gi';

const LoginForm = () => {
  return (
    <Card className='w-2/5 mx-auto'>
      <CardHeader className='flex flex-col justify-center items-center'>
        <div className='flex flex-row justify-center items-center gap-2 text-secondary'>
          <GiPadlock size={30} />
          <h1 className='text-3xl font-semibold'>Login</h1>
        </div>
        <p className='text-neutral-500'>Welcome back to NextMatch!</p>
      </CardHeader>
      <CardBody>
        <form action="">
          <div className='space-y-4'>
            <Input
              label='Email'
              variant='bordered'
            />
            <Input
              label='Password'
              variant='bordered'
              type='password'
            />
            <Button fullWidth color='secondary' type='submit'>
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}

export default LoginForm;