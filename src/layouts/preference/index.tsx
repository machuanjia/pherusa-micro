import { Avatar, Drawer, Menu, Modal, Popover, Radio } from 'laiye-antd';
import React, { Component } from 'react';
import i18n from 'i18next';
import { SketchPicker } from 'react-color';
import { DRAWER_SIZE, MODAL_SIZE } from 'laiye-pro';
import { logout } from '@utils/index';
import {
  QuestionCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styles from './index.module.less';
import { getLanguage } from '@i18n/index';

type IPreferenceProps = Record<string, unknown>;

type IPreferenceState = {
  isSettingVisible: boolean;
  isLogVisible: boolean;
};

export default class PreferenceComponent extends Component<IPreferenceProps, IPreferenceState> {
  constructor(props) {
    super(props);
    this.state = {
      isSettingVisible: false,
      isLogVisible: false,
    };
  }
  menuAction({ key }) {
    if (key === 'log') {
      this.setState({
        isLogVisible: true,
      });
    }
    if (key === 'setting') {
      this.setState({
        isSettingVisible: true,
      });
    }
    if (key === 'logout') {
      logout();
    }
  }
  closeSetting() {
    this.setState({
      isSettingVisible: false,
    });
  }
  closeLog() {
    this.setState({
      isLogVisible: false,
    });
  }
  changeLang(e) {
    e.preventDefault();
    // 自动设置localstorage
    i18n.changeLanguage(e.target.value);
    window.location.reload();
  }
  themeAction() {}
  render() {
    const content = (
      <Menu
        style={{ width: 200 }}
        className={`${styles['prefernce-menu']}`}
        onClick={this.menuAction.bind(this)}
      >
        <Menu.Item key="log">
          <QuestionCircleOutlined /> {i18n.t('preference.log')}
        </Menu.Item>
        <Menu.Item key="setting">
          <SettingOutlined /> {i18n.t('preference.personal')}
        </Menu.Item>
        <Menu.Item key="logout">
          <LogoutOutlined /> {i18n.t('preference.logout')}
        </Menu.Item>
      </Menu>
    );
    return (
      <div className={styles['preference-wrap']}>
        <Popover placement="rightBottom" title={null} content={content}>
          <Avatar
            size={36}
            style={{ backgroundColor: '#2249c0' }}
            className="pointer"
            icon={<UserOutlined />}
          />
        </Popover>
        <Modal
          title={i18n.t('preference.log')}
          width={MODAL_SIZE.md}
          visible={this.state.isLogVisible}
          footer={null}
          onCancel={this.closeLog.bind(this)}
        >
          <p>
            <b>V0.0.1</b>
            <div>本版本包含完整的项目框架结构，你可以稍加改动即可进行业务开发。包含内容如下：</div>
          </p>
          <p>1. http封装（采用axios插件做移除处理）</p>
          <p>2. 国际化（i18next封装处理）</p>
          <p>3. 导航</p>
          <p>4. 布局（app布局和内容页布局）</p>
          <p>5. 样式（变量定义及结构划分）</p>
          <p>6. 状态管理</p>
          <p>7. 路由（路由定义及鉴权逻辑）</p>
          <p>8. 配置（项目配置，webpack配置）</p>
          <p>9. mock数据</p>
          <p>10. 代码风格</p>
          <p>11. 代码检查（使用prettier和eslint）</p>
          <p>12. 代码提交检查（commit-lint）</p>
          <p>
            <a
              href="https://wiki.laiye.com/display/FE/Pherusa"
              target="_blank"
              rel="noopener noreferrer"
            >
              详细文档
            </a>
          </p>
        </Modal>

        <Drawer
          // @ts-ignore
          title={i18n.t('preference.preference')}
          placement="right"
          closable={false}
          width={DRAWER_SIZE.xsm}
          onClose={this.closeSetting.bind(this)}
          visible={this.state.isSettingVisible}
        >
          <div className="text-dark m-b-8">{i18n.t('preference.language')}</div>
          <div className="m-b-24">
            <Radio.Group onChange={this.changeLang.bind(this)} defaultValue={getLanguage()}>
              <Radio.Button value="zh">{i18n.t('preference.chinese')}</Radio.Button>
              <Radio.Button value="en">{i18n.t('preference.english')}</Radio.Button>
              {/* <Radio.Button value="ZH">{i18n.t('preference.cantonese')}</Radio.Button> */}
            </Radio.Group>
          </div>
          <div className="text-dark m-b-8">{i18n.t('preference.size')}</div>
          <div className="m-b-24">
            <Radio.Group onChange={this.changeLang.bind(this)} defaultValue="middle">
              <Radio.Button value="large">{i18n.t('preference.large')}</Radio.Button>
              <Radio.Button value="middle">{i18n.t('preference.medium')}</Radio.Button>
              <Radio.Button value="small">{i18n.t('preference.small')}</Radio.Button>
            </Radio.Group>
          </div>
          <div className="text-dark m-b-8">{i18n.t('preference.theme')}</div>
          <div className="m-b-24">
            <Popover
              overlayClassName="preference-pop-wrap"
              placement="bottom"
              title={null}
              content={<SketchPicker />}
              trigger="click"
            >
              <div className="preference-theme-block"></div>
            </Popover>
          </div>
        </Drawer>
      </div>
    );
  }
}
