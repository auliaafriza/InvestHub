import {getNotificationsByIdApi} from '../../api/notificationApi/getNotificationByUserIdApi';
import {
  GET_NOTIFICATIONS,
  GET_NOTIFICATIONS_BY_ID,
  POST_NOTIFICATIONS,
} from '../actionTypes';

// const getNotifications = () => {
//   return dispatch => {
//     return dispatch({
//       type: GET_NOTIFICATIONS,
//       payload: getNotificationsApi(),
//     });
//   };
// };

const getNotificationsById = data => {
  return dispatch => {
    return dispatch({
      type: GET_NOTIFICATIONS_BY_ID,
      payload: getNotificationsByIdApi(data),
    });
  };
};

// const postNotifications = data => {
//   return dispatch => {
//     return dispatch({
//       type: POST_NOTIFICATIONS,
//       payload: postNotificationsApi(data),
//     });
//   };
// };

export {getNotificationsById};
