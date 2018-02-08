import { shallow, mount } from 'vue-test-utils'
import UsersTable from '../UsersTable';

import '../../../__tests__/setupTests';

describe('UsersTable', () => {
  it('should render the component', () => {
    const table = mount(UsersTable);

    expect(table.contains('el-table')).toBeTruthy()
  });

  it('should render table rows', () => {
    const table = mount(UsersTable);
    table.setProps({
      users: [
        {
          attributes: {
            _id: 1,
            email: 'john@doe.com',
            username: 'johndoe',
          }
        }
      ],
    });
    console.log(table.find('el-table').html());
    expect(table.find('ElBody').exists()).toBe(true);
  });
});
