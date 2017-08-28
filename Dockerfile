FROM node:6.9.5

RUN mkdir /front

WORKDIR /front

ADD . /front/

RUN npm install \
	&& ng buid