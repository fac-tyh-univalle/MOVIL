import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const iconColor = "#FFFFFF";
const iconColorFavorite = "#F23134";

const CardPlace = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" color={iconColor} />
          </Pressable>
          <Text style={styles.titleStyle}>Paseo Aranjuez</Text>
          <Icon name="favorite-border" color={iconColorFavorite} />
        </View>
        <Image style={styles.imageStyle} source={require('../Assets/card-image.png')} />
        <View style={styles.infoStyle}>
          <Text style={styles.categoryStyle}>Centro Comercial</Text>
          <Text style={styles.description}>
            El paseo aranjuez es uno de los centros comerciales mas grandes de
            Cochabamba en el se encuentran desde salas de cine hasta tiendas de
            ropa, hay lugares en los cuales puedes comer, jugar y pasar el rato.
          </Text>
          <Text style={styles.address}>
            Direccion: Av.America #488 esquina Pantaleon Dalence.
          </Text>
          <Text style={styles.schedule}>Horario de Atencion: Abierto </Text>
        </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const deviceHeight = Math.round(Dimensions.get("window").height);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight,
    alignItems: "center",
    marginTop: 40,
  },
  cardContainer: {
    width: deviceWidth,
    height: deviceHeight,

    backgroundColor: "#111213",

    borderRadius: radius,

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
    padding: 20,
  },
  imageStyle: {
    width: deviceWidth - 40,
    height: 300,
    borderRadius: radius,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",

  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    color: "#fff",
  },
  categoryStyle: {
    fontWeight: "200",
    color: "#fff",
  },
  infoStyle: {
    alignContent: "center",
    alignSelf: "center",

    padding: 20,
  },
    description: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "200",
    textAlign: "justify",
    marginTop: 8,
    },
    address: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "200",
    textAlign: "justify",
    marginTop: 10,
    },
    schedule: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "200",
    textAlign: "justify",
    marginTop: 10,
    },
  iconLabelStyle: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default CardPlace;
