import { Word } from "../../types/Word"

interface DictionaryEntryProps {
    word: Word
  }

  export default function MentorCard({word}:DictionaryEntryProps) {

    
    return (
      <div>
          <h1>{word.word}</h1>
          <h3>{word.definition}</h3>
      </div>
    )
  }