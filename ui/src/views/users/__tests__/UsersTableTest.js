import { shallow, mount } from 'vue-test-utils'
import UsersTable from '../UsersTable';

import '../../../__tests__/setupTests';

describe('UsersTable', () => {
  it('renders the component', () => {
    const table = mount(UsersTable);

    expect(table.contains('el-table')).toBeTruthy()
  });
});
