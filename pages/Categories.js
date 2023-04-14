import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SearchBar, Icon, Header } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer, faChevronLeft, faCarSide, faThumbTack, faPizzaSlice, faHome } from '@fortawesome/free-solid-svg-icons'

const Categories = (props) => {
  const handlePress = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Pressable style={styles.backIcon} onPress={handlePress}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={25}
            color="#FFFFFF"
            marginRight={15}
          />
        </Pressable>
        <View style={styles.titleView}>
            <Text style={styles.title}>Categorias</Text>
        </View>
      </View>
      <ScrollView style={styles.itemsContainer} contentContainerStyle={styles.itemsContentContainer}>
        <View style={styles.item}>
            <FontAwesomeIcon
                icon={faThumbTack}
                size={35}
                style={styles.itemIcon}
            />
            <Text style={styles.itemText}>Atracciones Locales</Text>
        </View>
        <View style={styles.item}>
            <FontAwesomeIcon
                icon={faCarSide}
                size={35}
                style={styles.itemIcon}
            />
            <Text style={styles.itemText}>Automotriz</Text>
        </View>
        <View style={styles.item}>
            <FontAwesomeIcon
                icon={faPizzaSlice}
                size={35}
                style={styles.itemIcon}
            />
            <Text style={styles.itemText}>Comida</Text>
        </View>
        <View style={styles.item}>
            <FontAwesomeIcon
                icon={faHome}
                size={35}
                style={styles.itemIcon}
            />
            <Text style={styles.itemText}>Hogar</Text>
        </View>
      </ScrollView> 
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    flexDirection: 'row',
    width: '100%', 
    height: '10%', 
    alignSelf: 'flex-start', 
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 15, 
    marginTop: 25,
  },
  backIcon: {
    width: '10%',
    height: '50%',
    backgroundColor: '#2F3234',
    flexDirection: 'row',
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    width: '73%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#ABABAB',
  },
  itemsContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  itemsContentContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  item: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2F3234',
  },
  itemText: {
    fontSize: 25,
    color: 'black',
    marginLeft: 15,
  },
  itemIcon: {
    marginLeft: 15,
  },
});

export default Categories;