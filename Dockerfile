FROM openjdk:11.0.4-jdk

ARG VERSION

ENV HTTP_PORT 8000

EXPOSE $HTTP_PORT

RUN mkdir /hawkapi /app
COPY . /hawkapi/

RUN cd /hawkapi \
&& ./gradlew --no-daemon build \
&& cp build/libs/code-sample-hawk-api-0.1.jar /app/ \
&& rm -Rf build/ \
&& cd / \
&& rm -Rf /hawkapi /root/.gradle/

WORKDIR /app

ENV PWD=/app
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app/code-sample-hawk-api-0.1.jar"]
