export type IListMixin = {
  data: Record<string, unknown>[];
  loading: boolean;
  pagination: unknown;
  searchAction: () => unknown;
  openCollection: () => unknown;
  closeCollection: () => unknown;
  getList: () => unknown;
  getRowKey: any;
  collectionCallBack: () => unknown;
  editEntity: any;
  deleteEntity: any;
  entity: Record<string, unknown>;
  isCollectionVisible: boolean;
};
