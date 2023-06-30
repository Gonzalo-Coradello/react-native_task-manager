import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    flex: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 20,
  },
  modalDetailMessage: {
    fontSize: 14,
    color: "#212121",
  },
  selectedTask: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "bold",
    paddingVertical: 10,
    textAlign: "center",
  },
  modalButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
});
