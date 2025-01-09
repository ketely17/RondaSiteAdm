
const style = `

    @media print {
    /* Remove margens da página */
    @page {
        size: A4;
        margin: 0;
    }

    body {
        margin: 0;
        padding: 0;
    }

    /* Certifique-se de que o conteúdo ocupe a página inteira */


    /* Evita espaços indesejados em torno do conteúdo */
    html, body {
        width: 100%;
        height: 100%;
    }
        #container{
        width: 100%;
        height: 100%;
        display:flex;
        background-color: lightblue;
        justify-content: center;
        align-items: center;
    }
    #qrcode{
        position: absolute;
        margin: auto;
        background-color: black;
        z-index: 1;
        bottom: 17%;
    }
    #image-container:{
        margin: auto;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
}



`


module.exports = style