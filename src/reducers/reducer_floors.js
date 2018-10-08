import { FETCH_FLOORS } from '../actions/index.js'

//this is where redux promise shines. Middlewares have the ability to manipulate actions
//Redux looks at the payload property and stops the action if its a promise
//once the request finishes, then it will dispatch a new action with the same type
//unwraps the promise for us
export default function(state = [], action){

  //console.log('Action Received', action);
  switch (action.type) {
    case FETCH_FLOORS:
      //puts the payload data into the array, this adds on
      //never want to manipulate our state
      //console.log(action.payload.data)
      return action.payload.data;
  }
  //console.log('Action Received', action);
  return state;
}
