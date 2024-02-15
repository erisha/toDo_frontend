import React from 'react'

export const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>Welcome Back!</Title>
        <Form>
            <Input placeholder='Username'/>
            <Input placeholder='Password'/>
            <Button>Login</Button>
            <Link>Forgot Password</Link>
            <Link>Create A New Account</Link>
        </Form>
    </Wrapper>
</Container>
  )
}
