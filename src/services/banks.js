const URL = 'https://dev.obtenmas.com/';
export const getBanksRequest = async () => {
  let url = `${URL}/catom/api/challenge/banks`;
  try {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 'error') {
          return Promise.reject(result);
        } else {
          return Promise.resolve(result);
        }
      })
      .catch(error => {
        console.log('error de getClient=>', error);
        console.log('error', JSON.stringify(error));
        return error;
      });
  } catch (error) {
    console.log('Error al hacer la solicitud:', error);
    throw error;
  }
};

export const createBanks = async (data) => {
  //Servidor hecho con Flask
  let url = `http://127.0.0.1:5000/banks`;
  try {

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
    };

    console.log('requestOptions=>', requestOptions);

    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 'error') {
          return Promise.reject(result);
        } else {
          return Promise.resolve(result);
        }
      })
      .catch(error => {
        console.log('error de createBanks=>', error);
        console.log('error', JSON.stringify(error));
        return error;
      });
  } catch (error) {
    console.log('Error al hacer la solicitud:', error);
    throw error;
  }
}

