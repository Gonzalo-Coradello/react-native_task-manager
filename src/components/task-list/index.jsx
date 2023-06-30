import { View, FlatList } from "react-native";

import { styles } from "./styles";

const TaskList = ({ tasks, renderItem }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        contentContainerStyle={styles.itemList}
        alwaysBounceVertical={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TaskList;
