# 1. Introdução

Nessa aula vamos construir nosso formulário de autenticação e conectar com nossa API!

Antes de tudo, rode a nossa API com:

```
rails s -p 3000
```

# 2. Conteúdo

1. Crie o componente /components/shared/BlueBackground e o arquivo index.tsx. Coloque o seguinte conteúdo:

```jsx
import React from 'react';

const BlueBackground: React.FC = () => {
    return (
        <div>

        </div>
    )
}

export default BlueBackground;
```

2. Crie o arquivo styles/Background.module.css, com o seguinte conteúdo dentro:

```css
.main {
    background-color: var(--color-primary);
    padding: 30px;
    border-radius: 10px;
}
```

3. Agora vamos colocar o nosso css:

```jsx
...
const BlueBackground: React.FC = ({ children }) => {
    return (
        <div className={styles.main}>
            { children }
        </div>
    )
}
...
```

### Criando o formulário da página inicial

1. Crie o seguinte componente components/LoginForm, e dentro crie um arquivo index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const LoginForm: React.FC = () => {
    return (
        <div>
            Login Form
        </div>
    )
}

export default LoginForm;
```

2. Agora vamos criar a page pages/Auth/Login/index.tsx com o seguinte código:
```jsx
import React from 'react';

const Login: React.FC = () => {
  return (
    <div>
      
    </div>
  )
}

export default Login;
```

3. Agora vamos envolver ele com nosso MainComponent:

```jsx
...
import MainComponent from '../../../components/shared/MainComponent';

...

<MainComponent>
...
</MainComponent>

...
```

3. E vamos importar o nosso LoginForm:

```jsx
...
import LoginForm from '../../../components/auth/Login';

... 
    <LoginForm />
...
```

4. Aparecendo nosso componente Login na tela, vamos personalizá-lo.

5. Vamos começar personalizando nosso layout. Para isso, no componente LoginForm, vamos importar o bootstrap e deixá-lo com o seguinte layout:

```jsx
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
...

<div>
    <Row>
        <Col lg={{span: 6, offset: 3}} md={{span: 8, offset: 2}}>
            <h4>Título</h4>

            <InputGroup className="mt-3">
                <FormControl placeholder="Meu e-mail" />
            </InputGroup>

            <InputGroup className="mt-3">
                <FormControl placeholder="Senha" />
            </InputGroup>

            <Button className="btn btn-info mt-3 w-100">Clique em mim</Button>
        </Col>
    </Row>
</div>
...
```

6. Agora vamos importar o BlueBackground:
```jsx
import BlueBackground from '../shared/BlueBackground';
...

<BlueBackground>
    <h4>Título</h4>
    
    ...

    <Button className="btn btn-info mt-3 w-100">Clique em mim</Button>
</BlueBackground>
...
```

7. Agora vamos prepará-lo para receber nossas informações e ficar dinâmico com typescript. 

8. Modifique o código para a seguinte forma:

```tsx
...
interface LoginProps {
    titlePhrase: String,
    buttonPhrase: String
}

...

