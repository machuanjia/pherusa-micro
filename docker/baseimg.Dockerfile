# registry-vpc.cn-beijing.aliyuncs.com/laiye-devops/laiye-private-management-admin:baseimg
FROM liyehaha/alinode:5.13.0-alpine

# 生成 node_modules
COPY ./package.json /apps
COPY ./yarn.lock /apps
RUN NODE_ENV='development' yarn
