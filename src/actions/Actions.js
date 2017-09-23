import axios from "axios";
import * as constants from '../constants';

export function resetPromoState(){
  return function(dispatch){
    dispatch({type:"RESET_PROMO_STATE"});
  }
}

export function logout(){
  return function(dispatch){
    dispatch({type : "LOGOUT"})
  }
}

export function listPromos(data) {
  var listPromosConfig = {
    method: 'POST',
    url: constants.API_ENDPOINT+'/ops/ls',
    data  : data
  };
  return function(dispatch) {
    dispatch({type:"LIST_PROMO"})
    axios(listPromosConfig).then((response) => {
        console.log(response);
        dispatch({type: "LIST_PROMO_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        console.log(err);
        if(err.response && err.response.status == 498){
          dispatch({type : "LOGOUT"})
          return
        }
        dispatch({type: "LIST_PROMO_REJECTED", payload: err})
      })
  }
}

export function getGroupDetails(data) {
  var getGroupDetailsConfig = {
    method: 'POST',
    url: constants.API_ENDPOINT+'/ops/g_grp_dt',
    data: {
      code : data.gcode
    }
  };
  return function(dispatch) {
    dispatch({type: "FETCH_GROUP_DETAILS"})
    axios(getGroupDetailsConfig).then((response) => {
        console.log(response);
        dispatch({type: "FETCH_GROUP_DETAILS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        console.log(err);
        if(err.response && err.response.status == 498){
          dispatch({type : "LOGOUT"})
          return
        }
        dispatch({type: "FETCH_GROUP_DETAILS_REJECTED", payload: err})
      })
  }
}

export function fetchPromo(promo) {
  var fetchPromoConfig = {
    method: 'POST',
    url: constants.API_ENDPOINT+'/ops/lsi',
    data: {
      promo_id : promo
    }
  };
  return function(dispatch) {
    dispatch({type:"FETCH_PROMO"})
    axios(fetchPromoConfig).then((response) => {
        console.log(response);
        dispatch({type: "FETCH_PROMO_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        console.log(err);
        if(err.response && err.response.status == 498){
          dispatch({type : "LOGOUT"})
          return
        }
        dispatch({type: "FETCH_PROMO_REJECTED", payload: err})
      })
  }
}
