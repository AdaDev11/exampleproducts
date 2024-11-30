import './App.css';
import { MantineProvider } from '@mantine/core';
import Products from './component/Products/product.tsx'

function App() {

  return (
    <>
      <MantineProvider>
        <Products />
      </MantineProvider>
    </>
  )
}

export default App;