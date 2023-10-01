import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInitialSlots, setSlot } from "../redux/appReducer";
import { postTask } from "../utils/postTask";
import { convertDateAndTime } from "../utils/conversionFunctions";
import { getTaskList } from "../utils/getTasks";
import { Cards } from "../componant/Cards";

const Dashboard = () => {
  const data = useSelector((e) => e.appStoreReducer);
  const dispatch = useDispatch();

  const [startTime, setStartTime] = useState({ date: "", time: "" });

  const [endTime, setEndTime] = useState({ date: "", time: "" });

  const [form, setForm] = useState({});

  function handleInputForStartTime(e) {
    const { name, value } = e.target;
    setStartTime({ ...startTime, [name]: value });
  }

  function handleInputForEndTime(e) {
    const { name, value } = e.target;
    setEndTime({ ...startTime, [name]: value });
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function bookSlot(e) {
    e.preventDefault();
    dispatch(
      setSlot({
        startTime: `${startTime.date}T${startTime.time}:00`,
        endTime: `${endTime.date}T${endTime.time}:00`,
        ...form,
      })
    );
    postTask({
      startTime: `${startTime.date}T${startTime.time}:00`,
      endTime: `${endTime.date}T${endTime.time}:00`,
      ...form,
    });
  }

  useEffect( () => {
   async function fetchSlots(){
    let data = await getTaskList();
   dispatch(setInitialSlots(data))
   }
   fetchSlots()
  }, []);

  console.log(data)

  return (
    <Box textAlign="center" pb="2rem">
      <Heading>Dashboard</Heading>
      <Box m="1rem 0">
        <Heading size="md">Choose Your Time Slot</Heading>
      </Box>
      {/* form area  */}
      <Box
        w={{ base: "85%", sm: "75%", md: "65%", lg: "50%" }}
        m="auto"
        border="1px solid gray"
        textAlign="left"
        padding="1rem"
      >
        <form onSubmit={bookSlot}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDir={{ base: "column", md: "row" }}
          >
            {/* startTime */}
            <Box
              w={{ base: "100%", sm: "100%", md: "40%" }}
              display={{ base: "flex", sm: "flex", md: "block" }}
              justifyContent="space-between"
              mt="0.8rem"
              alignItems="center"
            >
              <Text fontWeight="600">From</Text>
              <Box w={{ base: "72%", md: "100%" }}>
                <Input
                  name="date"
                  onChange={handleInputForStartTime}
                  type="date"
                />
                <Input
                  onChange={handleInputForStartTime}
                  name="time"
                  type="time"
                />
              </Box>
            </Box>
            {/* endTime */}
            <Box
              display={{ base: "flex", sm: "flex", md: "block" }}
              w={{ base: "100%", sm: "100%", md: "40%" }}
              mt="0.8rem"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontWeight="600">To</Text>

              <Box w={{ base: "72%", md: "100%" }}>
                <Input
                  name="date"
                  onChange={handleInputForEndTime}
                  type="date"
                />
                <Input
                  onChange={handleInputForEndTime}
                  name="time"
                  type="time"
                />
              </Box>
            </Box>
          </Box>
          <Flex mt="0.5rem" alignItems="center">
            <Text fontWeight="600" w="40%">
              Title:
            </Text>
            <Input
              name="title"
              onChange={handleInput}
              required
              placeholder="Enter the Title Here"
            />
          </Flex>
          <Flex mt="0.5rem" alignItems="center">
            <Text fontWeight="600" w="40%">
              Description:
            </Text>
            <Input
              onChange={handleInput}
              name="description"
              required
              placeholder="Enter the Description Here"
            />
          </Flex>
          <Flex mt="0.5rem" alignItems="center">
            <Text fontWeight="600" w="40%">
              Status:
            </Text>
            <Select name="status" required onChange={handleInput}>
              <option>Choose Status</option>
              <option>Pending</option>
              <option>Active</option>
              <option>Completed</option>
            </Select>
          </Flex>

          <Flex mt="0.5rem" alignItems="center">
            <Text fontWeight="600" w="40%">
              Priority:
            </Text>
            <Select required name="priority" onChange={handleInput}>
              <option>Choose Priority Level</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Select>
          </Flex>
          <Box textAlign="center" mt="1rem">
            <Button type="submit">Book Slot</Button>
          </Box>
        </form>
      </Box>

      {/* list of slots  */}
      <Box>
        <Heading>Booked Time Slots</Heading>
        <Box fontWeight="500">
          {data?.slots.map((item, index) => {
            return (
              <Cards key={index} {...item}/>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
