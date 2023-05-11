import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import PocketBase from 'pocketbase'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer, faLocationDot, faWhiskeyGlass, faCartShopping, faHotel, faBurger, faStar, faSchool, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import MenuCard from './Components/MenuCard';
import Footer from './Components/Footer';
import MainScreenStyles from './Styles/MainScreenStyles';
import Loader from '../../components/Loader';

const Seg = (props) => {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      title: 'Hotel',
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
        // Creamos instancia de PocketBase con la URL de nuestro proyecto
        const pb = new PocketBase('https://magnificent-painter.pockethost.io');
        
        // Obtenemos la lista de categorias
        // .collection('nombre_coleccion')
        let records = await pb.collection('category').getFullList({
            sort: '-created',
        });

        records = records.filter((record) => {
          return record.status
        })

        records = records.map((record) => {

          let icon = menuItems.find((item) => item.title.toLowerCase() === record.name.toLowerCase()).icon;

          return {
            ...record,
            icon: icon !== null ? icon : faEllipsis,
          }
        })

        setCollections(records);
        setIsLoading(false);

      } catch (e) {
        console.log(e);
        
      }
    })()

  }, [])

  // Convertir a scroll view
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
          <Text style={MainScreenStyles.text}>Cercado, Cochabamba</Text>
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
      <Footer props={props} />
    </View>
  );
};



export default Seg;