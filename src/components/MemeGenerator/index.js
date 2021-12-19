import {Component} from 'react'

import {
  MainContainer,
  FirstContainer,
  MainHeading,
  Label,
  Input,
  Select,
  Options,
  SecondContainer,
  Paragraph,
  Button,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    fontSize: 8,
    imageUrl: '',
    topText: '',
    bottomText: '',
    isTrue: false,
  }

  imageUrlChange = e => this.setState({imageUrl: e.target.value})

  topTextChange = e => this.setState({topText: e.target.value})

  bottomTextChange = e => this.setState({bottomText: e.target.value})

  fontSizeChange = e => this.setState({fontSize: e.target.value})

  generateMeme = e => {
    e.preventDefault()
    this.setState({isTrue: true})
  }

  render() {
    const {fontSize, topText, imageUrl, bottomText, isTrue} = this.state
    return (
      <MainContainer>
        <FirstContainer onSubmit={this.generateMeme}>
          <MainHeading>Meme Generator</MainHeading>
          <Label htmlFor="input1">Image URL</Label>
          <Input
            id="input1"
            placeholder="Enter the Image URL"
            value={imageUrl}
            onChange={this.imageUrlChange}
          />
          <Label htmlFor="input2">Top Text</Label>
          <Input
            id="input2"
            placeholder="Enter the Top Text"
            value={topText}
            onChange={this.topTextChange}
          />
          <Label htmlFor="input3">Bottom Text</Label>
          <Input
            id="input3"
            placeholder="Enter the Bottom Text"
            value={bottomText}
            onChange={this.bottomTextChange}
          />
          <Label htmlFor="input3">Font Size</Label>
          <Select value={fontSize} onChange={this.fontSizeChange}>
            {fontSizesOptionsList.map(eachValue => (
              <Options
                fontSize={fontSize}
                value={eachValue.optionId}
                key={eachValue.optionId}
              >
                {eachValue.displayText}
              </Options>
            ))}
          </Select>
          <Button type="submit">Generate</Button>
        </FirstContainer>
        {isTrue && (
          <SecondContainer bgImage={imageUrl} data-testid="meme">
            <Paragraph fontSizee={parseInt(fontSize)}>{topText}</Paragraph>
            <Paragraph fontSizee={parseInt(fontSize)}>{bottomText}</Paragraph>
          </SecondContainer>
        )}
      </MainContainer>
    )
  }
}

export default MemeGenerator
