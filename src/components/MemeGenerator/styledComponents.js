// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const FirstContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 40px;
`
export const MainHeading = styled.h1`
  color: #35469c;
  font-size: 28px;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 12px;
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 300px;
  height: auto;
  padding: 10px;
  border-style: solid;
  border-color: #d7dfe9;
  border-width: 1px;
  border-radius: 2px;
  font-size: 12px;
  outline: none;
  margin-bottom: 20px;
`
export const Select = styled.select`
  width: 300px;
  height: auto;
  border-style: solid;
  border-color: #d7dfe9;
  border-width: 1px;
  border-radius: 2px;
  font-size: 12px;
  outline: none;
  margin-bottom: 20px;
  padding: 10px;
`
export const Options = styled.option`
  font-size: 12px;
  height: 100%;
`
export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 300px;
  background-image: url(${props =>
    props.bgImage
      ? props.bgImage
      : 'https://assets.ccbp.in/frontend/react-js/nature-img.png'});
  background-size: cover;
`
export const Paragraph = styled.p`
  font-size: ${props => props.fontSizee}px;
  color: white;
  font-family: 'Open Sans';
`
export const Button = styled.button`
  color: white;
  font-size: 12px;
  padding: 5px;
  width: 100px;
  height: 35px;
  border-style: none;
  outline: none;
  border-radius: 2px;
  background-color: #0b69ff;
`
