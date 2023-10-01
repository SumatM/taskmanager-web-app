import { Box, Input, Text } from "@chakra-ui/react";
import { convertDateAndTime } from "../utils/conversionFunctions";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { BiLink, BiUnlink ,BiLogoGoogle} from "react-icons/bi";
import "../componant/Cards.css";
import {FcGoogle} from 'react-icons/fc'

export const Cards = ({
  status,
  description,
  priority,
  startTime,
  endTime,
  title,
}) => {
  return (
    <Box
      w={{ base: "90%", sm: "80%", md: "80%" }}
      m="auto"
      p="4"
      mt="10px"
      textAlign={{ base: "left" }}
      border="1px solid gray"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDir={{ base: "column", sm: "row" }}
        >
          <Text>Title: <span className={`span`}>
          {title || "No Title Added"}
            </span> </Text>
          <Text>Status: <span className={`${status} span`}>
          {status || "No Status Selected"}
            </span> </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDir={{ base: "column", sm: "row" }}
          mt="0.8rem"
        >
          <Box>
            Description:
            <span className={`span`}>
              {description || "No Description Added"}
            </span>
          </Box>
          <Box>
            Priority:
            <span className={`${priority} span`}>
              {priority || "No Priority Selected"}
            </span>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDir={{ base: "column", md: "row" }}
          mt="0.8rem"
        >
          <Box display="flex">
            <Input
              size="sm"
              readOnly
              type="date"
              value={convertDateAndTime(startTime, "date")}
            />
            <Input
              size="sm"
              readOnly
              type="time"
              value={convertDateAndTime(startTime, "time")}
            />
          </Box>
          <Text fontWeight="bold">To</Text>
          <Box display="flex">
            <Input
              size="sm"
              readOnly
              type="date"
              value={convertDateAndTime(endTime, "date")}
            />
            <Input
              size="sm"
              readOnly
              type="time"
              value={convertDateAndTime(endTime, "time")}
            />
          </Box>
        </Box>
      </Box>
      {/* icons  */}
      <Box
        fontSize="1.5rem"
        display="flex"
        justifyContent="space-between"
        mt="1rem"
      >
        <MdDeleteOutline />
        <AiOutlineEdit />
        {/* <BiUnlink />
        <BiLink /> */}
        <FcGoogle/>
        <BiLogoGoogle/>
      </Box>
    </Box>
  );
};
