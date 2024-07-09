import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Layout } from '../../components/Layout/Layout';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './Home.styles';
import {getBanksRequest, createBanks} from '../../services/banks';
import { BankItem } from '../../components/BankItem/BankItem';
import { setBankList } from '../../redux/actions/actions';

export const HomeScreen = ({route}) => {
  const dispatch = useDispatch();
  const bankList = useSelector(state => state.sessionReducer.banks)
  const [isLoading, setIsLoading] = useState(false);
  const [banks, setBanks] = useState([]);

  //Funcion principal a ejecutar para hacer el request de los bancos
  const getBanksList = async () => {
    setIsLoading(true);
    try {
      const data = await getBanksRequest();
      if (Array.isArray(data)) {
        setBanks(data);
        //Una vez obtenida la lista las enviamos a estado global 
        dispatch(setBankList(data));
        //Aqui tambien ponermos hacer un post con los datos a una base de datos en la tabla Bancos
        createBanks(data);
      } else {
        setBanks([]);
      }
    } catch (error) {
      setBanks([]);
    } finally {
      setIsLoading(false);
    }
  };
  const onRefresh = async () => {
    setBanks(bankList);
  };

  useEffect(() => {
    getBanksList();
  }, []);

  useEffect(() => {}, [banks]);

  return (
    <Layout paddingContainer={true}>
      {isLoading ? (
        <View style={styles.container}>
          <Text style={styles.subTitle}>Cargando...</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Lista de bancos</Text>
          <TouchableOpacity onPress={onRefresh} style={styles.iconContainer}>
            <Image
              source={require('../../../assets/images/icons/refresh.png')}
              style={styles.icon}
              resizeMode="contain"
              />
          </TouchableOpacity>
          <View style={styles.listContainer}>
            {banks?.length > 0 ? (
              banks.map((bank, index) => <BankItem key={index} bank={bank} />)
            ) : (
              <View>
                <Text style={styles.subTitle}>No se encontraron bancos</Text>
              </View>
            )}
          </View>
        </View>
      )}
    </Layout>
  );
};
