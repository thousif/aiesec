import axios from "axios";
import * as constants from '../constants';

export function fetchOpportunities() {
  var fetchOpportunityConfig = {
    method: 'GET',
    url: constants.API_ENDPOINT+'/v2/opportunities/'+constants.OPPORTUNITY_ID,
    params: {
      access_token : constants.ACCESS_TOKEN,
    }
  };
  return function(dispatch) {
    dispatch({type:"FETCH_OPS"})
    axios(fetchOpportunityConfig).then((response) => {
        console.log(response);
        dispatch({type: "FETCH_OPS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: "FETCH_OPS_REJECTED", payload: err})
      })
  }
}
