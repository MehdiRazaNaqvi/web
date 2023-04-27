import React from "react";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import { api_url } from "../config";


// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF'
  },
  section: {
    margin: 40,
    padding: 10
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20
  },
  subheader: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10
  },
  profileImage: {
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 50,
    width: 100,
    height: 100
  },
  text: {
    fontSize: 12,
    marginBottom: 10
  }
});

// Create Document Component
const Resume = (props) => (

  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>

        {props.state.basic.image != "" ?

          <Image source={`${api_url}/images/${props.state.basic.image}`} style={styles.profileImage} />
          :
          <Image source="https://avatars2.githubusercontent.com/u/39096315?s=460&v=4" style={styles.profileImage} />


        }

        <Text style={styles.header}>Personal Information</Text>
        <Text style={styles.text}>Name: {props.state.basic.name}</Text>
        <Text style={styles.text}>City: {props.state.basic.address}</Text>
        <Text style={styles.text}>Email: {props.state.basic.email}</Text>
        <Text style={styles.text}>Phone: {props.state.basic.phone}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Education</Text>
        {props.state.qualification.map((v, i) =>

          <Text key={i} style={styles.subheader}>{v}</Text>

        )}
        {/* <Text style={styles.text}>University of XYZ</Text> */}
        {/* <Text style={styles.text}>Graduated: May 2020</Text> */}
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Work Experience</Text>

        {props.state.experience.map((v, i) =>
          <Text style={styles.subheader}>{v}</Text>

        )}

        {/* <Text style={styles.text}>ABC Company</Text>
        <Text style={styles.text}>June 2020 - Present</Text>
        <Text style={styles.text}>- Developed and maintained software applications</Text>
        <Text style={styles.text}>- Fixed bugs and improved application performance</Text> */}
      </View>
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
