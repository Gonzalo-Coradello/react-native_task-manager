import { useState } from "react";
import { View, SafeAreaView } from "react-native";

import { TaskInput, TaskItem, TaskList, TaskModal } from "./components";
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

  const toggleComplete = (item) => {
    const updatedTask = {
      ...item,
      completed: !item.completed,
    };
    setTasks((prev) =>
      prev
        .map((task) => (task.id === item.id ? updatedTask : task))
        .sort((a, b) => a.completed - b.completed)
    );
  };

  const renderItem = ({ item }) => (
    <TaskItem item={item} handleModal={handleModal} handleComplete={toggleComplete} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TaskInput tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} renderItem={renderItem} />
        <TaskModal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          handleDelete={handleDelete}
          selectedTask={selectedTask}
        />
      </View>
    </SafeAreaView>
  );
}
