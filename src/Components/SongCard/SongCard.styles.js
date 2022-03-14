import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    padding:10,
    flexDirection:'row',
  },
  image: {
    width:120,
    height:120,
    borderRadius:60,
  },
  inner_container: {
    padding:10,
    flex:1,
    justifyContent:'center',
  },
  title: {
    fontWeight:'bold',
    fontSize:20,
    color:'black',
  },
  info_container: {
    alignItems:'center',
    flexDirection:'row',
    
  },
  year: {
    marginLeft: 5,
    fontSize:12,
    marginHorizontal:5,
    color:'gray',
    fontWeight:'bold',
  },
  album:{
    
  },
  album_title:{
    fontStyle:'italic',
    
  },
  soldout_container:{
    marginLeft:120,
    borderWidth:1,
    borderColor:'red',
    padding:5,
    borderRadius:5,
    textAlign:'center',

  },
  soldout_title:{
    marginLeft:25,
    color:'red',
    fontSize:15,
  },
  content_container:{
    flex:1,
    flexDirection:'row',
    
  }
});
