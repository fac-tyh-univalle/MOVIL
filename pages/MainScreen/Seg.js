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


  useEffect(() => {
    (async () => {
      try {
  
        setIsLoading(true);
  
        let records = await PocketBaseService.getCategories();
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
        <ScrollView
          style={MainScreenStyles.column}
          showsVerticalScrollIndicator={false}
        >
          {
            filteredCollections.length > 0 ? (
              filteredCollections.map((item, index) => (
                <MenuCard
                  key={item.id}
                  title={item.name}
                  id={item.id}
                  props={props}
                />
              ))
            ) : isLoading ? (
              <Loader/>
            ) : (
              <Text>No hay elementos para mostrar</Text>
            )
          }
        </ScrollView>
      </View>
      <Footer onSearch={handleSearch} />
    </View>
  );
};



export default Seg;