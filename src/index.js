import { useState } from "react";
import { View, Text, Button, SafeAreaView, Modal } from "react-native";

import { TaskInput, TaskItem, TaskList } from "./components";
import { styles } from "./styles";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setIsVisible(false);
  };

  const renderItem = ({ item }) => <TaskItem item={item} handleModal={handleModal} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TaskInput tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} renderItem={renderItem} />
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
