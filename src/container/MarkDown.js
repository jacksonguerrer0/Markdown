import React from 'react'
import { createGlobalStyle } from 'styled-components';
import { Container, ContainerUp, ContentEdit, ContentView, Header } from './MarkDownStyled'

const MarkDown = () => {

    const GlobalStyles = createGlobalStyle`
        body{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            background-color: #0c7975;
        };
    `
    return (
        <>
        <GlobalStyles />
        <Container>
            <Header>
                <h1>Markdown</h1>
                <a href='https://github.com/jacksonguerrer0' target='_blank' rel="noreferrer">jacksonguerrer0</a>
            </Header>
            <ContentEdit>
                <h3>Editor</h3>
                <textarea 
                name="edit"
                cols="30" 
                rows="10">
                </textarea>
            </ContentEdit>
            <ContentView>
                <h3>Vista</h3>
                <textarea 
                name="view"
                cols="30" 
                rows="10">
                </textarea>                
            </ContentView>
        </Container>
        </>
    )
}

export default MarkDown
