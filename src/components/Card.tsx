import { 
  Center,
  ChakraProvider,
  Input,
  Box 
} from "@chakra-ui/react";
import { ButtonLogar } from "./Button";
import { login } from "../services/login";
interface ICard {
  
  titulo: string,
 
}
export const Card = ({ titulo }: ICard) => {
 
  return(
      
          
          <ChakraProvider>
    <Box minHeight='100vh'  backgroundColor='#9413dc' padding='25px' alignItems={'center'} display={"flex"} justifyContent={"center"} >
      <Box backgroundColor='#FFFFFF' width={500}  borderRadius='25px' padding='30px 20px' display={"flex"}  flexDirection={"column"} rowGap={2}>
        <Center>
         <h1>{titulo}</h1>
         </Center>
         <Input placeholder="email" />
         <Input placeholder="password" />
       
         <ButtonLogar 
         onClick = {login}
         text= {"Logar"}
         />
        
      </Box>
   </Box>
  </ChakraProvider>
     
  )
}