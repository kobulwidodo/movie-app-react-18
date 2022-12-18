import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import styled from 'styled-components'
import serverapi from '../api/serverapi'
import ButtonPrimary from '../Components/ButtonPrimary/ButtonPrimary'
import Navigatebar from '../Components/Navbar/Navigatebar'

const BackgroundGroup = styled.div`
  background-color: white;
  padding: 30px 50px;
  border-radius: 15px;
`

const H4 = styled.h4`
  margin-bottom: 27px;
  font-weight: 400;
  text-align: center;
`

const StyledFormLabel = styled(Form.Label)`
  font-weight: 400;
  font-size: 14px;
  color: #434343;
`

const RegisterPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await serverapi.post(`auth/register`, {
        name: name,
        email: email,
        password: password
      })
      console.log(res.data)
    } catch (e) {
      if (e.response.status === 422) {
        setError("Harap mengisi semua input")
      }
      console.log(e.response.data)
    }
  }
  return (
    <>
      <Navigatebar />
      <Container>
        <BackgroundGroup style={{ maxWidth: 600, margin: '0 auto' }}>
          <H4>Buat Akun Movie App</H4>
          {(error) && (<p className="text-danger text-center">{error}</p>)}
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3">
              <StyledFormLabel>Name</StyledFormLabel>
              <Form.Control type="text" placeholder="" name="name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <StyledFormLabel>Email address</StyledFormLabel>
              <Form.Control type="email" placeholder="" name="email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <StyledFormLabel>Password</StyledFormLabel>
              <Form.Control type="password" placeholder="" name="password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <div style={{ textAlign: 'center' }}>
              <ButtonPrimary 
                varian="primary"
                text="Register"
                type="submit"
              />
            </div>
          </Form>
        </BackgroundGroup>
      </Container>
    </>
  )
}

export default RegisterPage