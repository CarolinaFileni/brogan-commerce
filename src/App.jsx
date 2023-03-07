import  ItemListContainer  from "./components/ItemListContainer"; 
import NavBar from "./components/navbar"; 
import { ChakraProvider } from "@chakra-ui/react";  

const App = () => {
  return (
    <ChakraProvider>
    <NavBar /> 
    <ItemListContainer greeting={"Bienvenidos a mi tienda Online "} /> 
    </ChakraProvider>
  );
};

export default App; 