import {React} from 'react';
import { Text, View, Image } from 'react-native';
import {stylesItem} from './BankItem.styles';

export const BankItem = ({ bank }) => {
  return (
    <View style={stylesItem.bankContainer}>
      <Image
        source={{ uri: bank.url }}
        style={stylesItem.bankImage}
        resizeMode="contain" 
      />
      <View style={stylesItem.bankInfoContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={stylesItem.bankName}>{bank.bankName}</Text>
          <Text style={stylesItem.bankAge}>{bank.age}</Text>
        </View>
        <Text style={stylesItem.bankDescription}>{bank.description}</Text>
      </View>
    </View>
  );
};
