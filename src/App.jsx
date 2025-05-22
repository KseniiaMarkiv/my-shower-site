import { useState } from 'react'
import './styles/App.css'
import CustomNavbar from './components/Navbar'

import { Stack, Button } from 'react-bootstrap';


export default function App() {
  return (
    <>
      <CustomNavbar />

      <h1>Hello</h1>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>;
    </>
  );
}
