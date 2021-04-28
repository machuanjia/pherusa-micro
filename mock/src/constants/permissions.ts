export const APP_PERMISSIONS = {
  market: [
    'market*',
    'market.sale*',
    'market.activities*',
    'market.solution*',
    'market.price*',
  ],
  train: [
    'train*',
    'train.center*',
    'train.engineer*',
    'train.shooting*',
    'train.instructor*',
    'train.resource*',
  ],
  operate: [
    'operate*',
    'operate.info*',
    'operate.sign*',
    'operate.certificate*',
  ],
  product: [
    'product*',
    'product.download*',
    'product.trial*',
    'product.faq*',
    'product.support*',
  ],
  project: ['project*', 'project.club*', 'project.report*'],
  bpmn: ['bpmn*', 'bpmn.editor*'],
};

export const ALL_PERMISSIONS = [
    ...APP_PERMISSIONS.market,
    ...APP_PERMISSIONS.train,
    ...APP_PERMISSIONS.operate,
    ...APP_PERMISSIONS.product,
    ...APP_PERMISSIONS.project,
    ...APP_PERMISSIONS.bpmn
]
