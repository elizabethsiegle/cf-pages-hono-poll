import { Hono } from 'hono'
import { html } from 'hono/html'
import { css, Style } from 'hono/css'

const app = new Hono()

app.get('/', (c) => {
  const pollContainer = css`
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
  `
  const results = css`
    margin-top: 20px;
    font-size: 20px;
  `
  const btn = css`
  padding: 10px 20px;
  margin: 10px;
  font-size: 18px;
  cursor: pointer;
  `
  return c.html(
    <html>
      <head>
        <title>Cloudflare x Hono Poll</title>
        <Style />
        {html`
          <script>
          let option1Votes = 0;
          let option2Votes = 0;
  
          function voteOption1() {
              option1Votes++;
              document.getElementById('option1Votes').innerText = option1Votes;
          }
  
          function voteOption2() {
              option2Votes++;
              document.getElementById('option2Votes').innerText = option2Votes;
          }
      </script>
        `}
      </head>
      
      <body>
    <div class={pollContainer}>
        <h1>Which company owns all your data?</h1>
        <button class={btn} onclick="voteOption1()">Meta glasses</button>
        <button class={btn} onclick="voteOption2()">Gemini glasses</button>

        <div class={results}>
            <p>Meta glasses Votes: <span id="option1Votes">0</span></p>
            <p>Gemini glasses Votes: <span id="option2Votes">0</span></p>
        </div>
    </div>
    </body>
    </html>
  )
})

export default app
