import { Box, Button } from "@chakra-ui/react";

function ShowToast(toast,title,message,status) {
  return toast({
    title: title,
    description: message,
    status: status,
    duration: 1500,
    isClosable: true,
    position:'top-right'
  });
}

export default ShowToast;
