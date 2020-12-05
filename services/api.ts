import axios, { AxiosResponse } from 'axios';
import Cookie from 'js-cookie';
import ApiData from '../dtos/ApiData';
import ApiResponseError from '../dtos/ApiReponseError';

import Router from 'next/router';
import { toast } from 'react-toastify';



const api = axios.create({
  baseURL: 'http://localhost:3000'
});

// função que que seta os de autênticação
function setHeaders(res: AxiosResponse<any>) {
  if(res.headers['access-token'] && res.headers['access-token'] !== '') {
    const apiData: ApiData = {
      'access-token': res.headers['access-token'],
      client: res.headers.client,
      expiry: res.headers.expiry,
      'token-type': res.headers['token-type'],
      uid: res.headers.uid
    };

    api.defaults.headers = apiData;
    Cookie.set('@api-data', apiData);
  }
}

// Interceptor de resposta
// Toda vez que o axios realizar uma request e tiver uma resposta, esse código
// será executado antes de devolver o response ao fluxo normal do código.
// Para cada resposta, checamos se existem os headers que são necessários para
// realizar a autenticação na api.
// Se os mesmos existirem, criamos um objeto chamado apiData, setamos ele como
// header padrão no objeto api e ainda, salvamos ele nos cookies do browser
// *res => é a response que será devolvida pela requisição do axios 
api.interceptors.response.use(res => {
  setHeaders(res);
  return res;
}
, err => {
  if (err.response) {
    // setando os headers para authenticação
    setHeaders(err.response);

    const data = err.response.data;

    // se existirem erros
    if (data && data.errors && data.errors.fields) {
      const errors = data.errors as ApiResponseError;

      // pegando o nome dos campos com erros
      const fieldsName = Object.keys(errors.fields)
      
      // para cada campo, fazendo um join nas mensagens de erro
      // e disparando um toast de erro para cada campo
      fieldsName.forEach(error => {
        toast.error(error + ': ' + errors.fields[error].join(`, `))
      })

      // registrando no console os erros
      console.log('errors', errors);
    }
  }

  // redirect para o login caso não tenha direito de acesso ao recurso da api
  if (err.response && err.response.status === 401) {
    Router.push('/Auth/Login');
  }

  // o err tem que ser jogado para que o mesmo seja tratado pelo try/catch
  // que origiou o erro.
  throw err;
});

// Intercetpor de request
// Toda vez que o axios realizar um request, antes do mesmo enviar a requisição,
// esse código será executado.
// Para cada request, checamos se a url contém o valor 'admin' (rota protegida do admin).
// Caso seja uma rota do admin, recuperamos os dados de autenticação dos cookies
// do browser e adicionamos na request.
// Dessa forma simplificamos a forma de tratar os headers de autenticação, não sendo
// preciso adicioná-los em cada request que necessite dos mesmos.
// *req => é o request que será executado após esse código
api.interceptors.request.use(req => {
  if(req.url.includes('admin')) {
    const apiData: ApiData = JSON.parse(Cookie.get('@api-data'));
    req.headers = apiData;
  }

  return req;
})


// Os interceptors do axios funcionando como middlewares que executam antes de devolver
// a response do request ou antes do request ser realizado, dessa forma podemos alterar
// os dados do response ou adicionar dados as request antes das mesmas serem executadas.
// link de referência(en): https://masteringjs.io/tutorials/axios/interceptors

export default api;