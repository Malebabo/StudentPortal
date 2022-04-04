import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

export default function App() {
  return (
    
      <ScrollView style= {styles.scrollView}>
        <StatusBar/>

        <View style= {styles.topBox}>
        <View style= {styles.headingText}>LUCT - Student Portal</View>
        </View>
        <View style= {styles.container}>

        <View style= {styles.leftSide}>
        <View style= {styles.stdDetailsBox}>
          <Image style= {styles.pp}
          source= {require('./assets/profile.png')}></Image>
           <View style={styles.name}>Malebabo Moorosi</View>
           <View style={styles.stdId}>Student Number: 901013543</View>
           <View style={styles.program}>Current Semester: 2</View>
           <View style={styles.program}>Program: BSSM Y2</View>
           <View style={styles.email}>Email: malebabomoorosi@gmail.com</View>
        </View>
        <View style= {styles.menuBox}>
        <Image style= {styles.pIcon}
          source= {require('./assets/p.icon.png')}></Image>
          <View style={styles.proText}>Profile</View>
          <Image style= {styles.gIcon}
          source= {require('./assets/grades.png')}></Image>
          <View style={styles.grText}>Grades</View>
          <Image style= {styles.setIcon}
          source= {require('./assets/settings.png')}></Image>
          <View style={styles.setText}>Settings</View>
          <Image style= {styles.notIcon}
          source= {require('./assets/notification.png')}></Image>
          <View style={styles.notText}>Notifications</View>
          <Image style= {styles.calIcon}
          source= {require('./assets/calender.png')}></Image>
          <View style={styles.calText}>Calender</View>
        </View>
        </View>


        <View style= {styles.rightSide}>
        <View style= {styles.overviewBox}>
          <View style={styles.overviewText}>Student Overview</View>
        </View>
        <View style= {styles.buttonBox}>
          <Button
        title="Search"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      </View>
      <View style= {styles.grades1}>
          <View style={styles.heading1}>Year1 Semester1 Grades</View>
          <View style= {styles.title1}>
          <Text style= {styles.y1s1}>
            Modules                                                                                                                                    Grades
          </Text>
          </View>
          <View style= {styles.modules1}>
          <Text style= {styles.mg1}>
          Creative Studies. BICS1232                                                                                                            A+
          {"\n"}
          {"\n"}
          Algebra. BIA1234                                                                                                                           B+
          {"\n"}
          {"\n"}
          Principles of Programming. BIPP1222                                                                                           B
          {"\n"}
          {"\n"}
          Introduction to Computer Skills                                                                                                    A-
          {"\n"}
          {"\n"}
          Business Communication                                                                                                              B+
          </Text>
          </View>
        </View>
        <View style= {styles.grades2}>
          <View style={styles.heading2}>Year1 Semester2 Grades</View>
          <View style= {styles.title2}>
          <Text style= {styles.y1s2}>
          Modules                                                                                                                                    Grades
          </Text>
          </View>
          <View style= {styles.modules2}>
          <Text style= {styles.mg2}>
          Calculus_1. BIC2122                                                                                                                       A+
          {"\n"}
          {"\n"}
          Introduction to Database. BI2121                                                                                                  B+
          {"\n"}
          {"\n"}
          Introduction to Data Communication. BIDC2112                                                                          B
          {"\n"}
          {"\n"}
          Principles of Software Engineering. BISE2119                                                                                A-
          {"\n"}
          {"\n"}
          Introduction to Multimedia. BIMM2111                                                                                        B+
          </Text>
          </View>
        </View>
        <View style= {styles.grades3}>
          <View style={styles.heading3}>Year2 Semester1 Grades</View>
          <View style= {styles.title3}>
          <Text style= {styles.y1s3}>
          Modules                                                                                                                                    Grades
          </Text>
          </View>
          <View style= {styles.modules3}>
          <Text style= {styles.mg3}>
          Calculus_2. BIC2212                                                                                                                      A+
          {"\n"}
          {"\n"}
          Fundamentals of Web Design. BIWD2221                                                                                    B+
          {"\n"}
          {"\n"}
          Data Communication and Networking. BIDN2222                                                                       B
          {"\n"}
          {"\n"}
          Fundamentals of Internet Technology. BIIT2211                                                                           A-
          {"\n"}
          {"\n"}
          C++ Programming 1. BICP2224                                                                                                    B+
          </Text>
          </View>
        </View>
        </View>
        </View>

      </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    flexDirection: 'row'
   
  },
 leftView: {
    width: '550px',
    height: '900px',
    backgroundColor: 'snow'
  
  },
  rightView: {
    width: '700px',
    height: '900px',
    backgroundColor: 'snow',
    justifyContent: 'space-evenly'
  },

  scrollView: {
    backgroundColor: 'snow',
    marginHorizontal: 20
  },
  topBox: {
    width: '100%',
    height: '25px',
    backgroundColor: 'mistyrose' 
  },
  headingText: {
    alignItems: 'flex-start',
    fontSize: '17px',
    marginTop: '2px'
  },
  //left View
  stdDetailsBox: {
    width: '300px',
    height: '300px',
    backgroundColor: 'lavenderblush',
    borderBottomWidth: '0.2px',
    borderBottomColor: 'lightpink'
  },
  headerBox: {
    width: '700px',
    height: '20px',
    backgroundColor: 'snow',
    borderBottomWidth: '0.2px',
    borderBottomColor: 'lightpink'
  },
  pp: {
    width: 90,
    height: 90,
    marginLeft: 105,
    marginTop: 50
  },
  name:{
    color: 'black',
    alignItems: 'center',
    fontSize: '18px',
    marginTop: 10
  },
  stdId:{
    color: 'gray',
    alignItems: 'center',
    fontSize: '11px',
    marginTop: 12
  },
  program:{
    color: 'gray',
    alignItems: 'center',
    fontSize: '11px',
    marginTop: 5
  },
  email:{
    color: 'gray',
    alignItems: 'center',
    fontSize: '11px',
    marginTop: 5
  },
  menuBox: {
    width: '300px',
    height: '600px',
    backgroundColor: 'lavenderblush'
  },
  pIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginTop: 20
  },
  proText: {
    color: 'gray',
    fontSize: '20px',
    marginTop: 5,
    marginBottom: 10,
    borderBottomWidth: '0.2px',
    borderBottomColor: 'snow'
  },
  gIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginTop: 20
  },
  grText: {
    color: 'black',
    fontSize: '20px',
    marginTop: 5,
    marginBottom: 10,
    borderBottomWidth: '0.2px',
    borderBottomColor: 'snow'
  },
  setIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginTop: 20
  },
  setText: {
    color: 'gray',
    fontSize: '20px',
    marginTop: 5,
    marginBottom: 10,
    borderBottomWidth: '0.2px',
    borderBottomColor: 'snow'
  },
  notIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginTop: 20
  },
  notText: {
    color: 'gray',
    fontSize: '20px',
    marginTop: 5,
    marginBottom: 10,
    borderBottomWidth: '0.2px',
    borderBottomColor: 'snow'
  },
  calIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginTop: 20
  },
  calText: {
    color: 'gray',
    fontSize: '20px',
    marginTop: 5,
    marginBottom: 10,
    borderBottomWidth: '0.2px',
    borderBottomColor: 'snow'
  },
