export default function reducer(state={
    data:{},
  }, action) {
    switch (action.type) {
      case "FETCH_OPS_FULFILLED": {
        return {...state,
            data : action.payload
          }
      }
    }
    return state
}
