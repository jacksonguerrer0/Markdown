import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import { Container, ContentEdit, ContentView, Header } from './MarkDownStyled'
import marked from 'marked'
const GlobalStyles = createGlobalStyle`
body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #0c7975;
};
`
const MarkDown = () => {
    const [textEdit, setTextEdit] = useState('# Usa mi markdown, es gratis :)')

    const handleTextEdit = (e) => {
        setTextEdit(e.target.value)
    }
    const renderer = new marked.Renderer();
    const markdown = marked(textEdit, {sanitize: true})
    console.log(markdown)
    console.log(renderer)
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
                rows="10"
                onChange={handleTextEdit}
                value={textEdit}>
                </textarea>
            </ContentEdit>
            <ContentView>
                <h3 className='title'>Vista</h3>
                <div dangerouslySetInnerHTML={{__html: marked(markdown, {renderer: renderer}) }}
                />            
            </ContentView>
        </Container>
        </>
    )
}

export default MarkDown
