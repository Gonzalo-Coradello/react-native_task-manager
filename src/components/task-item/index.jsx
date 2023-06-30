import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const TaskItem = ({ item, handleModal }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => handleModal(item)}>
      <Text style={styles.itemText}>{item.value}</Text>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
