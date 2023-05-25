import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, StyleSheet, Text } from "react-native";

const MenuCard = ({id,title, icon, props}) => {

  return (
    <Pressable style={styles.itemContainer} onPress={() => props.navigation.navigate('MapView',{id})}>
      <FontAwesomeIcon
        icon={icon}
        size={40}
      />
      <Text style={styles.itemText}>{title}</Text>
    </Pressable>
  );
}

export default MenuCard;

const styles = StyleSheet.create({
  itemContainer: {
    height: '10%',
    borderColor: '#C3C3C3',
    borderWidth: 2,
    marginBottom: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
    itemText: {
    fontSize: 20, 
    color: 'black', 
  },
});