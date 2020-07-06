import Reactotron from 'reactotron-react-native'
import sagaPlugin from 'reactotron-redux-saga'

// then add it to the plugin list
Reactotron
  .configure()
  .use(sagaPlugin()) // <-- sweet
  .useReactNative()
  .connect()



  