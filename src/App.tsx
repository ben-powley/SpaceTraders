import './App.css'
import NewGame from './NewGame'

function App() {
  return (
    <>
      <h1>STQS</h1>
      <h2>Goal</h2>
      <p>
        Your goal is to visit <a href="https://docs.spacetraders.io/quickstart/new-game">SpaceTraders.io</a> and implement
        as many features from the quickstart as you feel able to.
      </p>
      <blockquote>
        SpaceTraders is a fun, free game driven entirely through API interactions. It is not affiliated with us in any way, 
        so please ensure you abide by their <a href="https://docs.spacetraders.io/api-guide/rate-limits">rate limits</a>.
      </blockquote>
      <h2>Delivery</h2>
      <p>
        We have scaffolded a small project (this repo) to get your started. It contains everything you need to run and work on 
        your quickstart. We will be running it when we receive your submission, so please ensure it works and contains any
        additional information we need to run it.
      </p>
      <p>On completion, return the repository to us, either zipped as an attachment or uploaded to a Git hosting service.</p>
      <blockquote>
        Please do not mention our company name or any of our products in your code, UI or repository naming.
      </blockquote>
      <h2>Tips</h2>
      <p>
        We suggest focusing on a quality <b>vertical slice</b>, rather than lots of functionality. Consider this an 
        opportunity to show us how you might approach building an application, which you will then have to chance to walk 
        us through later. You do not need to build a large application - focus on demonstrating experience over feature completion.
      </p>
      <p>Areas we will be looking to discuss include:</p>
      <ul>
        <li>How you structure your code</li>
        <li>Idiomatic use of React and ECMAScript</li>
        <li>How you use the type system to build confidence in your code</li>
        <li>Performance considerations when dealing with side effects and state</li>
        <li>How styling is organised and applied (we don't expect you to be a designer, so don't worry about aesthetic choices)</li>
        <li>How you use source code management (Git) to segment your changes</li>
      </ul>
      <p>We have implemented the very first part of the quickstart here to get you moving (see "New Game" below), but how 
        you structure things (and how you present the user interface) is entirely up to you.
      </p>
      <hr />
      <NewGame />
    </>
  )
}

export default App
