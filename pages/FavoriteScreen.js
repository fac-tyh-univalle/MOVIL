import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMugSaucer,
  faLocationDot,
  faWhiskeyGlass,
  faCartShopping,
  faHotel,
  faBurger,
  faStar,
  faSchool,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import CardFavorite from "../components/CardFavorite";

const FavoriteScreen = (props) => {
  const [search, setSearch] = React.useState("");

  const handlePress = () => {
    props.navigation.navigate("Categories");
  };

  const handlePress2 = () => {
    props.navigation.navigate("MapView");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.favoriteTitle}>Favoritos</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.favoriteSubTitle}>Tus favoritos</Text>
        <Text style={styles.showAllSubtitle}>Ver Todos</Text>
      </View>

      <View style={styles.middlePart}>
        <View style={styles.column}>

            <CardFavorite />
            <CardFavorite />
        </View>
        <View style={styles.column}>

            <CardFavorite />
            <CardFavorite />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <SearchBar
          placeholder="Buscar"
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          inputStyle={styles.searchBarInput}
          searchIcon={<Icon name="search" size={18} color="#ABABAB" />}
          value={search}
          onChangeText={setSearch}
        />
        <View style={styles.iconContainer}>
          <Icon
            name="home"
            type="font-awesome"
            size={40}
            color="#ABABAB"
            containerStyle={styles.icon}
          />
          <Icon
            name="compass"
            type="font-awesome"
            size={40}
            color="#ABABAB"
            containerStyle={styles.icon}
          />
          <Icon
            name="heart"
            type="font-awesome"
            size={40}
            color="#ABABAB"
            containerStyle={styles.icon}
          />
          <Icon
            name="gear"
            type="font-awesome"
            size={40}
            color="#ABABAB"
            containerStyle={styles.icon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default FavoriteScreen;
