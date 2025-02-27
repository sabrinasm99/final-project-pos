FROM eclipse-temurin:21-jdk-alpine AS build

WORKDIR /app

COPY ./backend/pointofsales .

RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

COPY --from=build /app/target/pointofsales-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]