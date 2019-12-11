import * as pass from '../app/action/userAction/userAction';
import * as types from '../app/action/actionTypes';
import passReducer from '../app/reducers/userReducer';
import store from '../app/config/store';

// describe('Actions', () => {
//   it('Should Remove Key', () => {
//     const expectedAction = {
//       type: types.RESET_USER,
//     };
//     expect(pass.resetUserAction()).toEqual(expectedAction);
//   });
// });

describe('Reducers', () => {
  let stateTesting = {
    loading: false,
    userById: [
      {
        Id: 3,
        nama: 'Aulia Afriza',
        email: 'andre@mail.com',
        address: 'compani',
        gender: 1,
        cardNumber: 231213213,
        cardTypeId: 1,
        cardTypeName: 'ID Card (KTP)',
        businessScaleId: 1,
        bussinessScaleName: 'Micro',
        capitalInfluenceId: 1,
        capitalInfluenceName: 'Rendah',
      },
    ],
    userByIdStatus: true,
  };

  it('Should be initialState', () => {
    let reducer = passReducer(stateTesting, pass.getUserByIdAction(3));
    console.log('Testing store reducer =>', stateTesting);
    expect(reducer).toEqual(stateTesting);
  });

  it('Should Submit Data User', () => {
    console.log('Test action data success');
    store.dispatch(pass.getUserByIdAction(3)).then(res => {
      expect(res).toEqual('success');
    });
  });
});
