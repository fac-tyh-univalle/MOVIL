import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer, faLocationDot, faWhiskeyGlass, faCartShopping, faHotel, faBurger, faStar, faSchool, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import MenuCard from './Components/MenuCard';
import Footer from './Components/Footer';

const Seg = (props) => {
  const handlePress = () => {
    props.navigation.navigate('Categories');
  };

  const menuItems = [
    {
      title: 'Cafes',
      icon: faMugSaucer,
      category: 1,
    },
    {
      title: 'Bares',
      icon: faWhiskeyGlass,
      category: 2,
    },
    {
      title: 'Compras',
      icon: faCartShopping,
      category: 3,
    },
    {
      title: 'Hotel',
      icon: faHotel,
      category: 4,
    },
    {
      title: 'Comida',
      icon: faBurger,
      category: 5,
    },
    {
      title: 'Atracciones',
      icon: faStar,
      category: 6,
    },
    {
      title: 'Educación',
      icon: faSchool,
      category: 7,
    },
    {
      title: 'Más',
      icon: faEllipsis,
      category: 8,
    }
  ]

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
          {
            menuItems.map((item, index) => (
              <MenuCard
                key={index}
                title={item.title}
                icon={item.icon}
                props={props}
              />
            ))
          }
         </View>
      </View>
      <Footer props={props} />
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
  column: {
    flex: 1, 
    marginRight: 8, 
  },
});

export default Seg;