import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";

import { styles } from "./styles";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
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
      },
    ]);
    setTask("");
  };

  const handleModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setIsVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleModal(item)}>
      <Text style={styles.itemText}>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
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
          <Button
            color="#424D9E"
            title="create"
            onPress={handleCreate}
            disabled={task.length === 0}
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={tasks}
            renderItem={renderItem}
            contentContainerStyle={styles.itemList}
            alwaysBounceVertical={false}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Modal visible={isVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Task details</Text>
            <View style={styles.modalDetailContainer}>
              <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
              <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <Button title="Cancel" color="#424D9E" onPress={() => setIsVisible(false)} />
              <Button title="Delete" color="red" onPress={() => handleDelete(selectedTask.id)} />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
