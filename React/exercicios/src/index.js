import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'

const elemento = <h1>React 2</h1> // isto na realidade não é HTML e sim sintaxe do react

ReactDOM.render(elemento , document.getElementById('root')) // sintaxe jsx do react onde voce criar e inclui certo elemento no nó da dom especificado
//$('<h1>').html('React 2')

ReactDOM.render(<Primeiro /> , document.getElementById('hello'))
ReactDOM.render(<BomDia nome="Guilherme" idade={10}/> , document.getElementById('goodbye'))