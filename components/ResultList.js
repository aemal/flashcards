import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { white, green, red, gray, lightGreen, lightGray } from '../utils/colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { MaterialCommunityIcons} from '@expo/vector-icons'



class ResultList extends Component {
  render() {
        return (
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.tableContainer} >
                <View style={styles.table}>
                    <View style={styles.tableNumber} >
                    <Text style={{fontSize: 16, fontWeight: '600'}}>1</Text>
                    </View>
                    <View style={styles.tableText}>
                    <Text style={{fontSize: 15,}} >
                        And if you follow that link it shows you the border styles. the book.
                    </Text>
                    </View>
                    <MaterialCommunityIcons name='close' size={40} style={{color: red}}/>
                </View>
                <View style={styles.table} >
                    <View style={styles.tableNumber} >
                        <Text style={{fontSize: 16, fontWeight: '600'}}>2</Text>
                    </View>
                    <View style={styles.tableText}>
                        <Text style={{fontSize: 15,}} >
                        And if you follow that link it shows you the border styles. the book.
                        </Text>
                    </View>
                    <MaterialCommunityIcons name='check' size={40} style={{color: green}}/>
                </View>
                <View style={styles.table}>
                    <View style={styles.tableNumber} >
                    <Text style={{fontSize: 16, fontWeight: '600'}}>1</Text>
                    </View>
                    <View style={styles.tableText}>
                    <Text style={{fontSize: 15,}} >
                        And if you follow that link it shows you the border styles. the book.
                    </Text>
                    </View>
                    <MaterialCommunityIcons name='close' size={40} style={{color: red}}/>
                </View>
                <View style={styles.table} >
                    <View style={styles.tableNumber} >
                        <Text style={{fontSize: 16, fontWeight: '600'}}>2</Text>
                    </View>
                    <View style={styles.tableText}>
                        <Text style={{fontSize: 15,}} >
                        And if you follow that link it shows you the border styles. the book.
                        </Text>
                    </View>
                    <MaterialCommunityIcons name='check' size={40} style={{color: green}}/>
                </View>
                <View style={styles.table}>
                    <View style={styles.tableNumber} >
                    <Text style={{fontSize: 16, fontWeight: '600'}}>1</Text>
                    </View>
                    <View style={styles.tableText}>
                    <Text style={{fontSize: 15,}} >
                        And if you follow that link it shows you the border styles. the book.
                    </Text>
                    </View>
                    <MaterialCommunityIcons name='close' size={40} style={{color: red}}/>
                </View>
                <View style={styles.table} >
                    <View style={styles.tableNumber} >
                        <Text style={{fontSize: 16, fontWeight: '600'}}>2</Text>
                    </View>
                    <View style={styles.tableText}>
                        <Text style={{fontSize: 15,}} >
                        And if you follow that link it shows you the border styles. the book.
                        </Text>
                    </View>
                    <MaterialCommunityIcons name='check' size={40} style={{color: green}}/>
                </View>
                <View style={styles.table} >
                    <View style={styles.tableNumber} >
                        <Text style={{fontSize: 16, fontWeight: '600'}}>2</Text>
                    </View>
                    <View style={styles.tableText}>
                        <Text style={{fontSize: 15,}} >
                        And if you follow that link it shows you the border styles. the book.
                        </Text>
                    </View>
                    <MaterialCommunityIcons name='check' size={40} style={{color: green}}/>
                </View>
                <View style={styles.table} >
                    <View style={styles.tableNumber} >
                        <Text style={{fontSize: 16, fontWeight: '600'}}>2</Text>
                    </View>
                    <View style={styles.tableText}>
                        <Text style={{fontSize: 15,}} >
                        And if you follow that link it shows you the border styles. the book.
                        </Text>
                    </View>
                    <MaterialCommunityIcons name='check' size={40} style={{color: green}}/>
                </View>
                <View style={styles.table} >
                    <View style={styles.tableNumber} >
                        <Text style={{fontSize: 16, fontWeight: '600'}}>2</Text>
                    </View>
                    <View style={styles.tableText}>
                        <Text style={{fontSize: 15,}} >
                        And if you follow that link it shows you the border styles. the book.
                        </Text>
                    </View>
                    <MaterialCommunityIcons name='check' size={40} style={{color: green}}/>
                </View>
            </View>
          </ScrollView>     
      )
  }
}

export default ResultList

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 10,
    },
  tableContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    width: wp('100%'),
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: white,
    width: wp('100%'),
    height: 60,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: lightGray,
    borderTopColor: lightGray,
  },
  tableNumber: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 25,
    backgroundColor: lightGray,
    margin: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: gray,
  },
  tableText: {
    width: wp('70%'),
  },

})