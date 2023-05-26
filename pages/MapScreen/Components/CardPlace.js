import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";
import Video from "react-native-video";

const iconColor = "#FFFFFF";
const iconColorFavorite = "#F23134";

const CardPlace = () => {
  const route = useRoute();
  const { image, title, type, description, address, schedule } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" color={iconColor} />
          </Pressable>
          <Text style={styles.titleStyle}>{title}</Text>
          <Icon name="favorite-border" color={iconColorFavorite} />
        </View>
        <ScrollView>
          <Image style={styles.imageStyle} src={image} />
          <View style={styles.infoStyle}>
            <Text style={styles.categoryStyle}>{type}</Text>
            <Text style={styles.description}>
              {description}
            </Text>
            <Text style={styles.address}>
              Direccion: <Text style={styles.noColor}>{address}</Text>
            </Text>
            <Text style={styles.schedule}>Horario de Atencion: <Text style={styles.noColor} > {schedule}</Text> </Text>
          </View>
          <Video
            source={{uri: image ? image : null}}
            style={styles.imageStyle}
            resizeMode="cover"
            muted={true}
          />
        </ScrollView>
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
    color: '#9D9797',
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
    color: "#3CAFE7",
    fontSize: 15,
    fontWeight: "200",
    textAlign: "justify",
    marginTop: 10,
    },
    schedule: {
    color: "#9EFC8E",
    fontSize: 15,
    fontWeight: "200",
    textAlign: "justify",
    marginTop: 10,
    },
  iconLabelStyle: {
    flexDirection: "row",
    marginTop: 10,
  },noColor: {
    color: "#fff",
  }
});

export default CardPlace;