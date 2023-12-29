import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StationDetails = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image source={{uri: 'https://i.ibb.co/2YhGBzB/center.jpg'}} style={styles.image}/>
                <Text>Station Name</Text>
            </View>

            <View style={styles.aboutContainer}>
                <Text>About police station</Text>
                <Text>csdjnnnnnnnnncsajjjnksabcajkkkkkkkkcajj</Text>
            </View>

            <View style={styles.ratingAndReviewContainer}>
                <Text>Ratings And Reviews</Text>

                <View>

                </View>
            </View>

            <View></View>
        </View>
    </ScrollView>
  )
}

export default StationDetails

const styles = StyleSheet.create({})