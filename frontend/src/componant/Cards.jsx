import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import { convertDateAndTime } from "../utils/conversionFunctions";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { BiLogoGoogle } from "react-icons/bi";
import "../componant/Cards.css";
import { FcGoogle } from "react-icons/fc";
import { TiTick } from "react-icons/ti";
import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { deleteSlot, setupdatedSlots } from "../redux/appReducer";
import ShowToast from "./Toast";
import { deleteTask } from "../utils/deleteSlots";
import { patchTask } from "../utils/patchTask";

export const Cards = ({
  status,
  description,
  priority,
  startTime,
  endTime,
  title,
  gCalendarLink,
  _id,
}) => {
  const [edit, setEdit] = useState(true);
  const [form, setFrom] = useState({
    status,
    title,
    gCalendarLink,
    priority,
    description,
  });
  const [startTimeState, setStartTime] = useState({
    date: convertDateAndTime(startTime, "date"),
    time: convertDateAndTime(startTime, "time"),
  });

  const [endTimeState, setEndTime] = useState({
    date: convertDateAndTime(endTime, "date"),
    time: convertDateAndTime(endTime, "time"),
  });

  const toast = useToast();

  const dispatch = useDispatch();
  const appData = useSelector((s) => s.appStoreReducer);

  function handleEditButton() {
    setEdit(!edit);
  }

  function handleInputForStartTime(e) {
    const { name, value } = e.target;
    setStartTime({ ...startTimeState, [name]: value });
  }

  function handleInputForEndTime(e) {
    const { name, value } = e.target;
    setEndTime({ ...endTimeState, [name]: value });
  }

  function handleInput(e, time, type) {
    const { name, value } = e.target;
    console.log(name, value);
    setFrom({ ...form, [name]: value });
  }

  async function handleSubmit() {
    let formData = {
      startTime: `${startTimeState.date}T${startTimeState.time}`,
      endTime: `${endTimeState.date}T${endTimeState.time}`,
      ...form,
      _id,
    };

    let data = await patchTask(_id, formData, appData?.token);
    console.log(data);
    if (!data?.response?.data) {
      ShowToast(toast, "Update Task", data.message, "success");
      dispatch(setupdatedSlots(formData));
      setEdit(true);
    } else {
      ShowToast(toast, "Update Task", data?.response.data.message, "error");
    }
  }

  async function handleRemoveSlot() {
    let data = await deleteTask(_id);
    if (!data?.response?.data) {
      ShowToast(toast, "Delete Task", data.message, "warning");
      dispatch(deleteSlot(_id));
    } else {
      ShowToast(toast, "Delete Task", data?.response.data.message, "error");
    }
  }

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
          <Text>
            Title:{" "}
            {edit ? (
              <span className={`span`}>{title || "No Title Added"}</span>
            ) : (
              <input
                onChange={handleInput}
                name="title"
                className="inputTag"
                value={form.title}
              />
            )}
          </Text>
          <Text display="flex">
            Status:
            {edit ? (
              <span className={`${form.status} span`}>
                {form.status || "No Status Selected"}
              </span>
            ) : (
              <select
                className="selectTag"
                name="status"
                value={form.status}
                required
                onChange={handleInput}
              >
                <option>Pending</option>
                <option>Active</option>
                <option>Completed</option>
              </select>
            )}
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDir={{ base: "column", sm: "row" }}
          mt="0.8rem"
        >
          <Box>
            Description:
            {edit ? (
              <span className={`span`}>
                {form.description || "No Description Added"}
              </span>
            ) : (
              <input
                className="inputTag"
                onChange={handleInput}
                name="description"
                value={form.description}
              />
            )}
          </Box>
          <Box>
            Priority:
            {edit ? (
              <span className={`${form.priority} span`}>
                {form.priority || "No Priority Selected"}
              </span>
            ) : (
              <select
                className="selectTag"
                value={form.priority}
                required
                name="priority"
                onChange={handleInput}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            )}
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
              readOnly={edit}
              type="date"
              value={startTimeState?.date}
              name="date"
              onChange={handleInputForStartTime}
            />
            <Input
              size="sm"
              readOnly={edit}
              type="time"
              value={startTimeState?.time}
              onChange={handleInputForStartTime}
              name="time"
            />
          </Box>
          <Text fontWeight="bold">To</Text>
          <Box display="flex">
            <Input
              size="sm"
              readOnly={edit}
              type="date"
              value={endTimeState?.date}
              name="date"
              onChange={handleInputForEndTime}
            />
            <Input
              size="sm"
              readOnly={edit}
              type="time"
              value={endTimeState?.time}
              onChange={handleInputForEndTime}
              name="time"
            />
          </Box>
        </Box>
      </Box>
      {/* icons  */}
      <Box
        display="flex"
        justifyContent="space-between"
        mt="1rem"
        alignItems="center"
      >
        {edit ? (
          <Flex w="50%" justify="space-between">
            <Button border="1px solid" onClick={handleEditButton}>
              <AiOutlineEdit size="1.2rem" />
            </Button>
            <Button border="1px solid" onClick={handleRemoveSlot}>
              <MdDeleteOutline size="1.2rem" />
            </Button>
            {/* edit icons  */}
          </Flex>
        ) : (
          <Flex w="50%" justify="space-between">
            <Button
              border="1px solid"
              onClick={handleSubmit}
              bg="green.200"
              m="0"
            >
              <TiTick color="green" size="1.2rem" />
            </Button>
            <Button
              border="1px solid"
              onClick={() => setEdit(true)}
              bg="red.200"
            >
              <RxCross2 color="red" size="1.2rem" />
            </Button>
          </Flex>
        )}

        <Box
          fontSize="1.8rem"
          _hover={
            gCalendarLink ? { cursor: "not-allowed" } : { cursor: "pointer" }
          }
        >
          {gCalendarLink ? <FcGoogle /> : <BiLogoGoogle />}
        </Box>
      </Box>
    </Box>
  );
};
