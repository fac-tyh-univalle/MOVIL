import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer, faLocationDot, faWhiskeyGlass, faCartShopping, faHotel, faBurger, faStar, faSchool, faEllipsis } from '@fortawesome/free-solid-svg-icons'
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
    }
  ]

  useEffect(() => {
    (async () => {
      try {
  
        setIsLoading(true);
  
        let records = await PocketBaseService.getCategories(menuItems);
        setCollections(records);
  
        setIsLoading(false);

        let location = await Location.getCurrentPositionAsync({});
        let geocode = await Location.reverseGeocodeAsync(location.coords);
        setLocation(geocode[0]);
  
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
        <View style={MainScreenStyles.column}>
          {
            collections && collections.map((item, index) => (
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
         </View>
      </View>
      <Footer  />
    </View>
  );
};



export default Seg;