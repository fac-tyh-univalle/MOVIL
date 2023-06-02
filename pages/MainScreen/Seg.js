import { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer, faLocationDot, faWhiskeyGlass, faCartShopping, faHotel, faBurger, faStar, faSchool, faBasketball, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import MenuCard from './Components/MenuCard';
import Footer from '../../components/Footer';
import MainScreenStyles from './Styles/MainScreenStyles';
import Loader from '../../components/Loader';
import PocketBaseService from '../../services/PocketBaseService';
import * as Location from 'expo-location';


const Seg = (props) => {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [filteredCollections, setFilteredCollections] = useState([]);

  const handleSearch = useCallback((searchText) => {
      if (searchText) {
          const filtered = collections.filter((item) =>
              item.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredCollections(filtered);
      } else {
          setFilteredCollections(collections);
      }
  }, [collections]);


  const menuItems = [
    {
      title: 'Cafes',
      icon: faMugSaucer,
    },
    {
      title: 'Bares',
      icon: faWhiskeyGlass,
    },
    {
      title: 'Compras',
      icon: faCartShopping,
    },
    {
      title: 'Hoteles',
      icon: faHotel,
    },
    {
      title: 'Comida',
      icon: faBurger,
    },
    {
      title: 'Atracciones',
      icon: faStar,
    },
    {
      title: 'Educación',
      icon: faSchool,
    },
    {
      title: 'Deportes',
      icon: faBasketball,
    }
  ]

  useEffect(() => {
    (async () => {
      try {
  
        setIsLoading(true);
  
        let records = await PocketBaseService.getCategories(menuItems);
        setCollections(records);
  
        
        let location = await Location.getCurrentPositionAsync({});
        let geocode = await Location.reverseGeocodeAsync(location.coords);
        setLocation(geocode[0]);
        
        setFilteredCollections(records);
        
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    })()
  }, [])

  return (
    <View style={MainScreenStyles.mainContainer}>
      <View style={MainScreenStyles.topContainer}>
        <Text style={MainScreenStyles.locationTitle}>Ubicación Actual</Text>
        <View style={MainScreenStyles.positionCont}>
          <FontAwesomeIcon
            icon={faLocationDot}
            size={22}
            color="#3CAFE7"
            marginRight={15}
          />
          <Text style={MainScreenStyles.text}>{location ? `${location.city}, ${location.region}` : 'Cargando...'}</Text>
        </View>
      </View>
      <View style={MainScreenStyles.middlePart}>
         <ScrollView contentContainerStyle={MainScreenStyles.column}>
          {
            filteredCollections && filteredCollections.map((item, index) => (
              <MenuCard
                key={index}
                title={item.name}
                icon={item.icon}
                id={item.id}
                props={props}
              />
            ))
          }
          {isLoading && (
            <Loader/>
          )}
         </ScrollView>
      </View>
      <Footer onSearch={handleSearch} />
    </View>
  );
};



export default Seg;