import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    image:{
        flex:1,
        borderRadius:18,
     
    },
    imageContainer:{
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        
         elevation: 10,
        
    },
    imageBorder:{
        flex:1,
        overflow:'hidden',
        borderBottomEndRadius:25,
        borderBottomStartRadius:25
    },
    posterImage:{
      flex:1,
     
      resizeMode:"stretch"
    },
    marginContainer:{
        marginHorizontal:20,
        marginTop:28
    },
    subTitle:{
        fontSize:16,
        opacity:0.8

    },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    actorContainer:{
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        
         elevation: 10,
         backgroundColor:'white',
         borderRadius:10,
         marginRight:5,
         paddingRight:5,
         paddingTop:4,
         marginHorizontal:20,
         paddingBottom:10
      
    },
    actorInfo:{
        marginLeft:10,
        // marginTop:1
    }
});