import styled from 'styled-components'


export const Container = styled.div`
    display: grid;
    width: 70%;
    margin: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1rem;
    padding-bottom: 3rem;
`
export const Header = styled.div`
    grid-column: 1/2;
    text-align: center;
    margin-bottom: 4rem;
    h1{
        font-size: 40px;
        color: whitesmoke;
    }
    a{
        color: aqua;
    }
`
export const ContentEdit = styled.div`
    background-color: #ffd03c;
    text-align: center;
    border-radius: 1rem;
    width: 80%;
    margin: auto;
    h3{
        background-color: azure;
        width: 30%;
        margin: auto;
        
    }
    textarea{
        font-size: 15px;
        margin-top: 2rem;
        width: 90%;
        min-height: 200px;
        resize: vertical;
        background-color: #ffffe6;
    }
`
export const ContentView = styled.div`
    background-color: #fffba4;
    text-align: left;
    border-radius: 1rem;
    .title{
        background-color: azure ;
        width: 30% ;
        margin: auto;
        text-align: center;
        
    }
    pre{
        background-color: whitesmoke;
    }
    div{
        background-color: #ffffe6;
        margin: auto;
        margin-top: 2rem;
        width: 90%;
        min-height: 200px;
        resize: vertical;
        padding: 1rem;
    }
    img{
        max-width: 100%;
    }
`