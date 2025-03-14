FROM maven:3.9.4-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# 🚀 Stage 2: Create a Minimal Java Runtime for Production
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose application port
EXPOSE 8080

# Tell Spring Boot to use environment variables
ENV SPRING_CONFIG_LOCATION=classpath:/application.properties

# Run the Spring Boot application
CMD ["java", "-jar", "app.jar"]
