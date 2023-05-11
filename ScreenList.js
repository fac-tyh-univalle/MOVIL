import FirstScreen from "./pages/FirstScreen"
import SegScreen from './pages/MainScreen/Seg';
import Categories from './pages/Categories';
import MapView from './pages/MapView';
import CardFavorite from './components/CardFavorite';
import CardPlace from './components/CardPlace';
import FavoriteScreen from './pages/FavoriteScreen';
import PlaceCard from './components/PlaceCard';

const ScreenList = [
    {
        name: 'FirstScreen',
        component: FirstScreen,
    },
    {
        name: 'Seg',
        component: SegScreen,
    },
    {
        name: 'Categories',
        component: Categories,
    },
    {
        name: 'MapView',
        component: MapView,
    },
    {
        name: 'CardFavorite',
        component: CardFavorite,
    },
    {
        name: 'CardPlace',
        component: CardPlace,
    },
    {
        name: 'FavoriteScreen',
        component: FavoriteScreen,
    },
    {
        name: 'PlaceCard',
        component: PlaceCard,
    }
]

export default ScreenList;