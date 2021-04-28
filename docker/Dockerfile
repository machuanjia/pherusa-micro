# 在基础镜像中 yarn build，得到 dist 目录
FROM registry-vpc.cn-beijing.aliyuncs.com/laiye-devops/pherusa:baseimg as builder

COPY . /apps
RUN NODE_ENV='development' yarn
RUN yarn build

# 从基础镜像中，只 Copy 运行必要文件到目标镜像
FROM registry-vpc.cn-beijing.aliyuncs.com/laiye-devops/pherusa:baseimg

# 项目文件
COPY --from=builder /apps/package.json /apps
COPY --from=builder /apps/yarn.lock /apps
COPY --from=builder /apps/dist/ /apps/dist
COPY --from=builder /apps/server /apps/server
COPY --from=builder /apps/pm2.json /apps
COPY --from=builder /apps/docker/start.sh /start.sh

# 再执行一次 yarn，只需确保 dependencies 是最新即可，因此不需要 NODE_ENV='development'
RUN yarn
RUN chmod +x /start.sh

CMD ["/start.sh"]
