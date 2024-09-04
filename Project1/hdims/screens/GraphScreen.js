import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Picker } from '@react-native-picker/picker';

export default function GraphScreen() {
  const [indicator, setIndicator] = useState('Type A'); // State for left dropdown
  const [time, setTime] = useState('Past 3 months'); // State for right dropdown

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      }
    ],
    legend: ['Sales'] // Optional legend
  };

  // Colors for different graphs
  const colors = [
    {
      line: 'rgba(158, 158, 158, 1)', // Grey line color
      points: 'rgba(255, 87, 34, 1)', // Bright orange for points
      label: 'rgba(255, 87, 34, 1)', // Bright orange for labels
      backgroundGradientFrom: '#424242', // Dark grey background
      backgroundGradientTo: '#616161' // Lighter grey background
    },
    {
      line: 'rgba(189, 189, 189, 1)', // Slightly different grey line color
      points: 'rgba(0, 188, 212, 1)', // Bright cyan for points
      label: 'rgba(0, 188, 212, 1)', // Bright cyan for labels
      backgroundGradientFrom: '#303030', // Darker grey background
      backgroundGradientTo: '#424242' // Slightly lighter grey background
    },
    {
      line: 'rgba(224, 224, 224, 1)', // Even lighter grey line color
      points: 'rgba(76, 175, 80, 1)', // Bright green for points
      label: 'rgba(76, 175, 80, 1)', // Bright green for labels
      backgroundGradientFrom: '#212121', // Very dark grey background
      backgroundGradientTo: '#424242' // Dark grey background
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topSection} />
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      {[0, 1, 2].map((index) => (
        <View key={index} style={styles.wrapper}>
          <View style={styles.graphContainer}>
            <LineChart
              data={{ ...data, datasets: [{ ...data.datasets[0], color: () => colors[index].line }] }}
              width={Dimensions.get('window').width * 0.9} // from react-native
              height={180} // Reduced height
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: '#f5f5f5',
                backgroundGradientFrom: colors[index].backgroundGradientFrom, // Darker background
                backgroundGradientTo: colors[index].backgroundGradientTo, // Slightly lighter grey background
                decimalPlaces: 2,
                color: (opacity = 1) => colors[index].line, // Line color
                labelColor: (opacity = 1) => colors[index].label, // Label color
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: colors[index].points // Points color
                },
                animation: {
                  duration: 500, // Duration in ms
                  easing: 'easeInOutQuad' // Animation easing function
                }
              }}
              bezier
              style={styles.chart}
            />
            <View style={[styles.dropdownContainer, styles.leftDropdown]}>
              <Picker
                selectedValue={indicator}
                style={styles.dropdown}
                onValueChange={(itemValue) => setIndicator(itemValue)}
              >
                <Picker.Item label="Type A" value="Type A" />
                <Picker.Item label="Type B" value="Type B" />
                <Picker.Item label="Type C" value="Type C" />
              </Picker>
            </View>
            <View style={[styles.dropdownContainer, styles.rightDropdown]}>
              <Picker
                selectedValue={time}
                style={styles.dropdown}
                onValueChange={(itemValue) => setTime(itemValue)}
              >
                <Picker.Item label="Past 3 months" value="Past 3 months" />
                <Picker.Item label="Past 6 months" value="Past 6 months" />
                <Picker.Item label="Past year" value="Past year" />
              </Picker>
            </View>
          </View>
        </View>
      ))}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          {`Selected Indicator: ${indicator} - ${time}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  topSection: {
    width: '100%',
    height: 50, // Height of the top section
    backgroundColor: 'rgba(255, 87, 34, 1)', // Bright orange color
    position: 'absolute', // Position it absolutely
    top: 0, // Align it to the top
    zIndex: 1, // Ensure it is above other elements
  },
  header: {
    width: '100%', // Full width
    alignItems: 'center', // Center horizontally
    marginBottom: 20,
    marginTop: 60, // Adjusted to place it below the top section
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  wrapper: {
    marginBottom: 15, // Reduced margin
    width: '90%', // Adjust width as needed
    position: 'relative', // Ensure dropdowns are positioned relative to this container
    padding: 10, // Padding to prevent border overlap
    alignItems: 'center', // Center items horizontally within this wrapper
  },
  graphContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 32,
    position: 'relative', // Ensure dropdowns are positioned relative to this container
    alignItems: 'center', // Center content within the container
  },
  dropdownContainer: {
    position: 'absolute',
    zIndex: 1, // Ensure dropdowns are on top
  },
  leftDropdown: {
    top: 10,
    left: 10,
  },
  rightDropdown: {
    top: 10,
    right: 10,
  },
  dropdown: {
    backgroundColor: '#e0e0e0', // Light grey to match the graph background
    borderColor: '#b0b0b0', // Subtle border color for better visibility
    borderWidth: 1,
    borderRadius: 16, // Rounded corners for the dropdown
    height: 30, // Adjust height for better fit
    width: 90, // Adjust width to fit well over the images
    paddingVertical: 0, // Remove vertical padding
    paddingHorizontal: 8, // Adjust horizontal padding
    fontSize: 12, // Adjust font size
  },
  chart: {
    borderRadius: 16,
  },
  infoContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center', // Center content within the container
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
});
