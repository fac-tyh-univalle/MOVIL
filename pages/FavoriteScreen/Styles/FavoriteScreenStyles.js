import { StyleSheet } from 'react-native';

const FavoriteScreenStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
      },
      topContainer: {
        width: "100%",
        height: "15%",
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
      },
      favoriteTitle: {
        fontSize: 30,
        color: "#000000",
      },
      text: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
      },
      middlePart: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
      },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "10%",
        padding: 15,
      },
    
      favoriteSubTitle: {
        fontSize: 20,
        color: "#000000",
      },
      showAllSubtitle: {
        fontSize: 16,
        color: "#3CAFE7",
        marginTop: 30,
      },
    
      itemText: {
        fontSize: 20,
        color: "black",
      },
      column: {
        flex: 1,
        marginRight: 19,
      },
      itemContainer: {
        height: "10%",
        borderColor: "#C3C3C3",
        borderWidth: 2,
        marginBottom: 8,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      bottomContainer: {
        flex: 1,
        bottom: 0,
        alignItems: "center",
        position: "absolute",
        backgroundColor: "black",
        width: "100%",
        height: 150,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
      },
      searchBarContainer: {
        marginTop: 10,
        width: "90%",
        backgroundColor: "black",
        borderBottomColor: "transparent",
        borderTopColor: "transparent",
        paddingHorizontal: 16,
      },
      searchBarInputContainer: {
        backgroundColor: "#333232",
      },
      searchBarInput: {
        color: "#ABABAB",
      },
      iconContainer: {
        flexDirection: "row",
        marginTop: 15,
      },
      icon: {
        flex: 1,
        color: "#333232",
        justifyContent: "center",
        alignItems: "center",
      },
    });

export default FavoriteScreenStyles;