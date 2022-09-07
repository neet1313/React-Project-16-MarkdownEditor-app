import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const previewText = `### Markdown editor 

#### Example:

> You define your own life. Don't let other people write your script. 

![image](https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdW50YWlufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60) 

\`\`\` 
<textarea className='input' 
  onChange={textChangeHandler} 
  placeholder = "Write something inspiring..." 
  autoFocus 
/> 
\`\`\`

- ***~ Have a nice day!***`

function App() {
  const [markdown, setmarkdown] = useState(previewText);

  const textChangeHandler = (e) => {
    setmarkdown(e.target.value)
  }

  return <main>
    <section className='markdown'>

      <textarea className='input'
        placeholder="Write something..."
        onChange={textChangeHandler}
        value={markdown}
        autoFocus
      />

      <article className='result'>
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </article>

    </section>
  </main>
}

export default App
