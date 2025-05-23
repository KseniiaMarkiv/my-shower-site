import { useState } from 'react'
import './styles/App.css'
import CustomNavbar from './components/Navbar'
import JumbotronCarousel from './components/JumbotronCarousel'

import { Stack, Button } from 'react-bootstrap';


export default function App() {
  return (
    <>
      <CustomNavbar />
      <JumbotronCarousel />

      <h1>Hello</h1>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
      <p className="fs-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, amet facilis.
      </p>
    </>
  );
}
