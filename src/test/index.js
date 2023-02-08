/*import PocketBase from 'pocketbase';

const pb = new PocketBase('http://139.162.137.51');
const record = await pb.collection('users').getOne('RECORD_ID', {
  expand: 'relField1,relField2.subRelField',
});*/

function test(config) {
  var _name = 'record';

  return {
    name: function () {
      return _name;
    }
  }
}

export default test;