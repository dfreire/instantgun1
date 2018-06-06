FROM alpine:edge

ARG BUILD_DATE
ARG VCS_REF
ARG VCS_URL
ARG VERSION

WORKDIR .
ADD . .

ENV NPM_CONFIG_LOGLEVEL warn

RUN apk update && apk upgrade \
  && apk add  --no-cache ca-certificates nodejs-npm \
  && apk add --no-cache --virtual .build-dependencies python make g++ \
  && npm install \
  && apk del .build-dependencies && rm -rf /var/cache/* /tmp/npm*

EXPOSE 3000
CMD ["node","app.js"]