//right view
  overviewBox: {
    width: '700px',
    height: '35px',
    backgroundColor: 'snow',
    borderBottomWidth: '0.2px',
    borderBottomColor: 'lightpink',
    marginLeft: 100
  },
  overviewText:{
    color: 'gray',
    alignItems: 'center',
    fontSize: '18px',
    marginTop: 10
  },
  buttonBox: {
    width: 120,
    height: '5px',
    backgroundColor: 'snow',
    marginTop: 20,
    marginLeft: 390,
    marginBottom: 50
  },
  title: {
    textAlign: 'center',
    marginTop: 5
  },
  grades1: {
    width: '700px',
    height: '270px',
    backgroundColor: 'white',
    borderBottomWidth: '0.2px',
    borderBottomColor: 'beige',
    borderTopWidth: '0.2px',
    borderTopColor: 'beige',
    borderLeftWidth: '0.2px',
    borderLeftColor: 'beige',
    borderRightWidth: '0.2px',
    borderRightColor: 'beige',
    marginBottom: 10,
    marginLeft: 100
  },
  heading1:{
    color: 'gray',
    fontSize: '18px',
    marginTop: 10,
    marginBottom: 10
  },
  grades2: {
    width: '700px',
    height: '270px',
    backgroundColor: 'white',
    borderBottomWidth: '0.2px',
    borderBottomColor: 'beige',
    borderTopWidth: '0.2px',
    borderTopColor: 'beige',
    borderLeftWidth: '0.2px',
    borderLeftColor: 'beige',
    borderRightWidth: '0.2px',
    borderRightColor: 'beige',
    marginBottom: 10,
    marginLeft: 100
  },
  heading2:{
    color: 'gray',
    fontSize: '18px',
    marginTop: 10,
    marginBottom: 10
  },
  grades3: {
    width: '700px',
    height: '270px',
    backgroundColor: 'white',
    borderBottomWidth: '0.2px',
    borderBottomColor: 'beige',
    borderTopWidth: '0.2px',
    borderTopColor: 'beige',
    borderLeftWidth: '0.2px',
    borderLeftColor: 'beige',
    borderRightWidth: '0.2px',
    borderRightColor: 'beige',
    marginLeft: 100
  },
  heading3:{
    color: 'gray',
    fontSize: '18px',
    marginTop: 10,
    marginBottom: 10
  },
  title1: {
    width: '650px',
    height: '20px',
    backgroundColor: 'white',
    borderBottomWidth: '0.2px',
    borderBottomColor: 'beige',
    borderTopWidth: '0.2px',
    borderTopColor: 'beige',
    borderLeftWidth: '0.2px',
    borderLeftColor: 'beige',
    borderRightWidth: '0.2px',
    borderRightColor: 'beige',
    marginLeft: 15
  },
  y1s1: {
    
  },
  modules1: {
    width: '650px',
    height: '180px',
    backgroundColor: 'white',
    borderBottomWidth: '0.2px',
    borderBottomColor: 'beige',
    borderTopWidth: '0.2px',
    borderTopColor: 'beige',
    borderLeftWidth: '0.2px',
    borderLeftColor: 'beige',
    borderRightWidth: '0.2px',
    borderRightColor: 'beige',
    marginLeft: 15
  },
  mg1: {
      marginTop:6
  },
  title2: {
    width: '650px',
    height: '20px',
    backgroundColor: 'white',
    borderBottomWidth: '0.2px',
    borderBottomColor: 'beige',
    borderTopWidth: '0.2px',
    borderTopColor: 'beige',
    borderLeftWidth: '0.2px',
    borderLeftColor: 'beige',
    borderRightWidth: '0.2px',
    borderRightColor: 'beige',
    marginLeft: 15
  },
  y1s2: {

  },
  modules2: {
    width: '650px',
    height: '180px',
    backgroundColor: 'white',
    borderBottomWidth: '0.2px',
    borderBottomColor: 'beige',
    borderTopWidth: '0.2px',
    borderTopColor: 'beige',
    borderLeftWidth: '0.2px',
    borderLeftColor: 'beige',
    borderRightWidth: '0.2px',
    borderRightColor: 'beige',
    marginLeft: 15
  },
  mg2: {
    marginTop:6
  },
  title3: {
    width: '650px',
    height: '20px',
    backgroundColor: 'white',
    borderBottomWidth: '0.2px',
    borderBottomColor: 'beige',
    borderTopWidth: '0.2px',
    borderTopColor: 'beige',
    borderLeftWidth: '0.2px',
    borderLeftColor: 'beige',
    borderRightWidth: '0.2px',
    borderRightColor: 'beige',
    marginLeft: 15
  },
  y1s3: {

  },
  modules3: {
    width: '650px',
    height: '180px',
    backgroundColor: 'white',
    borderBottomWidth: '0.2px',
    borderBottomColor: 'beige',
    borderTopWidth: '0.2px',
    borderTopColor: 'beige',
    borderLeftWidth: '0.2px',
    borderLeftColor: 'beige',
    borderRightWidth: '0.2px',
    borderRightColor: 'beige',
    marginLeft: 15
  },
  mg3: {
    marginTop:6
  },
});



