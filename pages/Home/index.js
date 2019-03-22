import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './style'
// create a component
class Home extends Component {
    render() {
        return (
            <View style={styles.shadow}>
                <Image source={require('../../asseets/food.png')} style={styles.img} />
                <Text style={styles.txt}>Sandwich Ton</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginRight: 199, marginTop: 5 }}>
                    <Image style={{ marginLeft: 123 , marginTop:5}} source={require('../../asseets/postion.png')} />
                    <Text style={[styles.proptxt, { marginLeft: 6, marginTop:5}]}>2.8KM</Text>
                    <View style={styles.separator}>
                    </View>
                    <Image style={{ marginLeft: 20 , marginTop:5}} source={require('../../asseets/time.png')} />
                    <Text style={[styles.proptxt, { marginLeft: 6 }]}>20-30min</Text>
                    <View style={styles.separator}>
                    </View>
                    <Image style={{ marginLeft: 20, marginTop:5 }} source={require('../../asseets/rating.png')} />
                    <Text style={[styles.proptxt, { marginLeft: 6 }]}>4.6</Text>
                </View>

            </View>
        );
    }
}

export default Home;
