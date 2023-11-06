import { 
    
    Button 
  } from "@chakra-ui/react";
interface IButton {
    text:string,
    onClick: () => void
}

export const ButtonLogar = ({text, onClick}: IButton) => {
    return ( 
        <Button backgroundColor='#ef4226' width={"full"} onClick={onClick} marginTop={"2"} color="#ffffff">{text}</Button>
     );
}
 
