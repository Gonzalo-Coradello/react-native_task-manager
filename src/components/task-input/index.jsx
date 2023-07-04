import { useState } from "react";
import { Button, TextInput, View } from "react-native";

import { styles } from "./styles";

const TaskInput = ({ setTasks, tasks }) => {
  const [task, setTask] = useState("");
  const [borderColor, setBorderColor] = useState("#C5C9E7");

  const handleFocus = () => {
    setBorderColor("#424D9E");
  };

  const handleBlur = () => {
    setBorderColor("#C5C9E7");
  };

  const handleChange = (text) => {
    setTask(text);
  };

  const handleCreate = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task,
        completed: false,
      },
    ]);
    setTask("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder="add new task"
        autoCapitalize="none"
        autoCorrect={false}
        cursorColor="#424D9E"
        selectionColor="#D4D7ED"
        placeholderTextColor="#C5C9E7"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChange}
        value={task}
      />
      <Button color="#424D9E" title="create" onPress={handleCreate} disabled={task.length === 0} />
    </View>
  );
};

export default TaskInput;
