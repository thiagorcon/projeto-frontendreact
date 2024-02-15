import styled from 'styled-components'

export const Imagem   = styled.img`
     width: 75px;
     height:  75px;
     justify-items: center;    
    
`
export const ContainerBloco = styled.div `
width: 425px;
display: grid;
height: 100vh;
grid-template-columns: 1fr 1fr;
border: 1px solid black;
padding: 10px;
grid-template-rows: auto;
align-items:center;
text-align: center;
justify-content: center;
`

export const ContainerBls = styled.div `
width: 150px;
height: 200px;
border: 1px solid black;
padding: 10px;
background-color: black
`

export const Card = styled.div`
width: 150px;
height: 200px;
border: 1px solid black;
padding: 10px;
`