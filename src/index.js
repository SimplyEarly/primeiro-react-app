import React from 'react'
import ReactDOM from 'react-dom'
import "./styles.css"

const App = () => {
    const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, 
        backgroundColor: 'blueviolet', color: 'white', border: 'none', 
        width: '100%', borderRadius: 8}
    const textoDoRotulo = 'Nome:'
    const obterTextoDoBotao = () => 'Enviar'
    const aoClicar = () => alert('vc tá indo super, arrasa!')
    return (
        <div style={{margin: 'auto', width: 768, backgroundColor: 
        '#EEE', padding: 12, borderRadius: 8}}>
            <label className='rotulo' htmlFor='nome' style={{display: 'block', 
            marginBottom: 4,}}>{textoDoRotulo}</label>
            <input type='text' id='nome' style={{paddingTop: 8, 
                paddingBottom: 8, borderStyle: 'hidden', outline: 'none',
                width: '100%', borderRadius: 8}} />
            <button 
            onClick={aoClicar}
            style={estilosBotao}>
             {obterTextoDoBotao()}
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)