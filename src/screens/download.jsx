

import React from "react";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import { api_url } from "../config";


// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 30
  },
  section: {
    marginBottom: 20
  },
  header: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333'
  },
  headerName: {
    fontSize: 35,
    fontWeight: 750,
    textAlign: 'center',
    fontWeight: '800',
    marginBottom: 20,
    marginTop: 20,
    color: '#555555'
  },
  subheader: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333'
  },
  grayText: {
    fontSize: 12,
    textAlign: 'left',
    color: '#888888',
    marginBottom: 5
  },
  rightText: {
    fontSize: 12,
    textAlign: 'right',
    color: '#888888',
    marginBottom: 5
  },
  profileImage: {
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 50,
    width: 100,
    height: 100
  },
  badge: {
    backgroundColor: 'darkgreen',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 10,
    position: "absolute",
    top: "2rem",
    right: "2rem",

  },
  specialty: {
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 10
  },
});


// Create Document Component
const Resume = (props) => (

  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.headerName}>{props?.state?.basic?.name}</Text>
        {props?.state?.experience && props?.state?.experience.length > 0 ?
          <Text style={styles.badge}>{props?.state?.experience[0]?.title}</Text>
          :
          null
        }
        <Text style={styles.header}>Personal Information</Text>
        <Text style={styles.subheader}>City: {props?.state?.basic?.address}</Text>
        <Text style={styles.subheader}>Email: {props?.state?.basic?.email}</Text>
        <Text style={styles.subheader}>Phone: {props?.state?.basic?.phone}</Text>
      </View>

      {/* <View style={styles.section}>
        <Text style={styles.header}>About</Text>
        <Text style={styles.subheader}>{props?.state?.basic?.intro}</Text>
      </View> */}

      <View style={styles.section}>
        <Text style={styles.header}>Education</Text>
        {props?.state?.qualification?.map((v, i) => (
          <View key={i}>
            <Text style={styles.subheader}>{v.title}</Text>
            <Text style={styles.grayText}>{v.institute}</Text>
            <Text style={styles.rightText}>{v.year}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Work Experience</Text>
        {props?.state?.experience?.map((v, i) => (
          <View key={i}>
            <Text style={styles.subheader}>{v.title}</Text>
            <Text style={styles.grayText}>{v.institute}</Text>
            <Text style={styles.rightText}>{v.year}</Text>
          </View>
        ))}
      </View>


      <View style={styles.section}>
        <Text style={styles.header}>Research Papers</Text>
        {props?.state?.research?.map((v, i) => (
          <View key={i}>
            <Text style={styles.subheader}>{v.title}</Text>
            <Text style={styles.grayText}>{v.institute}</Text>
            <Text style={styles.rightText}>{v.year}</Text>
          </View>
        ))}
      </View>


      <View style={styles.section}>
        <Text style={styles.header}>Area of Speciality</Text>
        <Text style={styles.specialty}>{props?.state?.speciality}</Text>
      </View>


      <Text style={styles.subheader}>Open to Opportunities: {props?.state?.open ? 'Yes' : 'No'}</Text>


    </Page>
  </Document>

);





const App = () => {

  const state = useSelector(state => state.counter)


  return (
    <div style={{ width: "90%" }}>
      <PDFDownloadLink style={{ width: "90%", color: "white", textDecoration: "none" }} document={<Resume state={state} />} fileName="resume.pdf">
        {({ blob, url, loading, error }) => (loading ? <Button style={{ width: "100%" }} size="lg" type="submit" color="success" disabled className="full_width">Loading...</Button> : "Download"
        )}

      </PDFDownloadLink>
    </div>)
}

export default App;
