import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const TaskItem = ({ item, handleModal, handleComplete }) => {
  return (
    <TouchableOpacity
      style={item.completed ? [styles.item, styles.completed] : styles.item}
      onPress={() => handleComplete(item)}>
      <Text style={item.completed ? styles.completedText : styles.itemText}>{item.value}</Text>
      <TouchableOpacity onPress={() => handleModal(item)}>
        <Text style={styles.icon}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TaskItem;