const LoginForm: React.FC<LoginProps> = ({ titlePhrase, buttonPhrase }) => {
...

<BlueBackground>
    <h4>{ titlePhrase }</h4>

...

<Button className="btn btn-info mt-3 w-100">{ buttonPhrase }</Button>

<br />

Esqueci minha senha
...
```

9. E no nosso pages/Auth/Login/index.tsx, deixe-o da seguinte forma:
```tsx
import LoginForm from '../../components/auth/Login';
...
<div className="p-4 text-center">
    <h2>Entrar</h2>
    
    <LoginForm titlePhrase="Acessar minha conta" buttonPhrase="ACESSAR" />
</div>
...
```

10. Agora vamos criar nosso componente de SignUpForm. Crie o componente components/SignUpForm, com o arquivo index.tsx dentro da pasta.

11. Copie o conteúdo do componente Login, e substitua os seguintes trechos:
```tsx
interface SignUpProps {
...
const SignUpForm: React.FC<SignUpProps> = ({ titlePhrase, buttonPhrase }) => {
...
export default SignUpForm;
```

12. E adicione o seguinte conteúdo acima do InputGroup do email:

```jsx
<InputGroup className="mt-3">
    <FormControl placeholder="Meu Nome" />
</InputGroup>
```

E apague o trecho:

```jsx
<br />

Esqueci minha senha
```

12. No arquivo /src/pages/Auth/Login/index.tsx, adicione o seguinte código:

```jsx
import SignUpForm from '../../components/auth/SignUp';

...
<br />

<SignUpForm titlePhrase="Criar nova conta" buttonPhrase="CRIAR" />
```

### Criando Redux

1. Agora, antes de conectarmos com a nossa API, precisaremos configurar o nosso Redux.

2. Para isso, crie a pasta /store, e dentro crie o index.ts com o seguinte conteúdo:

> Aqui dará erro pois você não tem o arquivo ./modules/rootReducer

```jsx
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './modules/rootReducer';

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer })
const persistor = persistStore(store);
 
export { store, persistor };
```

3. Agora crie a pasta /store/modules e dentro crie o arquivo rootReducer.ts com o seguinte conteúdo:

```jsx
import { combineReducers } from 'redux';

import auth from './auth/reducer';

export default combineReducers({
    auth
});
```

4. Agora vamos criar nosso reducer. Crie a pasta /store/modules/auth, e dentro crie o arquivo reducer.ts com o seguinte conteúdo:

> Aqui deixaremos dois imports. O dtos/User e o dtos/ApiData, que serão explicados abaixo.
> O dtos/User é o arquivo com a interface do User, dos dados do usuário que serão recebidos pela API.
> Já o dtos/ApiData é o arquivo com a interface dos headers da nossa API, necessário para o token reload da API.
> Agora não usaremos o ApiData, mas deixaremos a importação dela pra utilizar futuramente.
> Usaremos o createSlice para manusear nossos dados do Redux.

```jsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from '../../../dtos/User';
import ApiData from '../../../dtos/ApiData';

type State = {
    loggedUser: User;
    apiData: ApiData;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedUser: null, apiData: null } as State,
    reducers: {
        setLoggedUser(state, action: PayloadAction<User>) {
            state.loggedUser = action.payload; 
        }
    }
})

export const { setLoggedUser } = authSlice.actions;
export default authSlice.reducer;
```

5. Agora vamos criar a pasta /dtos, e dentro crie o arquivo User.ts com o seguinte conteúdo:

```jsx
export default interface User {
  id: number,
  name: string;
  email: string;
  profile: string;
}
```

6. Dentro dessa mesma pasta /dtos, crie o arquivo ApiData.ts:

```jsx
export default interface ApiData {
  'access-token': string;
  client: string;
  expiry: number;
  'token-type': string;
  uid: string;
}
```

### Conectando com a API

1. Primeiro vamos criar nossa conexão com a API, para isso, crie a pasta /services, e dentro crie o arquivo api.ts com o seguinte conteúdo:

```jsx
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export default api;
```

2. Agora vamos começar a criar nossos interceptors. Para criar nosso interceptor da response, insira o seguinte código:

> Aqui verificamos se a response possui o header de access-token, e se possuir, guardar o access-token, o client, o expiry, o token-type e o uid, do header, no redux.

```jsx
...
api.interceptors.response.use(res => {
  if(res.headers['access-token']) {
    const apiData = {
      'access-token': res.headers['access-token'],
      client: res.headers.client,
      expiry: res.headers.expiry,
      'token-type': res.headers['token-type'],
      uid: res.headers.uid
    };

    store.dispatch({type: setApiData.type, payload: apiData});
  }

  return res;
})
...
```

3. Abaixo desse interceptor, cole o seguinte código:

```jsx
...
api.interceptors.request.use(req => {
  if(req.url.includes('admin')) {
    api.defaults.headers = store.getState().auth.apiData;
  }
  
  return req;
})
...
```

4. Crie o arquivo services/users.tsx, e dentro insira os dados que usaremos no SignIn:

```jsx
import api from './api';
import User from '../dtos/User';

interface SignInData {
  email: string;
  password: string;
}

interface SignInResponse {
  data: User
}

interface DefaultResponse {
  message: string;
}


const UsersService = {
  signIn: ({ email, password }: SignInData) => 
    api.post<SignInResponse>('auth/v1/user/sign_in', {
      email,
      password
    }),
}

export default UsersService;
```

5. E agora vamos adicionar o de SignUp no mesmo arquivo:

```jsx
...
interface SignUpData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
...
  signUp: ({ 
    name, 
    email, 
    password, 
    password_confirmation 
  }: SignUpData) => 
    api.post<void>('/auth/v1/user', {
      name,
      email,
      password,
      password_confirmation
    }),
