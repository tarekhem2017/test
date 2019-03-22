import {StyleSheet } from 'react-native';

export default StyleSheet.create({
 
      shadow: {
        borderRadius:10,
        width:350,
        height:200,
        marginTop:20,
        marginLeft:5,
        marginBottom:10,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 8,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
        alignItems: 'center'

      },
      img:{
        width:330,
        height:130,
        marginTop:8,
        borderRadius:10
      },
      txt:{
        marginTop:8,
        marginRight:230,
      },
      proptxt:{
        fontSize:13,
        marginLeft:20,
        marginTop:5
      },
      separator: {
        flex: 1, 
        borderWidth: 0.6, 
        borderColor: '#c3c2c2',
        height:22,
        marginTop:3,
        marginBottom:3,
        marginLeft:15
       },
      
    
});