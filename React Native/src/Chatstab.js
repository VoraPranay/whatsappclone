import { StackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import Homescreen from './Homescreen';
import Chatscreen from './Chatscreen';
import Contactstab from './Contactstab';
import DP from './DP';


const  Screen= StackNavigator({
    Login: { screen: Homescreen },
     Home: { screen: Homescreen },
     ChatScreen: { screen: ChatScreen },
     
     Contact: { screen: Contactstab },
     DP: { screen: DP }
    },
    {
        headerMode: 'none',
        mode: 'modal'
    });

export default Screen;