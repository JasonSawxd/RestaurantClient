const tailwindcss = require('tailwindcss') 

module.exports={
    plugins: [
        tailwindcss('./tailwind.js'),//ruta de la configuracion de tailwind
        require('autoprefixer')
    ]
}