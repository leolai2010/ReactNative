import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// const AlbumDetail = (props) => {
//     return(
//         <Card>
//             <CardSection>
//                 <View>
//                     <Image source={{ uri: props.album.thumbnail_image }} />
//                 </View>
//                 <View style = {styles.headerContentStyle}>
//                     <Text>{props.album.title}</Text>
//                     <Text>{props.album.artist}</Text>
//                 </View>
//             </CardSection>
//         </Card>
//     );
// };

//destructuring
const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        headerContentStyle,
        headerTextStyle,
        thumbnailStyle, 
        thumbnailContainerStyle, 
        imageStyle,
    } = styles;
    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                    style={thumbnailStyle}
                    source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }}/>
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}>Buy Now!</Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle:{
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    }, 
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle:{
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;

//extra styling notes:
// space between + space around 
// between allocates spaces between items 
// around does the same but also adds spacing margin (top/bottom)
// flexDirection: 'row' vs flexDirection: 'column'
//