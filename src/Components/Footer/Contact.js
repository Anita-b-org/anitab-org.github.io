import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import contentJson from '../../content/contact_us.json';
import Hyperlink from 'react-native-hyperlink';

function Contact() {
  const content = contentJson.sections.find(
    (section) => section.title === 'Contact Us'
  ).content;

  return (
    <View style={[styles.col, styles.right]}>
      <Text
        style={[
          styles.text,
          styles.heading,
          { fontSize: 40, textAlign: 'justify', fontFamily: 'arial' },
        ]}
      >
        Contact Us
      </Text>
      {content.map((content, i) => (
        <Hyperlink
          linkStyle={{ color: '#2980b9' }}
          onPress={(url) => window.open(url, '_blank')}
        >
          <Text
            className="pop"
            style={[
              styles.text,
              styles.description,
              {
                center:
                  content.par ===
                  'Having a question in your mind or thinking about getting started with open-source? We are here to help!'
                    ? 30
                    : 20,
                fontSize:
                  content.par ===
                  'Having a question in your mind or thinking about getting started with open-source? We are here to help!'
                    ? 30
                    : 20,
                textAlign: 'justify',
                fontFamily: 'DejaVu Serif',
              },
            ]}
            key={i}
          >
            {content.par}
          </Text>
        </Hyperlink>
      ))}
    </View>
  );
}

export default Contact;
