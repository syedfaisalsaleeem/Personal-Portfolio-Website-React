import React from 'react'
import './maincontent.css'
function MainContent(){
    return(
    <div className="styling"> 
        <h1>
        faisal
        </h1>
        <p>
        this is a paragraph
        </p>
        <ul> 
            <li> 1 </li>
            <li>2</li>
            <li>3</li> 
        </ul>
        <ol>
            <li> 1 </li>
            <li>2</li>
            <li>3</li> 
        </ol>
  <form action="#">
    <p>
      <label>
        <input type="checkbox" className="filled-in" />
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" className="filled-in" />
        <span>Yellow</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" className="filled-in"  />
        <span>Filled in</span>
      </label>
    </p>
    <p>
      <label>
        <input class="filled-in" type="checkbox" />
        <span>Indeterminate Style</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" class="filled-in" />
        <span>Green</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" class="filled-in" />
        <span>Brown</span>
      </label>
    </p>
  </form>
        
    </div>
    )
}
export default MainContent