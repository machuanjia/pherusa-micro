/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-04-22 14:46:53
 * @LastEditors: D.Y
 * @FilePath: /pherusa/src/views/comps/table/TableCollection.tsx
 * @Description: 
 */
import React, { Component } from 'react';
import { Form, Input, Button } from 'laiye-antd';
import i18n from 'i18next';
import { isPhoneNumber } from 'laiye-pro';

type ITableCollectionProps = {
  callback: ({ isVisible, isRefresh }) => unknown;
  form: any;
  entity: unknown;
};
type ITableCollectionState = {
  loading: boolean;
};

export default class TableCollecrtionComponent extends Component<
  ITableCollectionProps,
  ITableCollectionState
> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount() {
    console.log(this.props.entity);
  }
  cancel(e) {
    e.preventDefault();
    this.props.callback({
      isVisible: false,
      isRefresh: false,
    });
  }
  handleSubmit() {
    this.props.callback({
      isVisible: false,
      isRefresh: true,
    });
  }
  checkPhone(rule, value, callback) {
    isPhoneNumber(value) ? callback() : callback('请输入正确的手机号码');
  }
  render() {
    return (
      <Form
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={this.handleSubmit.bind(this)}
      >
        <Form.Item
          label="合作伙伴名称"
          name="partnerName"
          rules={[{ required: true, message: '请输入合作伙伴名称' }]}
        >
          <Input placeholder="请输入名称" />
        </Form.Item>
        <Form.Item
          label="合作伙伴联系电话"
          name="phone"
          rules={[
            { required: true, message: '请输入合作伙伴电话' },
            { validator: this.checkPhone.bind(this) },
          ]}
        >
          <Input placeholder="请输入电话" />
        </Form.Item>
        <Form.Item
          label="合作伙伴负责人"
          name="partnerAdminName"
          rules={[{ required: true, message: '请输入合作伙伴负责人' }]}
        >
          <Input placeholder="请输入合作伙伴负责人" />
        </Form.Item>
        <Form.Item
          label="渠道经理"
          name="channelManagerName"
          rules={[{ required: true, message: '请输入渠道经理' }]}
        >
          <Input placeholder="请输入渠道经理" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="m-r-12">
            {i18n.t('action.save')}
          </Button>
          <Button onClick={this.cancel.bind(this)}> {i18n.t('action.cancel')}</Button>
        </Form.Item>
      </Form>
    );
  }
}
