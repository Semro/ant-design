import React from 'react';
import { SettingOutlined, CopyOutlined, DownloadOutlined } from '@ant-design/icons';
import { Cascader, Input, Select, Space, Button, Tooltip } from 'antd';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

const App: React.FC = () => (
  <Space direction="vertical">
    <Space.Compact block>
      <Button>default Button</Button>
      <Button danger>danger Button</Button>
      <Button type="dashed">dashed Button</Button>
      <Button type="text">text Button</Button>
      <Button type="link">Link Button</Button>
      <Tooltip title="Tooltip">
        <Button icon={<DownloadOutlined />} disabled />
      </Tooltip>
    </Space.Compact>
    <br />
    <Space.Compact>
      <Button>Prefix</Button>
      <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
    <Space.Compact>
      <Input placeholder="prefix" />
      <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
      <Button icon={<CopyOutlined />} />
    </Space.Compact>
    <Space.Compact>
      <Input.Search />
      <Input.Search />
      <Button icon={<CopyOutlined />} />
    </Space.Compact>
    <Space.Compact>
      <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
      <Button type="primary">Submit</Button>
      <Input placeholder="suffix" addonAfter={<SettingOutlined />} />
    </Space.Compact>
    <Space.Compact>
      <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
    <Space.Compact>
      <Button>Prefix</Button>
      <Input
        addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
        defaultValue="mysite"
      />
      <Button type="primary">Submit</Button>
    </Space.Compact>
  </Space>
);

export default App;
