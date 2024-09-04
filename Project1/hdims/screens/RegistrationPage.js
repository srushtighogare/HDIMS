import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const RegistrationPage = () => {
  const [facilityType, setFacilityType] = useState('');
  const [facilitySubtype, setFacilitySubtype] = useState('');
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.container}>
      <View style={styles.topSection} />
      <View style={styles.dropdownContainer}>
        <View style={styles.dropdownWrapper}>
          <Text style={styles.label}>Facility Type</Text>
          <Picker
            selectedValue={facilityType}
            onValueChange={(itemValue) => setFacilityType(itemValue)}
            style={styles.dropdown}
          >
            <Picker.Item label="Select Facility Type" value="" />
            <Picker.Item label="Type 1" value="type1" />
            <Picker.Item label="Type 2" value="type2" />
            {/* Add more items as needed */}
          </Picker>
        </View>
        <View style={styles.dropdownWrapper}>
          <Text style={styles.label}>Facility Subtype</Text>
          <Picker
            selectedValue={facilitySubtype}
            onValueChange={(itemValue) => setFacilitySubtype(itemValue)}
            style={styles.dropdown}
          >
            <Picker.Item label="Select Facility Subtype" value="" />
            <Picker.Item label="Subtype 1" value="subtype1" />
            <Picker.Item label="Subtype 2" value="subtype2" />
            {/* Add more items as needed */}
          </Picker>
        </View>
      </View>
      {/* New section for System of Medicine */}
      <View style={styles.systemOfMedicineSection}>
        <Text style={styles.sectionTitle}>System of Medicine</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { /* Handle button press */ }}>
            <Text style={styles.buttonText}>Allopathy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => { /* Handle button press */ }}>
            <Text style={styles.buttonText}>Dentist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => { /* Handle button press */ }}>
            <Text style={styles.buttonText}>Ayurveda</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* New section for Hospital Specialty Type */}
      <View style={styles.hospitalSpecialtySection}>
        {/* Removed the title */}
      </View>
      {/* New section for Rounded Buttons */}
      <View style={styles.roundedButtonsContainer}>
        <TouchableOpacity style={[styles.roundedButton, styles.buttonFFA]} onPress={() => { /* Handle button press */ }}>
          <Text style={styles.roundedButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.roundedButton, styles.buttonFF6]} 
          onPress={() => navigation.navigate('Graphs')} // Navigate to GraphScreen
        >
          <Text style={styles.roundedButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e3e7',
    position: 'relative',
  },
  topSection: {
    width: '100%',
    height: '8%',
    backgroundColor: 'rgba(255, 87, 34, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginTop: '25%',
  },
  dropdownWrapper: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 10,
  },
  dropdown: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  systemOfMedicineSection: {
    marginTop: '10%',
    paddingVertical: 60, // Adjust this value to control the height
    paddingHorizontal: 40, // Equal horizontal padding
    backgroundColor: '#D3D3D3',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 30, // More rounded corners
    alignItems: 'center',
    width: '80%', // Reduced width
    alignSelf: 'center', // Center horizontally
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#808080',
    textAlign: 'center',
    marginBottom: 10, // Adjust this value to control space between title and buttons
    width: '100%', // Ensure the title takes full width
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 1,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 3, // Elevation for Android shadow effect
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  hospitalSpecialtySection: {
    marginTop: '10%',
    height: 300, // Fixed height to increase the height of the rectangle
    paddingHorizontal: 40, // Equal horizontal padding
    backgroundColor: '#D3D3D3',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 30, // More rounded corners
    alignItems: 'center',
    width: '80%', // Reduced width
    alignSelf: 'center', // Center horizontally
    justifyContent: 'center', // Center items vertically
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 8, // Shadow radius
    elevation: 6, // Elevation for Android shadow effect
  },
  roundedButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginTop: 20, // Space between hospitalSpecialtySection and buttons
    marginBottom: 20, // Space from the bottom of the screen
  },
  roundedButton: {
    width: 100, // Fixed width for smaller buttons
    height: 50, // Height remains unchanged
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:40, // Reduced padding between buttons
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 8, // Shadow radius
    elevation: 6, // Elevation for Android shadow effect
    backgroundColor: '#FFFFFF', // Background color for better visibility of shadow
  },
  buttonFFA: {
    backgroundColor: '#FFAE82',
  },
  buttonFF6: {
    backgroundColor: '#FF6B1C',
  },
  roundedButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default RegistrationPage;
