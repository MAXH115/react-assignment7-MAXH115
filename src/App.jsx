/** Component Imports */
import Example from './components/Example'

/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend putting those within the /components folder
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles'
 *  4. We added additional comments below to guide you
 */

const App = () => {
  return (
    <div>
      {<Example /> /** You can remove this when you wish, it's provided as an example of modular styling */}
      
      {/** Rating state start **/}

      How did we do?

      Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!

      1 2 3 4 5

      Submit

      {/** Rating state end **/}

      {/** Thank you state start **/}

      You selected {/** Add rating here **/} out of 5

      Thank you!

      We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!

      {/** Thank you state end **/}
    </div>
  )
}

export default App