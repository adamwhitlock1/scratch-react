import React from 'react';
import PropTypes from 'prop-types';

const Splitting = (props) => {
  const {debug = false, sequential = true, sentence, wordClassName = 'word', characterClassName = 'char'} = props

  const getSequentialIndex = (letterIndex, startingNumber) => {
    return letterIndex + startingNumber
  }

  const getCharacterClassName = (letterIndex, startingNumber) => {
    const indexValue = sequential ? getSequentialIndex(letterIndex, startingNumber) : letterIndex
    return `${characterClassName} ${characterClassName}__index-${indexValue}`
  }

  const getWordClassName = (wordIndex) => {
    return `${wordClassName} ${wordClassName}__index-${wordIndex}`
  }

  const words = sentence.split(' ')

  const sentenceData = words.reduce((accumulator, current) => {
    // the number that the last word 'left off at'
    const startingNumber = accumulator.reduce((total, currentObj) => {
    total = total + ((currentObj?.wordLength) || 0)
    return total
    }, 0)

    accumulator.push({word: current, wordLength: current.length, startingNumber, letters: Array.from(current) })

    return accumulator
  }, [])

  const renderWhitespace = (word, words) => {
    if (word !== words.at(-1)) return (<span className="whitespace">&nbsp;</span>)
    return null
  }

  const renderCharacters = (word) => {
    return word.letters.map((char, index) => {
      return (<span key={index} className={getCharacterClassName(index, word.startingNumber)}>{char}</span>)
    })
  }

  return (
    <div className="splitting-container">
      { sentenceData.map((word, wordIndex) => {
        return (
          <span key={wordIndex} className={getWordClassName(wordIndex)}>
            {renderCharacters(word)}
            {renderWhitespace(word, words)}
          </span>
        )
      }) }
      { debug ? (<pre>{JSON.stringify(sentenceData, null, 2)}</pre>) :  null }
    </div>
  );
};

Splitting.propTypes = {
  sentence: PropTypes.string.isRequired,
  debug: PropTypes.bool,
  sequential: PropTypes.bool,
  characterClassName: PropTypes.string,
  wordClassName: PropTypes.string
}

export default Splitting;