import React from 'react'
import ReactDom from 'react-dom/client'
import "./index.css"

const root = ReactDom.createRoot(document.getElementById('root'))
function Saludo(){
    return <div class = "general">
        <div class = "hola">
            <h2>Hola</h2>
        </div>
        <div class = "nombre">
            <h3>My name is Clementina</h3>
        </div>
        <div class = "info">
            <p>I'm a little boy that works in little projects. Thanks for support. I'm Working On It.</p>
        </div>
    </div>

}

root.render(<div>
    {Saludo()}
</div>)