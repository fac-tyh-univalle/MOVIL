import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer, faLocationDot, faWhiskeyGlass, faCartShopping, faHotel, faBurger, faStar, faSchool, faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Seg = (props) => {
  const [search, setSearch] = React.useState('');

  const handlePress = () => {
    props.navigation.navigate('Categories');
  };

  const handlePress2 = () => {
    props.navigation.navigate('MapView');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.locationTitle}>Ubicación Actual</Text>
        <View style={styles.positionCont}>
          <FontAwesomeIcon
            icon={faLocationDot}
            size={22}
            color="#3CAFE7"
            marginRight={15}
          />
          <Text style={styles.text}>Cercado, Cochabamba</Text>
        </View>
      </View>
      <View style={styles.middlePart}>
        <View style={styles.column}>
          <Pressable style={styles.itemContainer} onPress={handlePress2}>
            <FontAwesomeIcon
              icon={faMugSaucer}
              size={45}
            />
            <Text style={styles.itemText}>Cafes</Text>
          </Pressable>

          <View style={styles.itemContainer}>
            <FontAwesomeIcon
              icon={faWhiskeyGlass}
              size={40}
            />
            <Text style={styles.itemText}>Bares</Text>
          </View>

          <View style={styles.itemContainer}>
            <FontAwesomeIcon
              icon={faCartShopping}
              size={40}
            />
            <Text style={styles.itemText}>Compras</Text>
          </View>

          <View style={styles.itemContainer}>
            <FontAwesomeIcon
              icon={faHotel}
              size={40}
            />
            <Text style={styles.itemText}>Hotel</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.itemContainer}>
            <FontAwesomeIcon
              icon={faBurger}
              size={40}
            />
            <Text style={styles.itemText}>Comida</Text>
          </View>

          <View style={styles.itemContainer}>
            <FontAwesomeIcon
              icon={faStar}
              size={40}
            />
            <Text style={styles.itemText}>Atracciones</Text>
          </View>

          <View style={styles.itemContainer}>
            <FontAwesomeIcon
              icon={faSchool}
              size={40}
            />
            <Text style={styles.itemText}>Educación</Text>
          </View>

          <Pressable style={styles.itemContainer} onPress={handlePress}>
            <FontAwesomeIcon
              icon={faEllipsis}
              size={40}
            />
            <Text style={styles.itemText}>Más</Text>
          </Pressable>
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
    flexDirection: 'column',
  },
  topContainer: {
    width: '100%', 
    height: '15%', 
    alignSelf: 'flex-start', 
    alignItems: 'center',
    justifyContent: 'center', 
    paddingLeft: 10, 
  },
  positionCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationTitle: {
    marginTop: 15,
    fontSize: 20,
    color: '#ABABAB',
  },
  text: {
    fontSize: 16, 
    color: 'black', 
    fontWeight: 'bold',
  },
  middlePart: {
    height: '100%',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 16, 
  },
  itemText: {
    fontSize: 20, 
    color: 'black', 
  },
  column: {
    flex: 1, 
    marginRight: 8, 
  },
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
  bottomContainer: {
    flex: 1,
    bottom: 0,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    height: 150,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  searchBarContainer: {
    marginTop: 10,
    width: '90%',
    backgroundColor: 'black',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    paddingHorizontal: 16,
  },
  searchBarInputContainer: {
    backgroundColor: '#333232',
  },
  searchBarInput: {
    color: '#ABABAB',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  icon: {
    flex: 1,
    color: '#333232',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Seg;