...
```


4. Agora vamos adicionar nosso form no nosso LoginForm:

> Aqui pegamos o evento do handle Submit e realizamos a tipagem do email e do password, mandando pro endpoint do signIn. Assim, armazenamos os dados recebidos em um hash e enviamos para o redux por meio do Dispatch.
> Caso o endpoint retornasse 200, exibe o toast de sucesso e redireciona Auth/Login. Caso não, renderiza o Toast de warning exibindo o erro.

```jsx
...
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setLoggedUser } from '../../store/modules/auth/reducer';
import UsersService from '../../services/users';
import { toast } from 'react-toastify';
...
const router = useRouter();
const dispatch = useDispatch();
...
const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();

    try {
        const response = await UsersService.signIn({ email, password });

        console.log(response)

        const { id, email: userEmail, name, profile } = response.data.data;

        const user = {
        id,
        name,
        email: userEmail,
        profile: profile
        };

        dispatch(setLoggedUser(user));

        toast.success('Login realizado com sucesso!');

        router.push(user.profile === 'admin' ? '/Admin/' : '/')
    } catch (err) {
        toast.error('E-mail ou senha inválidos!');
    }
}
...
```

5. Agora substitua a nossa div, por fora do LoginForm, por um form, da seguinte forma:

```jsx
...
return (
    <form onSubmit={handleSubmit}>
    ...
    </form>
)
...
```

6. E modifique os Inputs e o "Esqueci minha senha" para ficar da seguinte forma:

```jsx
import Link from 'next/link';
...
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
...
<FormControl
    placeholder="Meu e-mail"
    value={email}
    type="email"
    onChange={
        (evt: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(evt.target.value)
    }
    required
/>
...
<FormControl
    placeholder="Senha"
    value={password}
    type="password"
    onChange={
        (evt: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(evt.target.value)
    }
    required
/>
...
<br />

<Link href="/Auth/PasswordRecovery">Esqueci minha senha</Link> <br />
...
```

7. Agora crie o componente /components/SignUpForm, e dentro crie o arquivo index.tsx:

8. Copie o conteúdo do componente LoginForm, e cole no SignUpForm. Altere o seguinte conteúdo:

```jsx
...
interface SignUpProps {
...
const SignUpForm: React.FC<SignUpProps> = ({ titlePhrase, buttonPhrase }) => {
...
export default SignUpForm;
```

9. Altere as importações para as seguintes importações:

```jsx
import { useState } from 'react';
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import BlueBackground from '../shared/BlueBackground';
import UsersService from '../../services/users';
import { toast } from 'react-toastify';
...
```

10. Agora adicione as seguintes variáveis e altere os inputs:

```jsx
...
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [passwordConfirmation, setPasswordConfirmation] = useState('');
...
<InputGroup className="mt-3">
    <FormControl 
        placeholder="Meu Nome"
        type="text"
        value={name}
        onChange={
            (evt: React.ChangeEvent<HTMLInputElement>) => 
            setName(evt.target.value)
        }
        required
    />
</InputGroup>

<InputGroup className="mt-3">
    <FormControl 
        placeholder="Meu e-mail" 
        type="email"
        value={email}
        onChange={
            (evt: React.ChangeEvent<HTMLInputElement>) => 
            setEmail(evt.target.value)
        }
        required
    />
</InputGroup>

<InputGroup className="mt-3">
    <FormControl 
        placeholder="Senha" 
        type="password"
        value={password}
        onChange={
            (evt: React.ChangeEvent<HTMLInputElement>) => 
            setPassword(evt.target.value)
        }
        required
    />
</InputGroup>

<InputGroup className="mt-3">
    <FormControl 
        placeholder="Confirmação de senha" 
        type="password"
        value={passwordConfirmation}
        onChange={
            (evt: React.ChangeEvent<HTMLInputElement>) => 
            setPasswordConfirmation(evt.target.value)
        }
        required
    />
</InputGroup>
...
```

11. Agora substitua o handleSubmit por:

> Aqui, caso a senha seja diferente da confirmação de senha, renderiza o toast de erro com a frase indicando que as senhas devem ser iguais.
> Caso sejam diferentes, os dados do input são enviados no endpoint e, caso a resposta do endpoint seja um request 200, renderiza o toast de success. Caso não, é renderizado o toast com a mensagem de erro vinda da API.

```jsx
...
const handleSubmit = async(evt: React.FormEvent):Promise<void> => {
    evt.preventDefault();

    if(password !== passwordConfirmation) {
      toast.error('A senha e a confirmação de senha devem ser iguais!')
      return;
    }
    try {
      await UsersService.signUp({ 
        name, 
        email, 
        password, 
        password_confirmation: passwordConfirmation 
      });

      toast.success('Registro realizado com sucesso!');
    } catch(err) {
      if(err.response.data.errors) {
        toast.warning(err.response.data.errors.full_messages[0]);
      }
      console.log(err.response);
    }
}
...
```