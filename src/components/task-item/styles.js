import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#D4D7ED",
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "#212121",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 10,
  },
  completed: {
    backgroundColor: "#6a6b76",
  },
  itemText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#212121",
  },
  completedText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#212121",
    textDecorationLine: "line-through",
  },
  icon: {
    color: "red",
    fontSize: 16,
    paddingHorizontal: 2,
  },
});
