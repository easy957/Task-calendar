/*import { Pocketbase } from 'pocketbase-react';

async function loadData() {
  const pb = new Pocketbase('http://139.162.137.51');
  const record = await pb.collection('users').getOne('RECORD_ID', {
    expand: 'relField1,relField2.subRelField',
  });
  
  return record;
}*/

function test(config) {
  var _name = "loadData()";

  return {
    name: function () {
      return _name;
    }
  }
}

export default test;