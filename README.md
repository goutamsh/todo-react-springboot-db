# To Do App with React JS and Springboot backend and DB 


Start react js application
```
cd todo-react-web
npm start
```

this starts react application at 
http://localhost:3000/


Start Springboot application with main class TodoSpringbootBackendApplication.java

this starts springboot application at 8080 port

curl commands to add few todos
```

curl -d '{"text":"to do text5","done":"true"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/todos

curl -X GET http://localhost:8080/api/todos
```


Production build involving packaging react app in springboot can be achieved with

```
mvn install -Pprod
```

For Development environment the proxy is setup from react:

for dev: http://localhost:3000

for Prod: http://localhost:8080


References:
1. https://developer.okta.com/blog/2018/07/19/simple-crud-react-and-spring-boot
2. https://github.com/oktadeveloper/okta-spring-boot-react-crud-example
